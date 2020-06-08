<template>
	<view>
		<view class="my">
			<view class="my-top">
				<view class="my-top-a">
					<view style="padding-top: 20rpx;">
						<image class="myImg" :src="userPic" @click="userDetail" mode="aspectFill"></image>
					</view>
					<view class="my-top-a-p" @click="user">
						<view class="my-name">用户名：{{seekUser.name==''?'需要注册或设置用户':seekUser.name}}</view>
						<view class="my-info">手机号：{{seekUser.tel==''?'去登录':seekUser.tel}}</view>
					</view>
				</view>
				<view class="my-top-b">
					<button type="default" @click="card">我的卡包</button>
				</view>
			</view>
			<hr class="top-hr">
			<view class="my-content">
				<view @click="vouchers" style="display: flex; flex-direction: row;">
					<image class="content-img" src="../../static/icon/jklc.png" mode="aspectFill" />
					<view class="view">代金券</view>
				</view>
				<hr>
				<view @click="store" style="display: flex; flex-direction: row;">
					<image class="content-img" src="../../static/icon/sc.png" mode="aspectFill" />
					<view class="view">收藏的专家</view>
				</view>
				<hr>
				<view @click="settled" style="display: flex; flex-direction: row;">
					<image class="content-img" src="../../static/icon/zj.png" mode="aspectFill" />
					<view class="view">专家入驻</view>
				</view>
				<hr>
				<view style="display: flex; flex-direction: row;" @click="tuijian">
					<image class="content-img" src="../../static/icon/fx.png" mode="aspectFill" />
					<view class="view">推荐seek给朋友</view>
				</view>
				<hr>
				<view @click="help" style="display: flex; flex-direction: row;">
					<image class="content-img" src="../../static/icon/help.png" mode="aspectFill" />
					<view class="view">帮助与反馈</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tkiFileManager from "@/components/tki-file-manager/tki-file-manager.vue"
	import url from "../../common/config.js";
	var _self;
	export default {
		// 注册组件
		components: {
			tkiFileManager
		},
		data() {
			return {
				tel: '',
				flag: true,
				userPic: "/static/01.png",
				title: '',
				path: '',
				url: url,
				id: '',
				seekUser: {
					id:'',
					name:'',
					tel:'',
					img:''
				}
			}

		},
		onShow() {
			uni.getStorage({
				key: "userTel",
				success: function(res) {
					_self.tel = res.data.tel;
					_self.id = res.data.id;
					_self.flag = false;
					//通过ID来查询用户信息
					uni.request({
						url: _self.url + "admin/seek/getSeekUserById",
						method: "POST",
						data: {
							'id': _self.id
						},
						header: {
							'content-type': 'application/json'
						},
						success: (res) => {
							_self.seekUser = res.data;
							_self.userPic = _self.url+'upload/portal/seekFile/'+_self.seekUser.img;
							//_self.userPic = _self.url + res.data.img;
							console.log(_self.userPic)
						},
						fail: (err) => {
							console.log('错误是：' + err)
						}
					})
				}
			});
		},
		onLoad(options) {
			_self = this;
			uni.getStorage({
				key: "userTel",
				success: function(res) {
					console.log(res)
					_self.tel = res.data.tel;
					_self.id = res.data.id;
					_self.flag = false;
					//通过ID来查询用户信息
					uni.request({
						url: _self.url + "admin/seek/getSeekUserById",
						method: "POST",
						data: {
							'id': _self.id
						},
						header: {
							'content-type': 'application/json'
						},
						success: (res) => {
							_self.seekUser = res.data;
							_self.userPic = _self.url+'upload/portal/seekFile/'+_self.seekUser.img;
							//_self.userPic = _self.url + res.data.img;
							console.log(_self.userPic)
						},
						fail: (err) => {
							console.log('错误是：' + err)
						}
					})
				}
			});
		},
		methods: {
			user() {
				if(_self.seekUser.tel == ''){
					uni.navigateTo({
						url: "../user/user"
					})
				}else{
					uni.showToast({
						title:'已经登录了!'
					})
				}
				
			},
			card() {
				uni.navigateTo({
					url: "../card/card"
				})
			},
			vouchers() {
				uni.navigateTo({
					url: "../vouchers/vouchers"
				})
			},
			store() {
				uni.navigateTo({
					url: "../store/store"
				})
			},
			settled() {
				uni.navigateTo({
					url: "../settled/settled"
				})
			},

			help() {
				uni.navigateTo({
					url: "../help/help"
				})
			},
			userDetail() {
				if (_self.id == '') {
					uni.showToast({
						title: '没有注册，无法修改'
					})
				} else {
					uni.navigateTo({
						url:"../changeUserInfo/changeUserInfo?id="+_self.id,
		
					})
				}
			},
			tuijian() {
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 1,
					summary: "我正在使用长伴人力资源高端人才咨询平台，赶紧跟我一起来体验！",
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.my {
		margin: 20rpx 30rpx 0rpx 30rpx;

		.top-hr {
			height: 15rpx;
			background-color: #F1F1F1;
			border: 0;
			border-radius: 7rpx;
		}

		.my-top {
			.my-top-a {
				display: flex;
				flex-direction: row;
				height: 120rpx;

				.myImg {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50rpx;
				}

				.my-top-a-p {
					padding-left: 30rpx;
					padding-top: 20rpx;

					.my-name {}

					.my-info {
						font-size: 16rpx;
						padding-top: 10rpx;
						color: #939393;
					}
				}
			}

			.my-top-b {
				margin: 20rpx 30rpx 20rpx 30rpx;

				button {
					background-color: #F0AD4E;
					border-radius: 30rpx;
				}
			}
		}

		.my-content {
			.view {
				padding: 40rpx 0 20rpx 80rpx;
				height: 60rpx;
				font-size: 30rpx;
			}

			.content-img {
				padding-top: 20rpx;
				height: 60rpx;
				width: 60rpx;
				border-radius: 30rpx;
			}
		}
	}
</style>

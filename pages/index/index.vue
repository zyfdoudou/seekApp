<template>
	<view>
		<view class="view">
			<view class="zyhy view" style="flex-direction: row;">
				<view class="zhaunye view" @click="navigateToChoose" style="width: 300rpx;">
					<view style="flex-direction: row;">
						<image src="../../static/zy.png" class="img" mode="aspectFill"></image>
					</view>
					<view style="flex-direction: column;">
						<span class="hyt">专业</span>
						<span class="hztxt">按专业选择专家</span>
					</view>
				</view>
				<hr class="view">
				<view class="hangye view" @click="navigateToChoose" style="width:300rpx;">
					<view>
						<image src="../../static/hy.png" class="img" mode="aspectFill"></image>
					</view>
					<view style="flex-direction: column;">
						<span class="hyt">行业</span>
						<span class="hztxt">按行业选择专家</span>
					</view>
				</view>
			</view>
		</view>
		<hr>

		<view class="page">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in list" :key="key">
					<view class="uni-media-list" style="display: flex; flex-direction: row;" :data-id="key">
						<view class="uni-media-list-logo">
							<image class="showImg" :src="url+'/upload/'+value.thumbnail"></image>
						</view>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">
								{{value.post_title}}
								<span class="content">{{value.post_keywords}}</span>
							</view>
							<view style="width: 100%;">
								<view>
								<!--? 后面加要传的参数， 多个参数用 & 隔开 -->
								<navigator :url="'../userInfo/userInfo?name='+value.post_title+'&id='+value.id+'&price='+value.price">
									<view class="userRole">{{value.post_excerpt}}</view>
								</navigator>
								</view>
							</view>
							<view class="uni-media-list-text-bottom">
								<span>{{value.price}}元/时</span>
								<span style="padding-left: 20rpx;">评分{{value.comment_count}},</span>
								<span style="padding-left: 20rpx;">{{value.post_hits}}人想咨询</span>
							</view>
						</view>
					</view>

				</view>
			</view>
		</view>


	</view>

</template>

<script>
	import url from "../../common/config.js";
	var _self;
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				message: [],
				title: 'media-list',
				showImg: false,
				list: '',
				url: url,
				name: '',
				cid:''
			}
		},
		onShow() {
			uni.getStorage({
				key:'cid',
				success:function(res){
					_self.cid = res.data
				}
			});
			if(_self.cid!=''){
				console.log(_self.cid);
				uni.request({
					url: url + 'seek/Trade/searchSeekByType',
					header: {
						'content-type': 'application/json'
					},
					data:{
						'cid':_self.cid
					},
					method: 'POST',
					success: (res) => {
						_self.list = res.data;
					}
				});
			}
		},
		onLoad(options) {
			_self = this;
			_self.cid = '';
			uni.request({
				url: url + 'seek/Trade/getUserList',
				header: {
					'content-type': 'application/json'
				},
				method: 'POST',
				success: (res) => {
					_self.list = res.data;
				}
			});

		},
		methods: {
			navigateToChoose() {
				uni.navigateTo({
					url: "../choose/choose"
				})
			},
			gotoInfo(e) {
				console.log(e)
				/** 
				uni.navigateTo({
					url:"../userInfo/userInfo"
				}) 
				**/
			}
		},
		onNavigationBarButtonTap() {
			console.log("你点击了按钮")
		},
		onNavigationBarSearchInputChanged(e) {
			_self.cid = '';
			uni.removeStorage({
				key:'cid'
			})
			_self.name = e.text;
			uni.request({
				url: url + 'seek/Trade/searchSeek',
				header: {
					'content-type': 'application/json'
				},
				data: {
					'name': _self.name
				},
				method:"POST",
				success: (res) => {
					_self.list = res.data;
				}
			});
		},
		onNavigationBarButtonTap(e) {
			console.log("success")
		}
	}
</script>

<style lang="scss">
	.view {
		display: flex;
		flex-direction: row;
		margin: 10rpx 10rpx 0 10rpx;
		align-items: center;
		justify-items: center;
	}

	.hyt {
		font-size: 40rpx;
		display: flex;
	}

	.hztxt {
		font-size: 15rpx;
	}

	.img {
		width: 40rpx;
		height: 40rpx;
		margin-right: 20rpx;
	}

	hr {
		height: 10rpx;
		background-color: #C8C7CC;
		border: 0;
		margin: 20rpx;
	}

	.gzList {
		display: flex;
		flex-direction: row;
		justify-content: left;
	}

	.showImg {
		width: 150rpx;
		height: 200rpx;
		margin: 0rpx 20rpx;
	}

	.title {}

	.content {
		padding-left: 30rpx;
		color: #939393;
	}

	.uni-list {
		display: flex;
		flex-direction: column;
	}

	.uni-list-cell {
		display: flex;
		flex-direction: row;
		height: 240rpx;
	}

	.uni-media-list-logo {
		width: 55px;
		height: 55px;
	}

	.uni-media-list-logo uni-image {
		border-radius: 5px;
	}

	.uni-media-list-text-top {
		font-size: 30rpx;
		span {
			font-size: 20rpx;
			max-height: 40rpx;
			max-width: 150rpx;
			overflow: hidden;
		}
	}

	.uni-media-list-text-bottom {
		line-height: 14px;
		font-size: 14px;
		margin-top: 30rpx;
		color: #C8C7CC;
	}

	.uni-media-list-body {
		margin-left: 90rpx;
		display: flex;
		flex-direction: column;
		
	}

	.buttonToInfo {
		background-color: #FFFFFF;
		border: #C8C7CC solid 1rpx;
		padding: 0 2rpx;
		margin: 2rpx 0;

	}

	.userRole {
		font-size: 26rpx;
		margin-top: 30rpx;
		line-height: 40rpx;
		max-width: 400rpx;
		max-height: 15rpx;
		overflow: hidden;
		border: 2rpx solid #999999;
		background-color: #F1F1F1;
		border-radius: 15rpx;
		padding: 10rpx 20rpx 28rpx 20rpx;
	}
</style>

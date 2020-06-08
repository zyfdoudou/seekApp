<template>
	<view class="menu">
		<view class="menuTab">
			<!-- <view :class="flag?'bottom1':'bottom2'" @click="change">进行中</view> -->
			<!-- <view :class="flag?'bottom2':'bottom1'" @click="change">已结束</view> -->
		</view>
		<view class="common" v-show="flag">
			<view class="seek" v-for="(seek,index) in seekList">
				<image class="img" :src="url+'/upload/'+seek.thumbnail" mode="aspectFill" />
				<view class="info">
					<view class="title">{{seek.post_title}}</view>
					<view class="info1">{{seek.post_excerpt}}</view>
					<view class="info2">
						<view v-if="seek.state == 0">
							咨询进度：咨询已提交至专家
						</view>
						<view v-if="seek.state == 1" style="color: #B22222;">
							咨询进度：咨询费用已支付
						</view>
						<navigator url="../consult/consult">
							<view v-if="seek.state == 2" style="color: #8B0000;">
								咨询进度：专家已经确认，呼叫专家
							</view>
						</navigator>
						<view v-if="seek.state == 3" style="color: #FF0000;">
							咨询进度：咨询完美收官
						</view>
					</view>
				</view>
				<view class="end">
					正在咨询中...
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
				flag: true,
				seekList1: [],
				seekList2: [],
				url: url,
				user_id: '',
				seekList: []
			}
		},
		onShow: () => {
			uni.getStorage({
				key: 'userTel',
				success: function(res) {
					_self.user_id = res.data.id;
					//发送请求信息
					uni.request({
						url: _self.url + "admin/seek/getZxById",
						method: 'POST',
						data: {
							'user_id': _self.user_id
						},
						success: (end) => {
							_self.seekList = end.data;
						}
					})
				}
			});
		},
		onLoad() {
			_self = this;
			console.log('this is end')
			/* uni.request({
				url: url+'index.php/seek/trade',
				header: {
					"Access-Control-Allow-Origin": "*" //自定义请求头信息
				},
				success: res => {
					 _self.userList1 = res.data[0];
					_self.userList2 = res.data[1]; 
				}
			}); */
		},
		methods: {
			change() {
				_self.flag = !_self.flag;
			}
		}
	};
</script>

<style lang="scss">
	.menu {
		.menuTab {
			display: flex;
			flex-direction: row;
			justify-content: center;

			view {
				text-align: center;
				width: 100%;
			}
		}

		.common {
			margin: 30rpx 0rpx 30rpx 30rpx;

			.seek {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				font-size: 40rpx;

				.img {
					width: 90rpx;
					height: 140rpx;
					border-radius: 20rpx;
				}

				.info {
					margin: 0 30rpx 0 30rpx;

					.title {
						max-width: 300rpx;
						font-size: 30rpx;
						line-height: 30rpx;
						max-height: 30rpx;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						margin-bottom: 20rpx;
					}

					.info1 {
						font-size: 25rpx;
						color: #939393;
						max-width: 300rpx;
						max-height: 40rpx;
						line-height: 40rpx;
						overflow: auto;
						text-overflow: ellipsis;
						padding-left: 20rpx;
					}
					.info2{
						margin-top: 15rpx;
						color: #A52A2A;
						font-size: 20rpx;
					}
				}

				.end {
					color: #F0AD4E;
				}
			}

			hr {
				size: 10rpx;
				margin-top: 30rpx;
			}
		}
	}

	.bottom1 {
		border-bottom: 2rpx solid #DD524D;
		color: #EE3B3B;
	}

	.bottom2 {
		border-bottom: 2rpx solid #E8E8E8;
	}
</style>

<template>
	<view>
		<view class="chart">
			<scroll-view id="scrollview" class="chart-content" v-if="update" scroll-y="true" scroll-with-animation :scroll-into-view="myScroll">
				
				<view v-for="item in talkList"  id="msglistview">
					<view v-if="item.contentStyle=='contentLeft'" class="contentCommon contentLeft">
						<image class="chart-content-img" :src="item.userImg" mode="aspectFill"></image>
						<span style="background-color: #FFFFFF;margin-left: 20rpx;">{{item.content}}</span>
					</view>
					<view v-if="item.contentStyle=='contentRight'" class="contentCommon contentRight">
						<span style="background-color: #4CD964; margin-right: 20rpx;">{{item.content}}</span>
						<image class="chart-content-img" :src="item.userImg" mode="aspectFill"></image>
					</view>
				</view>
				<view :id="myScroll"></view>
			</scroll-view>
			<view class="menu">
				<view class="chart-banner">
					<view class="chart-banner-l">
						<view>
							<image src="../../static/nice2.png" class="chart-banner-bq" mode="aspectFill" />
							<image src="../../static/chat.png" class="chart-banner-bq" mode="aspectFill" />
						</view>
					</view>
				</view>
				<view class="chart-input">
					<view class="chart-input-l">
						<textarea @input="textAreaContent" auto-height="true" id="textArea">
						</textarea>
					</view>
					<view class="chart-button">
						<button type="default" @click="send">发送</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import GoEasy from '../../static/goeasy-1.0.6.js'
	var _self;
	export default {
		data() {
			return {
				num:0,
				myScroll:'myScroll',
				scrollTop:0,
				screenHeight: 0, //屏幕高度
				update: true,
				talkContent: '',
				contentLength: 0,
				talkList: [{
					id: 1,
					content: "this is my friend",
					userImg: "../../static/gzz02.jpg",
					contentStyle: "contentLeft"
				}, {
					id: 8888,
					content: "me",
					userImg: "../../static/gzz02.jpg",
					contentStyle: "contentRight"
				}, {
					id: 5,
					content: "this is my friend",
					userImg: "../../static/gzz02.jpg",
					contentStyle: "contentLeft"
				}]
			}
		},
		onLoad() {
			_self = this;
			_self.contentLength = _self.talkList.length;
		},
		methods: {
			textAreaContent(t){
				 _self.talkContent = t.detail.value;
			},
			send() {
				_self.num =_self.talkList[_self.contentLength-1].num;
				_self.talkList[_self.contentLength] = {
					id: 8888,
					content: _self.talkContent,
					userImg: "../../static/gz01.jpg",
					contentStyle: "contentRight"
				};
				_self.update = false;
				_self.update = true;
				_self.contentLength+=1;
				_self.myScroll = _self.myScroll+''+(_self.num++);
				console.log(_self.contentLength);
			}
		}
	}
</script>

<style lang="scss">
	.chart {
		.chart-content {
			padding: 20rpx 0 0 0;
			overflow-y: auto;
			height: 70vh;
			background-color: #C8C7CC;
			.contentCommon {
				height: 90rpx;
			}

			.contentLeft {
				text-align: left;
			}

			.contentRight {
				text-align: right;
			}

			.chart-content-img {
				width: 50rpx;
				height: 50rpx;
				border-radius: 25rpx;
			}
		}

		.menu {
			background-color: #FFFFFF;
			height: 300rpx;
			position: fixed;
			bottom: 0rpx;
			width: 100%;
			padding: 0;
			margin: 0;

			.chart-banner {
				.chart-banner-l {
					background-color: #F1F1F1;

					.chart-banner-bq {
						height: 40rpx;
						width: 40rpx;
					}
				}
			}

			.chart-input {
				.chart-button {
					position: fixed;
					bottom: 0rpx;
					right: 20rpx;
				}
			}
		}
	}
</style>

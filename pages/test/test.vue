<template>
	<view>
		<view class="viewContant">
			<scroll-view class="viewContant-chart" scroll-y="true" scroll-with-animation="true">
				<view v-for="item in talkList">
					<view>{{item.content}}</view>
				</view>
			</scroll-view>
			<view class="view-menu">
				<view class="view-menu-top">
					<image src="../../static/icon/biaoqing.png" mode="aspectFill"></image>
					<image src="../../static/chat.png" mode="aspectFill"></image>
				</view>
				<view class="view-menu-input">
					<textarea>

					</textarea>
					<button type="default">发送</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	var _self;
	export default {
		data() {
			return {
				scrollTop: '70vh',
				scrollHeight: 0, //屏幕高度
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
				}, {
					id: 8888,
					content: "this is my friend",
					userImg: "../../static/gz01.jpg",
					contentStyle: "contentRight"
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
				}, {
					id: 8888,
					content: "this is my friend",
					userImg: "../../static/gz01.jpg",
					contentStyle: "contentRight"
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
				}, {
					id: 8888,
					content: "this is my friend",
					userImg: "../../static/gz01.jpg",
					contentStyle: "contentRight"
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
				}, {
					id: 8888,
					content: "this is my friend",
					userImg: "../../static/gz01.jpg",
					contentStyle: "contentRight"
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
				}, {
					id: 8888,
					content: "this is my friend",
					userImg: "../../static/gz01.jpg",
					contentStyle: "contentRight"
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
				}, {
					id: 8888,
					content: "this is my friend",
					userImg: "../../static/gz01.jpg",
					contentStyle: "contentRight"
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
				}, {
					id: 8888,
					content: "this is my friend",
					userImg: "../../static/gz01.jpg",
					contentStyle: "contentRight"
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
				}, {
					id: 8888,
					content: "this is my friend",
					userImg: "../../static/gz01.jpg",
					contentStyle: "contentRight"
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
				}, {
					id: 8888,
					content: "this is my friend",
					userImg: "../../static/gz01.jpg",
					contentStyle: "contentRight"
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
				}, {
					id: 8888,
					content: "this is end",
					userImg: "../../static/gz01.jpg",
					contentStyle: "contentRight"
				}]
			}
		},
		mounted() {},
		updated() {},
		onLoad() {
			_self = this;
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.viewContant {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;

		.viewContant-chart {
			padding: 20rpx 30rpx 0 30rpx;
			background-color: #F8F8F8;
			height: 70vh;
			view {
				height: 40px;
			}
		}

		.view-menu {
			.view-menu-top {
				border-bottom: solid 1rpx #F1F1F1;

				image {
					height: 40rpx;
					width: 40rpx;
				}
			}

			.view-menu-input {
				padding: 15rpx 30rpx 0 30rpx;

				button {
					position: fixed;
					bottom: 1rpx;
					right: 2rpx;
				}
			}
		}
	}
</style>

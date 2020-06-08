<template>
	<view>
		<view class="top">
			<view class="top-pro">
				<span>预约</span>
				<span>专家确认</span>
				<span>支付</span>
				<span>咨询</span>
				<span class="active">评价</span>
			</view>
			<uniProgress :percentage="100" percentagename="05" percentBackground="red"></uniProgress>
		</view>

		<!--内容-->
		<view class="content">
			<view class="fk">
				<h3>专业程度</h3>
				<textarea placeholder=" 行业解决方案的专业程度."></textarea>
			</view>
			<hr>
			<view class="fk">
				<h3>有无解决问题</h3>
				<textarea placeholder=" 行业解决方案的专业程度."></textarea>
			</view>
			<hr>
			<view class="fk">
				<h3>评分</h3>
				<textarea placeholder=" 行业解决方案的专业程度."></textarea>
			</view>
			<hr>
			<view class="fk" @click="tuijian">
				<h3>给朋友推荐</h3>
				<p>把专家以及平台推荐给朋友</p>
			</view>
			<br>
			<button type="warn" @click="fx">结案并转发</button>
		</view>
	</view>
</template>

<script>
	import uniProgress from "../../static/components/uni-progres.vue"
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	import url from "../../common/config.js";
	var _self;
	export default {
		components: {
			uniProgress,
			uniNumberBox
		},
		data() {
			return {
				url: url
			}
		},
		onLoad() {
			_self = this;
		},
		methods: {
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
			},
			fx() {
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 1,
					summary: "我正在使用长伴人力资源高端人才咨询平台，赶紧跟我一起来体验！",
					imageUrl:'http://49.233.47.121/upload/default/20200606/d3450751101ef1da038fd7785f40af43.png',
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
						uni.showToast({
							title:"咨询完美落幕"
						});
						uni.switchTab({
							url:"../index/index"
						})
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
				
				/* uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 0,
					url:url,
					title: "长伴人力资源",
					summary: "您忠实的成长伴侣。",
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				}); */
			}
		}
	}
</script>

<style lang="scss">
	.top {
		margin: 30rpx 30rpx 0 30rpx;

		.top-pro {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			.active {
				color: #DD524D;
			}

			span {
				font-size: 30rpx;
				color: #696969;
			}

		}
	}

	.content {
		margin: 30rpx;

		.fk {
			h3 {
				color: #939393;
			}

			textarea {
				max-height: 120rpx;
				padding-top: 20rpx;
			}
		}

		hr {
			border: none;
			background-color: #C8C7CC;
			height: 15rpx;
			margin: 20rpx 0;
		}
	}
</style>

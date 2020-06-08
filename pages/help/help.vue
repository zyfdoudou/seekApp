<template>
	<view>
		<view class="quetions">
			<view class="top">常见问题</view>
			<hr class="qhr">
			<view class="qs-common">
				<view class="qsc-l qs-common">
					<view>
						<image src="../../static/icon/zhanghao.png" mode="aspectFill" />
					</view>
					<view @click="content">
						<view>账号问题</view>
						<view  class="info">账户及信息安全</view>
					</view>
				</view>
				<view  class="qsc-r qs-common">
					<view>
						<image src="../../static/icon/zixun.png" mode="aspectFill" />
					</view>
					<view  @click="content">
						<view>咨询流程</view>
						<view class="info">咨询相关介绍</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			content(){
				uni.navigateTo({
					url:"../content/content"
				})
			}
		}
	}
</script>

<style lang="scss">
	.quetions{
		margin: 30rpx 30rpx 0 30rpx;
		.top{
			
		}
		.qhr{
			height: 15rpx;
			border: none;
			background-color: #C0C0C0;
			margin-top: 40rpx;
		}
		.qs-common{
			display: flex;
			flex-direction: row;
			.qsc-l{
				margin: 30rpx 50rpx 30rpx 30rpx;
			}
			.qsc-r{
				margin: 30rpx 50rpx 30rpx 30rpx;
			}
			image{
				width: 50rpx;
				height: 50rpx;
				margin-right: 30rpx;
				padding-top: 20rpx;
			}
			.info{
				color: #999999;
				font-size: 20rpx;
			}
			
		}
	}
</style>

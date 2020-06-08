<template>
	<view>
		<view class="vouchers">
			<image src="../../static/icon/jklc.png"></image>
			<h3 style="text-align: center;">很遗憾，您暂无可使用的会员卡！</h3>
			<view class="text">
				会员卡用于支付咨询费用，也可以分享给好友共同使用，支付更加方便！
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
			
		}
	}
</script>

<style lang="scss">
	.vouchers{
		margin-top: 200rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 40rpx;
		color: #E3E3E3;
		image{
			margin: 0 auto;
		}
		.text{
			text-align: center;
		}
	}
</style>

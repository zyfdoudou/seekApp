<template>
	<view>
		<view class="vouchers">
			<image src="../../static/icon/jklc.png"></image>
			<view class="text">暂无可用代金券！代金券生成规则联系客服沟通！</view>
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
		font-size: 20rpx;
		color: #E3E3E3;
		image{
			margin: 0 auto;
		}
		.text{
			text-align: center;
		}
	}
</style>

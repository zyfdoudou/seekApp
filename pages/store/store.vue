<template>
	<view class="view">
		<view class="person">
			<image src="../../static/gzz02.jpg"></image>
			<view class="info">
				<view>
					<view>陈忠和</view>
				</view>
				<view>
					<view><button type="default">资深品牌管理专家</button></view>
				</view>
				<view>
					<view class="text">
						3000元/时
						<text>暂无评分 ，11人想咨询</text>
					</view>
				</view>
			</view>
		</view>
		<view class="person">
			<image src="../../static/gz01.jpg"></image>
			<view class="info">
				<view>
					<view>王理智</view>
				</view>
				<view>
					<view><button type="default">资深品牌管理专家</button></view>
				</view>
				<view>
					<view class="text">
						3000元/时
						<text>暂无评分 ，11人想咨询</text>
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
			
		}
	}
</script>

<style lang="scss">
	.view{
		margin: 30rpx 30rpx 0 30rpx;
		.person{
			margin-top: 30rpx;
			display: flex;
			flex-direction: row;
			image{
				height: 180rpx;
				width: 140rpx;
				border-radius: 30rpx;
			}
			.info{
				padding-left: 30rpx;
				.text{
					font-size: 20rpx;
					color: #C8C7CC;
				}
			}
		}
	}
	

</style>

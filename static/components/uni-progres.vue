<template>
	<view class="uni-progress-box">
		<!-- 进度条底层 -->
		<view class="progress-bottom">
			<!-- 进度条实际 -->
			<view class="progress" :style="{width:percentage+'%', background:percentBackground}"></view>
		</view>
		<!-- 实际进度名称-->
		<view class="percentage"> {{ percentagename }}</view>
	</view> 
</template>

<script>
	export default {
		props: {
			// 进度条占比
			percentage: {
				type: Number,
				default: 0
			},
			// 如果是投票模式，已投得票数
			explain: {
				type: [Number, String],
				default: '0票'
			},
			// 进度条占比的颜色设置
			percentBackground: {
				type: String,
				default: null
			},
			percentagename: {
				type: String,
				default: '预约'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.uni-progress-box {
		display: flex;

		// 进度条底层样式
		.progress-bottom {
			margin-top: 20upx;
			height: 16upx;
			width: 90%;
			background: #ccc;
			border-radius: 20upx;

			// 进度条占比样式
			.progress {
				height: 16upx;
				border-radius: 20upx;
			}
		}

		// 已占比的进度条样式
		.percentage {
			margin: 0 4%;
		}
	}
</style>

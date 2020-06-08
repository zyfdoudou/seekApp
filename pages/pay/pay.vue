<template>
	<view>
		<view class="top">
			<view class="top-pro">
				<span>预约</span>
				<span>专家确认</span>
				<span class="active">支付</span>
				<span>咨询</span>
				<span>评价</span>
			</view>
			<uniProgress :percentage="70" percentagename="03" percentBackground="red"></uniProgress>
		</view>

		<!--内容-->
		<view class="content">
			<view class="connection">
				<h3>支付客服人员：</h3>
				<p>在支付过程中有任何异议电话咨询客服人员。</p>
				<p>一号客服：15328978762。</p>
				<p>二号客服：15328978762。</p>
				<p>三号客服：15328978762。</p>
			</view>
			<br>
			<hr>
			<br>
			<view class="img">
				<image src="../../static/weixin-zhifubao.jpg"></image>
			</view>
			<button type="primary" @click="consult">进入咨询环节</button>
		</view>
	</view>
</template>

<script>
	import uniProgress from "../../static/components/uni-progres.vue"
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default {
		components: {
			uniProgress,
			uniNumberBox
		},
		data() {
			return{
				
			}
		},
		methods: {
			consult(){
				uni.navigateTo({
					url:"../consult/consult"
				})
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
		margin: 30rpx 30rpx;
		.connection{
			p{
				padding-left: 50rpx;
				padding-top: 30rpx;
				color: #808080;
			}
			
		}
		
	}
</style>

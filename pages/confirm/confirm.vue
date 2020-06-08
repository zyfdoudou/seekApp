<template>
	<view>
		<view class="top">
			<view class="top-pro">
				<span>预约</span>
				<span class="active">专家确认</span>
				<span>支付</span>
				<span>咨询</span>
				<span>评价</span>
			</view>
			<uniProgress :percentage="50" percentagename="02" percentBackground="red"></uniProgress>
		</view>

		<!--内容-->
		<view class="content">
			<view class="wait">
				<p class="dq">待确认：</p>
				<p class="pos">将于4月23日18:00自动结束</p>
				<br>
				<!-- <button class="wtbul" type="default">等待咨询</button> -->
				<button @click="pay" class="wtbur" type="primary" style="background-color: #4CD964;">接受咨询去支付</button>
			</view>
			
			<view class="zxyy">
				<h3>咨询预约</h3>
				<ul>
					<li>1、灵活用工在什么时候推广？</li>
					<li>2、灵活用工在什么时候推广？</li>
					<li>3、企业如何在竞争中获胜</li>
					<li>4、灵活用工在什么时候推广？</li>
					<li>5、灵活用工在什么时候推广？如何管理</li>
				</ul>
				<hr>
				<p>预计咨询时长：1小时</p>
				<hr>
				<p>咨询时间：日期不限，时间不限</p>
				<hr>
				<p>备注：企业人脉的搭建措施！</p>
			</view>
		</view>
		<hr style="background-color: #C0C0C0; border: 0; height: 10rpx; margin: 20rpx 0;">
		<view class="userInfo">
			<view><h3>专家信息</h3></view>
			<view class="info">
				<view class="userImg"><image src="../../static/gzz02.jpg" mode="aspectFill"></image></view>
				<view>
					<view><h4>李玲玉</h4></view>
					<view style="color: #939393;">人人就业网创始人</view>
				</view>
			</view>
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
			pay(){
				uni.navigateTo({
					url:"../pay/pay"
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
		.wait{
			background-color: #F0AD4E;
			color: #F8F8F8;
			padding: 20rpx;
			button{
				margin-bottom: -20rpx;
				margin-left: -20rpx;
				margin-right: -20rpx;
			}
			.dq{
				font-size: 50rpx;
				color: #FFFFFF
			}
			.pos{
				text-align: right;
			}
		}
		.zxyy{
			margin-top: 40rpx;
			ul{
				margin-top: 20rpx;
				li{
					padding-top: 10rpx;
					list-style: none;
					color: #939393;
					font-size: 35rpx;
				}
			}
			hr{
				margin: 20rpx 0;
			}
			p{
				font-size: 35rpx;
				color: #939393;
				padding-left: 30rpx;
			}
			 
		}
	}
	.userInfo{
		margin: 20rpx 30rpx;
		.info{
			display: flex;
			flex-direction: row;
			margin: 20rpx;
			.userImg{
				margin-right: 40rpx;
				image{
					width: 100rpx;
					height: 100rpx;
					border-radius: 50rpx;
				}
			}
		}
	}
</style>

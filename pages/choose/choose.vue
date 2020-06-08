<template>
	<view class="menu">
		<view class="menuTab">
			<view :class="flag?'bottom1':'bottom2'" @click="change">专业</view>
			<view :class="flag?'bottom2':'bottom1'" @click="change">行业</view>
		</view>
		<view class="common" v-show="flag" v-for="(trade,i) in userList1">
			<view :id="trade.id"  @click="gotoUser">{{trade.name}}</view>
			<hr>
		</view>
		<view class="common" v-show="!flag" v-for="item in userList2">
			<view @click="gotoUser">{{item.name}}</view>
			<hr>
		</view>
	</view>
</template>

<script>
	import url from "../../common/config.js";
	var _self;
	export default {
		data() {
			return {
				flag: true,
				userList1: [],
				userList2: []
			}
		},
		onLoad() {
			_self = this;
			uni.request({
				url: url+'index.php/seek/trade',
				header: {
					"Access-Control-Allow-Origin": "*" //自定义请求头信息
				},
				success: res => {
					_self.userList1 = res.data[0];
					_self.userList2 = res.data[1];
				}
			});
		},
		methods: {
			change() {
				_self.flag = !_self.flag;
			},
			gotoUser(e) {
				/* uni.navigateTo({
					url:"../index/index"
				}) */
				uni.setStorage({
					key:'cid',
					data:e.currentTarget.id
				})
				uni.switchTab({
					url:"../index/index"
				})
			}
		}
	};
</script>

<style lang="scss">
	.menu {
		.menuTab {
			display: flex;
			flex-direction: row;
			justify-content: center;

			view {
				text-align: center;
				width: 100%;
				font-size: $uni-font-size-tab;
			}
		}

		.common {
			margin: 30rpx 0rpx 30rpx 30rpx;
			font-size: 50rpx;

			hr {
				size: 10rpx;
				margin-top: 30rpx;
			}
		}
	}

	.bottom1 {
		border-bottom: 2rpx solid #DD524D;
		color: #EE3B3B;
	}

	.bottom2 {
		border-bottom: 2rpx solid #E8E8E8;
	}
</style>

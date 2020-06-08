<template>
	<view>
		<view class="infoImg" @touchmove.stop.prevent="moveHandle">
			<image style="text-align: center;" :src="url+'upload/'+userInfo.thumbnail" mode="aspectFill"></image>
		</view>
		<view class="userInfo">
			<view class="left">{{userInfo.post_title}}
				<image src="../../static/qy.png" mode="aspectFill" style="width: 50rpx; height: 50rpx; float: left;"></image>
			</view>
			<view class="userPrice right"><text>{{userInfo.price}}</text>元/时</view>
		</view>
		<hr class="line" style="clear: both; margin-top: 30rpx;">
		<view class="userRule">
			<button type="default" style="background-color: #FFFFFF;">{{userInfo.post_excerpt}}</button>
		</view>
		<hr class="line" style="clear: both; margin-top: 30rpx;">
		<view class="showView">
			<view class="viewl">
				<view>
					<image src="../../static/zx.png" mode="aspectFill"></image>2人想咨询
				</view>
				<view class="rrs">
					<image src="../../static/sc.png" mode="aspectFill"></image>4人收藏
				</view>
			</view>
			<view class="viewr">
				<view>
					<image src="../../static/pj.png" mode="aspectFill"></image>5条评论
				</view>
				<view class="rrs">
					<image src="../../static/pf.png" mode="aspectFill"></image>15分
				</view>
			</view>
		</view>
		<view class="newTab" v-show="flag">
			<view class="left" @click="changeTab">
				<view>
					<image src="../../static/hy.png" class="img" mode="aspectFill"></image>
				</view>
				<view style="flex-direction: column;">
					<span class="hyt">专家详情</span>
				</view>
			</view>
			<view class="right" @click="changeTab">
				<view>
					<image src="../../static/hy.png" class="img" mode="aspectFill"></image>
				</view>
				<view style="flex-direction: column;">
					<span class="hyt">专家评价</span>
				</view>
			</view>
		</view>
		<hr>
		<view class="tab1" v-show="tab">
			<view class="info">
				<u-parse :content="userInfo.post_content" @navigate="navigate"></u-parse>
			</view>
			<hr class="line">
			<view class="info">
				<view>平台保障以及注意事项</view>
				<view class="userIntro">
					主要内容：<br>
					【咨询方式】:QQ咨询、面诊(地区限定南通)。也可以到顾客约定的安静环境下进行咨询。<br>
					【咨询频次】:周一到周日,每次1人。请提前预约。预约时要说明您具体的咨询时间(比如2010.12.21晚上8:10—9:10)。在支付咨费后就可以按照约定的时间进行咨询。<br>
					【咨询要求】:咨询过程中,咨询师提及问题与情况,尽可能如实回答,以免误导咨询师诊断治疗,影响求助者咨询治疗过程。根据咨询师、咨询者关系守则,咨询师会对咨询者情况实行保密处理。<br>
					【咨询费用】:
				</view>
			</view>
			<br />
			<br />
			<view class="seek" style="display: flex;flex-direction: row;">
				<image src="../../static/sc.png" style="height: 60rpx; width: 60rpx; float: left;"></image>
				<button type="primary" style="display: block;" @click="order" v-show="visible">预约咨询</button>
				<navigator :url="'../order/order?user_id='+_self.userid+'&post_id='+_self.id+'&price='+_self.price">
					<button type="primary" style="display: block;" v-show="!visible">预约咨询</button>
				</navigator>
			</view>
		</view>

		<!--专家评价-->
		<view class="tab2" v-show="!tab">
			<view class="info">
				<view>专家评价</view>
				<view class="userIntro">暂无评价</view>
			</view>
			<hr class="line">
			<view class="info">
				<view>平台保障以及注意事项</view>
				<view class="userIntro">
					主要内容：<br>
					【咨询方式】:QQ咨询、面诊(地区限定南通)。也可以到顾客约定的安静环境下进行咨询。<br>
					【咨询频次】:周一到周日,每次1人。请提前预约。预约时要说明您具体的咨询时间(比如2010.12.21晚上8:10—9:10)。在支付咨费后就可以按照约定的时间进行咨询。<br>
					【咨询要求】:咨询过程中,咨询师提及问题与情况,尽可能如实回答,以免误导咨询师诊断治疗,影响求助者咨询治疗过程。根据咨询师、咨询者关系守则,咨询师会对咨询者情况实行保密处理。<br>
					【咨询费用】:
				</view>
			</view>
			<br />
			<br />
			<view class="seek">
				<button type="primary" style="display: block;" @click="order" v-show="visible">预约咨询</button>
				<navigator :url="'../order/order?user_id='+_self.userid+'&post_id='+_self.id">
					<button type="primary" style="display: block;" v-show="!visible">预约咨询</button>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import url from "../../common/config.js";
	import uParse from "@/components/feng-parse/parse.vue";
	var _self;
	export default {
		components: {
			uParse
		},
		data() {
			return {
				timer: null,
				url: url,
				name: '',
				id: '',
				userid: '',
				flag: false,
				tab: true,
				userInfo: '',
				visible: true,
				price:''
			}
		},
		onShow() {
			uni.getStorage({
				key: 'userTel',
				success: function(res) {
					_self.visible = false;
					_self.userid = res.data.id;
				}
			});
		},
		onLoad(options) {
			_self = this;
			_self.name = options.name;
			_self.id = options.id;
			_self.price = options.price;
			uni.request({
				url: url + 'seek/Trade/getUserInfo',
				data: {
					id: _self.id
				},
				success: (res) => {
					console.log(res.data);
					_self.userInfo = res.data;
				}
			});
			uni.getStorage({
				key: 'userTel',
				success: function(res) {
					_self.visible = false;
					_self.userid = res.data.id;
				}
			});
			uni.setNavigationBarTitle({
				title: _self.name,
			});
			uni.showTabBar({
				animation: true
			});
			uni.setTabBarItem({
				index: 0,
				text: 'text'
			});
			uni.setTabBarStyle({
				color: '#FF0000',
				selectedColor: '#00FF00',
				backgroundColor: '#0000FF',
				borderStyle: 'black'
			})
		},
		methods: {
			order() {
				/* _self.timer = setTimeout(() => {
					if (!_self.visible) {
						uni.showToast({
							title: '未注册或登录'
						})
					}
				}, 20); */
				uni.showToast({
					title: '未注册或者未登陆'
				});
				setTimeout(function() {
					uni.switchTab({
						url: "../my/my"
					})
				}, 2000)

				/* uni.navigateTo({
					url:"../order/order"
				}) */
			},
			changeTab() {
				_self.tab = !_self.tab;
			}
		},
		onPageScroll: function(Object) {
			if (Object.scrollTop > 200) {
				_self.flag = true;
			}
		}
	}
</script>

<style lang="scss">
	.showView {
		margin-left: 100rpx;
		font-size: 20rpx;
		color: #C8C7CC;

		.rrs {
			padding-left: 100rpx;
		}

		image {
			width: 30rpx;
			height: 30rpx;
			float: left;
		}

		.viewl {
			display: flex;
			flex-direction: row;
		}

		.viewr {
			display: flex;
			flex-direction: row;
			padding: 30rpx 0 30rpx 0;
		}
	}

	.newTab {
		display: flex;
		flex-direction: row;
		background-color: #E3E3E3;
		color: #999999;
		justify-content: space-around;
		height: 80rpx;
		line-height: 80rpx;

		image {
			width: 50rpx;
			height: 50rpx;
			margin-right: 20rpx;
			margin-top: 15rpx;
		}

		.left {
			display: flex;
			justify-content: center;
		}

		.right {
			display: flex;
		}
	}

	.infoImg {
		background-color: #696969;
	}

	image {
		display: block;
		margin: auto;
	}

	.userCode {
		height: 50rpx;
		width: 50rpx;
	}

	.userInfo {
		margin: 20rpx 30rpx;

		.left {
			float: left;
		}

		.right {
			float: right;
		}
	}

	.userPrice {
		color: #F0AD4E;
		font-size: 40rpx;
		float: right;
	}

	.userRule {
		margin: 30rpx;
		font-size: 30rpx;
	}

	.userIntro {
		font-size: 18rpx;
		color: #999999;
		text-indent: 40rpx;
		line-height: 50rpx;
		margin-top: 30rpx;
	}

	.info {
		margin: 20rpx 20rpx;
	}

	.line {
		size: 30rpx;
		margin: 30rpx 20rpx;
	}

	.seek {
		position: fixed;
		bottom: 0;
		right: 20rpx;

		image {
			height: 100rpx;
			width: 100rpx;
			float: left;
			background-color: #F8F8F8;
		}

		button {
			background-color: #333333;
			width: 600rpx;
			color: #F0AD4E;
		}
	}
</style>

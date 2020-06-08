<template>
	<view class="page">
		<view class="topImg">
			<image src="../../static/zixun01.jpg" mode="aspectFill"></image>
		</view>
		<view class="content" v-for="(value,key) in list">
			<hr>
			<view class="my">
				<navigator :url="'../showInfo/showInfo?id='+value.post_id">
					<p class="c1">{{value.post_title}}</p>
				</navigator>
				<p class="c2">{{value.post_excerpt}}</p>
				<p class="c3">1
					<image src="../../static/sc.png" /> . 最新发布</p>
			</view>
		</view>
	</view>
</template>

<script>
	import url from "../../common/config.js";
	var _self;
	export default {
		data() {
			return {
				list: [],
				url: url
			}
		},
		onLoad() {
			_self = this;
			uni.request({
				url: url + 'admin/seek/getCategoryInfo',
				success: (res) => {
					_self.list = res.data;
					console.log(_self.list)
				}
			})
		},
		methods: {
			navigateToChoose() {
				uni.navigateTo({
					url: "../choose/choose"
				})
			},
			gotoInfo(e) {
				console.log(e)
				/* uni.navigateTo({
					url:"../userInfo/userInfo"
				}) */
			}
		}
	}
</script>

<style lang="scss">
	.page {
		.topImg {
			image {
				width: 100%;
				border-radius: 40rpx;
			}
		}

		.content {
			hr {
				margin: 30rpx 0;
			}

			.my {
				margin: 10rpx 30rpx;
				.c1 {
					margin: 20rpx 0;
				}

				.c2 {
					color: #898989;
					font-size: 10rpx;
				}

				.c3 {
					font-size: 15rpx;
					text-align: right;

					image {
						height: 30rpx;
						width: 30rpx;
					}
				}
			}
		}
	}
</style>

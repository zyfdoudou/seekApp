<template>
	<view>
		<l-file ref="lFile" @up-callback="upCallback"></l-file>
		<view class="top">
			<view class="top-pro">
				<span>预约</span>
				<span>专家确认</span>
				<span>支付</span>
				<span class="active">咨询</span>
				<span>评价</span>
			</view>
			<uniProgress :percentage="90" percentagename="04" percentBackground="red"></uniProgress>
		</view>
		<view class="end">
			<button type="warn" @click="dowloadFile">下载专家答疑提纲</button>
		</view>
		<!--内容-->
		<view class="content">
			<view class="talk">
				<p>李林玉</p>
				<image src="../../static/zx.jpg" mode="aspectFill" @tap="toCall"></image>
			</view>
			<button type="primary" @click="appraise">咨询结束为了更好的服务去评价！</button>
		</view>
	</view>
</template>

<script>
	import lFile from '@/components/l-file/l-file.vue'
	import uniProgress from "../../static/components/uni-progres.vue"
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	import url from "../../common/config.js";
	var _self;
	export default {
		components: {
			uniProgress,
			uniNumberBox,
			lFile
		},
		data() {
			return {
				url:url
			}
		},
		onLoad() {
			_self = this
		},
		methods: {
			appraise() {
				uni.navigateTo({
					url: "../appraise/appraise"
				})
			},
			toCall() {
				// 导入Activity、Intent类
				var Intent = plus.android.importClass("android.content.Intent");
				var Uri = plus.android.importClass("android.net.Uri");
				// 获取主Activity对象的实例  
				var main = plus.android.runtimeMainActivity();
				// 创建Intent  
				var uri = Uri.parse("tel:" + this.phone); // 这里可修改电话号码  
				var call = new Intent("android.intent.action.CALL", uri);
				// 调用startActivity方法拨打电话  
				main.startActivity(call);
			},
			getTemp() {
				return Math.round(new Date().getTime() / 1000);
			},
			dowloadFile() {
				/* 保存到本地
				this.$refs.lFile.download(_self.downUrl, 'local')
					.then(path => {
						this.localPath = path;
					}); */
				let dfile = _self.url + 'upload/portal/wordFile/codeDemo.doc'
				this.$refs.lFile.download(dfile)
					.then(path => {
						this.$refs.lFile.open(path);
					});

			},
			upCallback(res) {
				console.log('上传成功回调', JSON.stringify(res));
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
		background-color: #F8F8F8;

		.talk {
			margin: 30rpx auto;

			p {
				padding: 20px 30rpx;
			}

			image {
				margin: 0;
				padding: 0;
				width: 100%;
			}
		}
	}

	.end {
		margin: 30rpx 0;
	}
</style>

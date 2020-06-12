<template>
	<view>
		<l-file ref="lFile" @up-callback="upSuccess"></l-file>
		<view class="top">
			<view class="top-pro">
				<span class="active">预约</span>
				<span>专家确认</span>
				<span>支付</span>
				<span>咨询</span>
				<span>评价</span>
			</view>
			<uniProgress :percentage="20" percentagename="01" percentBackground="red"></uniProgress>
		</view>

		<!--内容-->
		<view class="content">
			<view class="quetion">
				<p>您要咨询的具体问题：<font style="color: #DD524D; ">*</font>
				</p>

				<textarea v-model="zx.content" placeholder="请详细描述问题，有助于专家提前了解背景，咨询时能够直击主题，避免浪费咨询时间，造成不必要的损失！">

			</textarea>
				<span>0/500</span>
			</view>
			<hr>
			<view class="quetion">
				<p style="float: left;">设置咨询时长：<font style="color: #DD524D; ">*</font>
				</p>
				<view style="float: right;">
					<view class="vnu" style="display: flex; flex-direction: row; justify-content: flex-end;">
						<uni-number-box v-model="zx.sc" :min="0" :max="9" @change="bindChange"></uni-number-box>
					</view>
				</view>
				<view style="clear: both;"></view>
				<view style="float: right;">需预付：<font style="color: #DD524D;" id="money">{{price}}</font>元</view>
				<p style="clear: both;font-size: 25rpx; color: #C0C0C0">说明：平台将收取0.5小时咨询费用，咨询结束后多退少补！</p>
			</view>
			<hr>

			<!-- <view class="quetion">
				<view style="float: left;">设置咨询时长：<font style="color: #DD524D; ">*</font>
				</view>
				<button style="float: right;" class="button" type="primary" @click="open">选择时间</button>
			</view> -->

			<view class="quetion">
				<view>备注：<font style="color: #DD524D; ">*</font>
				</view>
				<textarea v-model="zx.remark" style="padding-top: 30rpx;" placeholder="简单介绍一下自己或者您所在的公司!">
				</textarea>
			</view>
			<hr>
			<view class="fileSub">
				<button type="warn" @click="dowloadFile">下载咨询格式</button>
				<button type="primary" @click="uploadFile">提交咨询材料</button>
			</view>
		</view>
		<view class="shuomin">
			<p style="text-align: center;">费用说明</p>
			<p>1、如果专家在48小时内未确认咨询，咨询将自动结束！</p>
			<p>2、咨询结束后，系统将自动结算咨询总费用，如果小于实付款，剩余金额将原路退回，如果大于实付款，咨询者自动结算尾款</p>
		</view>
		<button class="sub" type="default" @click="confirm">提交</button>
	</view>
</template>

<script>
	import lFile from '@/components/l-file/l-file.vue'
	import uniProgress from "../../static/components/uni-progres.vue"
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	import url from "../../common/config.js";
	import fileName from "../../common/file.js"
	var _self;
	export default {
		components: {
			uniProgress,
			uniNumberBox,
			lFile
		},
		data() {
			return {
				num: 0,
				price: '',
				url: url,
				downUrl: '',
				_price: '',
				zx: {
					user_id: '',
					post_id: '',
					content: '',
					sc: '',
					price: '',
					remark: '',
					qdoc: fileName
				}
			}
		},
		onLoad: function(options) {
			_self = this,
				_self.downUrl = _self.url + 'upload/portal/wordFile/codeDemo.doc',
				_self.zx.user_id = options.user_id,
				_self.zx.post_id = options.post_id,
				_self._price = options.price,
				_self.price = _self._price
		},
		methods: {
			confirm() {
				if (_self.zx.post_id == '') {
					uni.showToast({
						title: '没有选择专家'
					})
				} else if (_self.zx.user_id == '') {
					uni.showToast({
						title: '未登录'
					})
				} else if (_self.zx.sc == '') {
					uni.showToast({
						title: '未选择时间'
					})
				} else if (_self.zx.remark == '') {
					uni.showToast({
						title: '备注公司信息'
					})
				} else if (_self.zx.qdoc == '') {
					uni.showToast({
						title: '必须提交咨询材料'
					})
				} else {
					uni.request({
						url: _self.url + 'admin/Seek/updateZx',
						data: {
							'zx': _self.zx
						},
						method: 'POST',
						success: (res) => {
							console.log('插入数据：', res)
						}
					});
					uni.navigateTo({
						url: '../confirm/confirm?user_id=' + _self.zx.user_id + '&post_id=' + _self.zx.post_id,
					})
				}

			},
			bindChange(e) {
				_self.zx.sc = e;
				_self.price = (_self._price * e);
				_self.zx.price = this.price;
			},
			//_self.url + 'upload/portal/wordFile/codeDemo.doc'
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
			//上传文件
			uploadFile() {
				
				this.$refs.lFile.upload({
					// #ifdef APP-PLUS
					currentWebview: this.$mp.page.$getAppWebview(),
					// #endif
					//非真实地址，记得更换
					url: _self.url + 'admin/seek/upload',
					//默认file,上传文件的key
					name: 'myFile',
					// header: {'Content-Type':'类型','Authorization':'token'},
					//...其他参数
				});
				
			},
			upSuccess(res) {
				console.log('****************************************');
				/* let end = JSON.stringify(res)
				console.log('上传成功回调', end);
				uni.showToast({
					title: JSON.stringify(res),
					icon: 'none'
				}) */
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
		margin: 30rpx 30rpx 20rpx 30rpx;

		hr {
			clear: both;
			height: 30rpx;
			background-color: #F1F1F1;
			border: none;
			border-radius: 15rpx;
		}

		.quetion {
			margin-top: 30rpx;

			p {
				margin-bottom: 20rpx;
			}

			textarea {
				height: 150rpx;
			}

			span {
				float: right;
				font-size: 20rpx;
				color: #C8C7CC;
			}

			.vnu {}

		}

		.source {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}
	}

	.shuomin {
		background-color: #F0AD4E;
		font-size: 35rpx;
		margin-bottom: 80rpx;
	}

	.sub {
		position: fixed;
		bottom: 0rpx;
		width: 100%;
		height: 80rpx;
		background-color: #333333;
	}

	.fileSub {
		display: flex;
		flex-direction: row;
		margin-top: 20rpx;
	}
</style>

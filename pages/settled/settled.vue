<template>
	<view class="page">
		<hr style="margin: 20rpx 0;">
		<view class="form">
			<l-file ref="lFile" @up-success="upSuccess"></l-file>
			<view class="content">
				<label>姓名</label>
				<input type="text" placeholder="张先生" v-model="seekinfo.name" />
			</view>
			<hr>
			<view class="content">
				<label>工作经验</label>
				<input type="text" placeholder="1年" v-model="seekinfo.work" />
			</view>
			<hr>
			<view class="content">
				<label>现任职公司</label>
				<input type="text" placeholder="中石油" v-model="seekinfo.company" />
			</view>
			<hr>
			<view class="content">
				<label>现任职位</label>
				<input type="text" placeholder="公司总经理" v-model="seekinfo.position" />
			</view>
			<hr>
			<view class="content">
				<label>就职时间</label>
				<input type="text" placeholder="2012年10月" v-model="seekinfo.duration" />
			</view>
			<hr>
			<view class="content">
				<label>电子邮箱</label>
				<input type="text" placeholder="zsysdf@163.com" v-model="seekinfo.email" />
			</view>
			<hr style="margin: 30rpx -30rpx; height: 50rpx; background-color: #C8C7CC; border: none;">
			<view class="content">
				<label>期望咨询费用</label>
				<input type="text" placeholder="2000元/小时" v-model="seekinfo.price" />
			</view>
			<hr>
			<view class="content">
				<label @tap="onUpload" style="color: #DD524D;">点击上传履历</label>
				<input type="text" placeholder="自动生成文件地址" v-model="seekinfo.resume" />

			</view>
			<hr>
		</view>
		<view class="info">
			<p>承诺以上材料真实有效，并且同意专家协议</p>
			<p>若提供信息不真实，平台有权拒绝入驻，并返回重写填写信息！</p>
		</view>
		<view class="sub">
			<button @click="confirm">提交入驻</button>
		</view>
	</view>
</template>

<script>
	import url from "../../common/config.js";
	import lFile from '@/components/l-file/l-file.vue';
	var num;
	var _self;
	export default {
		components: {
			lFile
		},
		data() {
			return {
				localPath: '',
				num: 0,
				visible: true,
				value: [0, 1, 2, 3, 4],
				allNums: [0, 2, 3, 4, 5, 6, 10],
				url: url,
				seekinfo: {
					name: '',
					work: '',
					company: '',
					position: '',
					duration: '',
					email: '',
					price: 0.0,
					resume: ''
				}
			}
		},
		onLoad() {
			_self = this
		},
		methods: {
			bindChange(e) {
				console.log(e)
			},
			/* 上传 */
			onUpload() {
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
				let end = JSON.stringify(res)
				_self.seekinfo.resume = res.data.id;
				uni.showToast({
					title: '资料上传成功！',
					icon: 'none'
				})
			},
			confirm() {
				let data = JSON.stringify(_self.seekinfo);
				//发送服务器
				uni.request({
					url: _self.url + "admin/seek/settled",
					method: "POST",
					data: data,
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						uni.showToast({
							title: '入驻申请成功，请等待平台审核'
						});
						setTimeout(function() {
							uni.switchTab({
								url: '../my/my'
							})
						}, 3000);
					}
				});

			}
		}
	}
</script>

<style lang="scss">
	.page {
		.form {
			margin: 10rpx 30rpx;

			.content {
				display: flex;
				justify-content: space-between;
				color: #000000;
				font-weight: bold;
			}

			hr {
				clear: both;
				background-color: #C0C0C0;
				margin: 30rpx 0;
				height: 1rpx;
			}
		}

		.info {
			position: fixed;
			bottom: 0;
			background-color: #C8C7CC;
			padding: 20rpx 20rpx 100rpx 20rpx;

			p {
				font-size: 30rpx;
				color: #808080;
			}
		}

		.sub {
			position: fixed;
			bottom: 0;
			width: 100%;

			button {
				background-color: #333333;
				color: #FFFFFF;
			}

		}
	}
</style>

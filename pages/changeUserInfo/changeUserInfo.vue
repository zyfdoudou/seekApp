<template>
	<view class="page">
		<hr style="margin: 20rpx 0;">
		<view class="form">
			<l-file ref="lFile" @up-success="upSuccess"></l-file>
			<view class="content">
				<label>真实的名字</label>
				<input type="text" placeholder="张军壳" v-model="seekuser.name" />
			</view>
			<hr>
			<view class="content">
				<label>用户名</label>
				<input type="text" placeholder="zhangjunke" v-model="seekuser.username" />
			</view>
			<hr>
			<view class="content">
				<label>用户密码</label>
				<input type="text" placeholder="zjk123" v-model="seekuser.password" />
			</view>
			<hr>
			<view class="content">
				<label>手机号不能修改</label>
				<input readonly="readonly" placeholder="15110312981" v-model="seekuser.tel" />
			</view>
			<hr>
			<view class="content">
				<label>微信</label>
				<input type="text" placeholder="andy-soft" v-model="seekuser.weixin" />
			</view>
			<hr>
			<hr style="margin: 30rpx -30rpx; height: 50rpx; background-color: #C8C7CC; border: none;">
			<view class="content">
				<label @tap="onUpload" style="color: #DD524D;">头像</label>
				<input type="text" placeholder="自动生成头像地址" v-model="seekuser.img" />
			</view>
			<hr>
		</view>
		<view class="sub">
			<button @click="updateSeekUser">确定修改</button>
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
				id: '',
				url: url,
				seekuser: {}
			}
		},
		onLoad: function(option) {
			_self = this;
			_self.id = option.id;

			//通过id来查询用户信息
			uni.request({
				url: _self.url + "admin/seek/getSeekUserById",
				method: "POST",
				data: {
					'id': _self.id
				},
				header: {
					'content-type': 'application/json'
				},
				success: (res) => {
					_self.seekuser = res.data;
				},
				fail: (err) => {
					console.log('错误是：' + err)
				}
			})


		},
		methods: {
			//上传头像
			/* 上传 */
			onUpload() {
				this.$refs.lFile.upload({
					// #ifdef APP-PLUS
					currentWebview: this.$mp.page.$getAppWebview(),
					// #endif
					//非真实地址，记得更换
					url: _self.url + 'admin/seek/uploadImgKp',
					//默认file,上传文件的key
					name: 'myFile',
					// header: {'Content-Type':'类型','Authorization':'token'},
					//...其他参数
				});
			},
			upSuccess(res) {
				let end = JSON.stringify(res)
				_self.seekuser.img = res.data.id;
				uni.showToast({
					title: '资料上传成功！',
					icon: 'none'
				})
			},
			//通过ID更新数据
			updateSeekUser() {
				let data = JSON.stringify(_self.seekuser);
				console.log(data)
				//发送服务器
				uni.request({
					url: _self.url + "admin/seek/seekUserUpdate",
					method: "POST",
					data: data,
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						uni.showToast({
							title: '用户信息修改成功'
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

		/* .sub {
			position: fixed;
			bottom: 0;
			width: 100%;

			button {
				background-color: #333333;
				color: #FFFFFF;
			}

		} */
	}
</style>

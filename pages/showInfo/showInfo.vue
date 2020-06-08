<template>
	<view class="page">
		<view class="title">
			{{title}}
		</view>
		<view>
			<p>长伴人力资源. 资讯信息</p>
		</view>
		<view class="content">
			<u-parse :content="content" @navigate="navigate"></u-parse>
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
				id: '',
				url: url,
				content: '',
				title:'',
				zixun: {}
			}
		},
		onLoad(options) {
			_self = this;
			_self.id = options.id;
			uni.request({
				url: _self.url + "admin/seek/getCategoryInfoById",
				method: 'POST',
				data: {
					id: _self.id
				},
				success: (res) => {
					_self.content = res.data[0].post_content;
					_self.title = res.data[0].post_title;
				}
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.page{
		margin: 30rpx 30rpx;
		.title{
			text-align: left;
			color: #333333;
		}
		p{
			padding: 20rpx 0;
			font-size: 18rpx;
			color: #999999;
		}
		.content{
			font-size: 30rpx;
			line-height: 50rpx;
		}
	}
</style>

<template>
	<!-- <web-view :src="url"></web-view> -->
	<view class="container">
		<text>由于个人账号无法配置微信小程序业务域名，请求页面无法打开。</text>
		<text>此效果可以在H5上观看</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:''
			};
		},
		onLoad(options) {
			console.log('options.url',options.url)
			this.url = options.url
		}
	}
</script>

<style lang="scss">

</style>

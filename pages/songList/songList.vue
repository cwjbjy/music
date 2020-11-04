<template>
	<view class="container">
		<image-header :source="playlist" v-if="lock"></image-header>
		<view class="bar">
			<text>歌曲列表</text>
		</view>
		<list :source="playlist.tracks" v-if="lock"></list>
	</view>
</template>

<script>
	import imageHeader from "../../components/imageHeader/imageHeader.vue"
	import list from "../../components/list/list.vue"
	export default {
		components: {
			imageHeader,
			list
		},
		data() {
			return {
				url: '/playlist/detail',
				playlist: {},
				lock: false
			};
		},
		async onLoad(options) {
			let {
				data
			} = await this.$API({
				url: `${this.url}?id=${options.id}`
			})
			this.playlist = data.playlist;
			this.lock = true;
		}
	}
</script>

<style lang="scss">
	.bar {
		height: 46rpx;
		line-height: 46rpx;
		padding: 0 20rpx;
		font-size: 24rpx;
		color: #666;
		background-color: #eeeff0;
	}
</style>

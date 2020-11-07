<template>
	<view class="container" v-if="lock">
		<image-header :source="playlist"></image-header>
		<view class="bar">
			<text>歌曲列表</text>
		</view>
		<playlist :source="tracks" :listId="listId"></playlist>
	</view>
</template>

<script>
	import imageHeader from "../../components/imageHeader/imageHeader.vue"
	import playlist from "../../components/playlist/playlist.vue"
	export default {
		components: {
			imageHeader,
			playlist
		},
		data() {
			return {
				url: '/playlist/detail',
				playlist: {}, //歌单信息
				lock: false,
				tracks:[],//歌曲详情
				listId:'', //歌单ID
			};
		},
		async onLoad(options) {
			this.listId = options.id;
			let {
				data
			} = await this.$API({
				url: `${this.url}?id=${this.listId}`
			})
			this.playlist = data.playlist;
			this.tracks = this.playlist.tracks;
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

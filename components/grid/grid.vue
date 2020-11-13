<template>
	<view class="gridBox">
		<view class="gridItem" v-for="item in source" :key="item.id" @click="handlerClick(item.id)">
			<u-lazy-load :image="item.picUrl" :loading-img="loadingImg" :error-img="errorImg" class="pic" border-radius="8"></u-lazy-load>
			<view class="playCount">{{item.playCount | numberFormat}}</view>
			<view class="picName">{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			/* 数据源 */
			source: {
				type: Array,
				default: []
			},
		},
		data() {
			return {
				loadingImg: "/static/images/loading.png",
				errorImg: "/static/images/error.png",
			};
		},
		methods: {
			handlerClick(val) {
				uni.navigateTo({
					url: `../../pages/songList/songList?id=${val}`
				})
			}
		},
	}
</script>

<style lang="scss">
	.gridBox {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.gridItem {
			width: 220rpx;
			margin: 0 4rpx 20rpx;
			position: relative;
		}

		.pic {
			width: 220rpx;
			height: 220rpx;
			border-radius: 8rpx;
		}

		.playCount {
			font-size: 24rpx;
			color: #fff;
			position: absolute;
			right: 10rpx;
			top: 4rpx;
			background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuElEQVQ4T82TMQ4BQRiF33cYhcoFSGyvdgUhUSkV1hUUCoVwB52CRKfTuc2TkZWYZbHZbGKqmcz/f/PemxlUcVCxX/UAbJ8ktXPqrkAzr/hFgW1LGgCr52LbC0ljIOqJFrYTSX1g+C4b23tJZ2D62M8DdkCvKFjbDUlroFMEWAKjTzdj+wK0IoDtiaRw8hGYfwHMJHUlbYHN3UIWXJimPwLSUBwC/R/AIfNVxkLIK6nnKZf5YJUV3ABPq1YRsAVlTwAAAABJRU5ErkJggg==");
			background-position: 0;
			background-repeat: no-repeat;
			background-size: 11px 10px;
			padding-left: 13px;
		}

		.picName {
			text-overflow: ellipsis;
			overflow: hidden;
			font-size: 26rpx;
			line-height: 1.2;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
</style>

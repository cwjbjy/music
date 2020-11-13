<template>

	<view class="gridBox">
		<view class="gridItem" v-for="item in list" :key="item.id" @click="handlerClick(item.id)">
			<u-lazy-load :image="item.coverImgUrl" :loading-img="loadingImg" :error-img="errorImg" class="pic" border-radius="8"></u-lazy-load>
			<view class="playCount">{{item.updateFrequency}}</view>
			<view class="picName">{{item.name}}</view>
		</view>
	</view>


</template>

<script>
	export default {
		data() {
			return {
				list: [],
				loadingImg: "/static/images/loading.png",
				errorImg: "/static/images/error.png",
			};
		},
		onLoad() {
			this.$API({
				url: '/toplist'
			}).then(res => {
				this.list = res.data.list
			})
		},
		methods: {
			handlerClick(val) {
				uni.navigateTo({
					url: `../../pages/songList/songList?id=${val}`
				})
			},
		}
	}
</script>

<style lang="scss">
	.gridBox {
		display: flex;
		flex-wrap: wrap;
		width: calc(100vw - 40rpx);
		margin: 0 auto;
		margin-top: 20rpx;

		.gridItem {
			width: 220rpx;
			margin: 0 8rpx 20rpx;
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
			left: 10rpx;
			top: 180rpx;
		}

		.picName {
			text-overflow: ellipsis;
			overflow: hidden;
			font-size: 26rpx;
			line-height: 1.2;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			text-align: center;
			margin-top: 8rpx;
		}
	}
</style>

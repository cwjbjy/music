<template>
	<view class="bannerContainer">
		<swiper indicator-dots circular :autoplay="true">
			<swiper-item v-for="(item,index) in source" :key="index" @click="swipersClick(item.url)">
				<view class="bannerContent">
					<u-lazy-load :image="item.imageUrl" :loading-img="loadingImg"  :error-img="errorImg" class="bannerImage" border-radius="8"></u-lazy-load>
					<view :class="[item.titleColor == 'blue' ? 'blue':'red','bannerTitle']">{{item.typeTitle}}</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			source:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
					url: "",
					loadingImg:"/static/images/loading.png",
					errorImg:"/static/images/error.png",
			};
		},
		methods:{
			swipersClick(val) {
				this.url = val;
				if(this.url == null){
					this.url="https://music.163.com/"
				}
				// #ifdef H5
				location.href = this.url;
				// #endif
				// #ifndef H5
				uni.navigateTo({
					url: `../webView/webView?url=${this.url}`
				})
				// #endif
			}
		}
	}
</script>

<style lang="scss">
	.bannerContainer {
		width: 100%;

		.bannerContent {
			position: relative;
			height: inherit;
		}

		.bannerTitle {
			position: absolute;
			right: 0;
			bottom: 0;
			color: #fff;
			padding: 0 20rpx;
			border-radius: 16rpx 0;
		}
		.bannerImage {
			border-radius: 16rpx;
			width: 100%;
			height: 100%;
		}
		.blue {
			background: #3387ca;
		}
		
		.red {
			background-color: red;
		}
	}
</style>

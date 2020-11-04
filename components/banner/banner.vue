<template>
	<view class="bannerContainer">
		<swiper indicator-dots circular :autoplay="true">
			<swiper-item v-for="(item,index) in source" :key="index" @click="swipersClick(item.url)">
				<view class="bannerContent">
					<image :src="item.imageUrl" class="bannerImage"></image>
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
			};
		},
		methods:{
			swipersClick(val) {
				this.url = val;
				// #ifndef MP-WEIXIN
				if(this.url == null){
					location.href = 'https://music.163.com/'
				}else{
					location.href = this.url;
				}
				// #endif
				// #ifdef MP-WEIXIN
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

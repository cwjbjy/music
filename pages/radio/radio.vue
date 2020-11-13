<template>
	<view class="radio">
		<view class="bannerContainer">
			<swiper indicator-dots circular :autoplay="true">
				<swiper-item v-for="(item,index) in banner" :key="index" @click="swipersClick(item.url)">
					<view class="bannerContent">
						<image :src="item.pic" class="bannerImage"></image>
						<view :class="[item.titleColor == 'blue' ? 'blue':'red','bannerTitle']">{{item.typeTitle}}</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 推荐电台 -->
		<view class="title"><text>推荐电台</text></view>
		<view class="gridBox">
			<view class="gridItem" v-for="item in djprogram" :key="item.id" @click="handlerClick(item.id)">
				<image :src="item.picUrl" class="pic"></image>
				<view class="picName">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner:[],
				djprogram:[], //推荐电台
				playlist:[]
			};
		},
		onLoad() {
			this.initData()
		},
		methods:{
			initData(){
				this.getBanner();
				this.getRecommend()
			},
			/* 获取轮播图 */
			getBanner(){
				this.$API({
					url:'/dj/banner'
				}).then(res=>{
					this.banner = res.data.data
				})
			},
			/* 获取电台推荐 */
			getRecommend(){
				this.$API({
					url:'/personalized/djprogram'
				}).then(res=>{
					this.djprogram = res.data.result;
					this.djprogram.map(item=>{
						this.playlist.push(item.program.mainSong.id)
					})
				})
			},
			swipersClick(val) {
				this.url="https://music.163.com/";
				// #ifdef H5
				location.href = this.url;
				// #endif
				// #ifndef H5
				uni.navigateTo({
					url: `../webView/webView?url=${this.url}`
				})
				// #endif
			},
			handlerClick(val) {
				// this.$API({
				// 	url:`/dj/program/detail?id=${val}`
				// })
				uni.navigateTo({
					url:`../../pages/radioPlay/radioPlay?id=${val}&playlist=${this.playlist}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.radio{
		padding: 20rpx;
	}
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
	.title {
		margin: 20rpx 0;
		font-size: 34rpx;
		position: relative;
	
		text {
			margin-left: 18rpx;
		}
	
		&::before {
			content: '';
			width: 4rpx;
			height: 32rpx;
			background-color: red;
			position: absolute;
			top: 50%;
			margin-top: -8px;
		}
	}
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

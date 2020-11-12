<template>
	<view>
		<scroll-view class="scroll-X" scroll-x="true" :scroll-left="scrollLeft" :scroll-with-animation="true">
			<view class="tag_box">
				<view v-for="(item,index) in tags" :key="index" :class="[current == index ? 'active':'inactive','tag_item']" @click="tagClick(index)">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="wrap">
			<swiper :current="current" @change="swiperChange">
				<swiper-item class="swiper-item" v-for="(list,index) in songList" :key="index">
					<scroll-view scroll-y style="height: 100%;width: 100%;"  :show-scrollbar="true">
						<view class="gridBox">
							<view class="gridItem" v-for="item in list" :key="item.id" @click="handlerClick(item.id)">
								<u-lazy-load :image="item.coverImgUrl" :loading-img="loadingImg"  :error-img="errorImg" class="pic" border-radius="8"></u-lazy-load>
								<view class="playCount">{{item.playCount | numberFormat}}</view>
								<view class="picName">{{item.name}}</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tags: [],
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				scrollLeft:0,
				songList:[],
				loadingImg:"/static/images/loading.png",
				errorImg:"/static/images/error.png",
			};
		},
		onLoad() {
			/* 热门歌单 */
			this.$API({
				url: '/playlist/hot'
			}).then(res => {
				this.tags = res.data.tags;
				this.tags.map(item=>{
					this.getData(item.name)
				})
				
			})
		},
		methods: {
			// tabs通知swiper切换
			tagClick(index){
				this.current = index;
				if(this.current == 0){
					this.scrollLeft = 0
				}
				if(this.current > 3){
					this.scrollLeft = (this.current - 3)*50
				};
			},
			/* 获取表单数据 */
			getData(val){
				this.$API({
					url: `/top/playlist?limit=15&cat=${val}`
				}).then(res=>{
					this.songList.push(res.data.playlists);
				})
			},
			handlerClick(val) {
				uni.navigateTo({
					url:`../../pages/songList/songList?id=${val}`
				})
			},
			swiperChange(e) {
				this.current = e.detail.current;
				if(this.current == 0){
					this.scrollLeft = 0
				}
				if(this.current > 3){
					this.scrollLeft = (this.current - 3)*50
				};
			},
		}
	};
</script>

<style lang="scss" scoped>
	.scroll-X {
		width: 100%;
		white-space: nowrap;
		position: relative;
		z-index: 2;

		.tag_box {
			display: flex;
			    border-bottom: 1px solid #ccc;
			    box-sizing: border-box;
		}

		.tag_item {
			height: 40px;
			line-height: 40px;
			padding: 0px 10px;
			color: rgb(48, 49, 51);
			font-size: 15px;
			z-index: 3;
			flex: 1;
		}

		.active {
			color: red;
			font-weight: bold;
			position: relative;

			&::after {
				content: '';
				width: 50%;
				height: 2px;
				position: absolute;
				bottom: 0;
				left: 24%;
				background-color: red;
			}
		}
	}
	.wrap{
		padding: 20rpx;
		height: calc(100vh - 168rpx);
	}
	uni-swiper{
		height: 100%;
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

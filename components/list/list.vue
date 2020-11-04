<template>
	<view class="songList">
		<view class="list_item" v-for="(item,index) in source" :key="index" @click="handlerCilck(item.id)">
			<view class="list_index">{{index + 1}}</view>
			<view class="item_content">
				<view class="item">
					<view class="title lin1">{{item.name}}</view>
					<view class="author lin1">{{item.ar | author}} - {{item.al.name}}</view>
				</view>
				<view class="play_icon">
					<image src="../../static/images/play.png"></image>
				</view>
			</view>
		</view>
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
				
			};
		},
		methods:{
			handlerCilck(val){
				uni.navigateTo({
					url:`../../pages/musicPlay/musicPlay?id=${val}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.songList {
		.list_item {
			height: 110rpx;
			display: flex;
			align-items: center;

			.list_index {
				width: 80rpx;
				font-size: 34rpx;
				color: #999;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.item_content {
				display: flex;
				flex: 1;
				border-bottom: 1rpx solid #aaaaaa30;
				align-items: center;
				.item{
					width: 85%;
					.title{
						font-size: 34rpx;
						color: #333;
					}
					.author{
						margin: 4rpx 0;
						font-size: 24rpx;
						color: #888;
					}
				}
				.play_icon {
					width: 56rpx;
					height: 44rpx;
					margin-left: auto;
	
					image {
						width: 44rpx;
						height: 44rpx;
					}
				}
			}

		}
	}
</style>

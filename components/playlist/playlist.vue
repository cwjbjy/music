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
					<view class="iconfont icon-plus-start playIcon"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'playlist',
		props:{
			source:{
				type:Array,
				default:[]
			},
			/* 歌单ID */
			listId:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				id:'', //歌曲Id
				playlist:[],
			};
		},
		created() {
			this.source.map(item=>{
				this.playlist.push(item.id)
			})
		},
		methods:{
			handlerCilck(val){
				this.id = val
				/* 判断是否有播放该歌曲权限 */
				this.$API({
					url: `/check/music?id=${this.id}`
				}).then(res=>{
					if(res.data.success){
						uni.navigateTo({
							url:`../../pages/musicPlay/musicPlay?id=${this.id}&playlist=${this.playlist}`
						})
					}else{
						uni.showToast({
							icon:'none',
							title:res.data.message
						})
					}
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
					.iconfont{
						color: #aaa;
					}
					margin-left: auto;
					margin-right: 10rpx;
					.playIcon{
						font-size: 40rpx;
					}
					
				}
			}

		}
	}
</style>

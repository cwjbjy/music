<template>
	<view class="recommend">

		<view class="list_item" v-for="(item,index) in dailySongs" :key="index" @click="handlerCilck(item.id)">
			<u-lazy-load :image="item.al.picUrl" :loading-img="loadingImg"  :error-img="errorImg" class="image" border-radius="8"></u-lazy-load>
			<view class="item_content">
				<view class="item">
					<view class="header">
						<view class="title lin1">
							{{item.name}}
						</view>
						<view v-if="item.recommendReason" class="recommendReason">
							{{item.recommendReason}}
						</view>
					</view>
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
		data() {
			return {
				cookie: "",
				loadingImg:"/static/images/loading.png",
				errorImg:"/static/images/error.png",
				recommendReasons: [],
				dailySongs: [],
				playlist:[]
			};
		},
		onLoad() {
			uni.getStorage({
				key: 'cookie',
				success: (res) => {
					this.cookie = res.data;
					this.getRecommendSongs()
				}
			})
		},
		methods: {
			getRecommendSongs() {
				this.$API({
					url: `/recommend/songs?cookie=${this.cookie}`
				}).then(res => {
					if (res.code == 301) {
						uni.navigateTo({
							url: '../userSet/userSet'
						});
						uni.showToast({
							icon: 'none',
							title: '请先登录'
						})
					} else {
						this.dailySongs = res.data.data.dailySongs;
						/* 提取歌曲Id列表 */
						this.dailySongs.map(item=>{
							this.playlist.push(item.id)
						})
						this.recommendReasons = res.data.data.recommendReasons;
						/* 封装 */
						this.dailySongs.map(item=>{
							this.recommendReasons.map(child=>{
								if(item.id == child.songId){
									this.$set(item,'recommendReason',child.reason)
								}
							})
						});
					}
				})
			},
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

<style lang="scss" scoped>
	.recommend {
		padding: 0 40rpx;

		.list_item {
			height: 110rpx;
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid #aaaaaa30;

			.image {
				width: 80rpx;
				height: 80rpx;
			}

			.item_content {
				display: flex;
				flex: 1;
				margin-left: 20rpx;
				align-items: center;

				.item {
					width: 85%;
					.header{
						display: flex;
					}
					.title {
						font-size: 34rpx;
						color: #333;
						max-width: 272rpx;
					}
					.recommendReason{
						        background-color: #e8928d87;
						        color: #d43c33;
						        margin-left: 10rpx;
						        font-size: 24rpx;
						        display: flex;
						        align-items: center;
						        padding: 0 10rpx;
					}
					.author {
						margin: 4rpx 0;
						font-size: 24rpx;
						color: #888;
					}
				}

				.play_icon {
					.iconfont {
						color: #aaa;
					}

					margin-left: auto;
					margin-right: 10rpx;

					.playIcon {
						font-size: 40rpx;
					}

				}
			}

		}
	}
</style>

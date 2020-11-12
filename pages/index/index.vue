<template>
	<view class="container">
		<view class="mian">
			<!-- 轮播图 -->
			<wj-banner :source="banner"></wj-banner>
			<!-- 选项列表 -->
			<view class="middleBar">
				<view class="barItem" @click="recommend">
					<view class="imageBar">
						<image src="../../static/images/home-it666-rl.png"></image>
					</view>
					<view>每日推荐</view>
					<view class="number">{{getDate}}</view>
				</view>
				<view class="barItem" v-for="(item,index) in middleBar" :key="index" @click="handlerClick(item.name)">
					<view class="imageBar">
						<image :src="item.url"></image>
					</view>
					<view>{{item.name}}</view>
				</view>
			</view>
			<!-- 推荐歌单 -->
			<view class="title"><text>推荐歌单</text></view>
			<wj-grid :source="songList"></wj-grid>
			<!-- 最新音乐 -->
			<view class="title"><text>最新音乐</text></view>
			<view class="newsong_item" v-for="(item,index) in newsong" :key="item.id" @click="newsongClick(item.id)">
				<view class="item_left">
					<view class="f-thide newSongTitle">
						<text>{{item.song.name}}</text>
					</view>
					<view class="f-thide newSongAuthor">{{item.song.artists | author}} - {{item.song.album.name}}</view>
				</view>
				<view class="item_right">
					<view class="iconfont icon-plus-start playIcon"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import wjBanner from "../../components/banner/banner"
	import wjGrid from "../../components/grid/grid.vue"
	export default {
		components: {
			wjBanner,
			wjGrid
		},
		data() {
			return {
				banner: [],
				songList: [],
				newsong: [],
				playlist: [], //存放ID组
				id: '',
				middleBar: [{
						url: '../../static/images/home-it666-gd.png',
						name: '歌单'
					},
					{
						url: '../../static/images/home-it666-phb.png',
						name: '排行榜'
					},
					{
						url: '../../static/images/home-it666-dt.png',
						name: '电台'
					},
				]
			}
		},
		computed: {
			getDate() {
				var myDate = new Date();
				let date = myDate.getDate();
				return date
			}
		},
		async onLoad() {
			let [a, b, c] = await Promise.all([this.$API({
				url: '/banner'
			}), this.$API({
				url: '/personalized?limit=6'
			}), this.$API({
				url: '/personalized/newsong'
			})]);
			this.banner = a.data.banners;
			this.songList = b.data.result;
			this.newsong = c.data.result;
			this.newsong.map(item => {
				this.playlist.push(item.id)
			})
		},
		methods: {
			searchFocus(e) {
				uni.navigateTo({
					url: '../search/search'
				})
			},
			/* 最新音乐 */
			newsongClick(val) {
				this.id = val
				/* 判断是否有播放该歌曲权限 */
				this.$API({
					url: `/check/music?id=${this.id}`
				}).then(res => {
					if (res.data.success) {
						uni.navigateTo({
							url: `../../pages/musicPlay/musicPlay?id=${this.id}&playlist=${this.playlist}`
						})
					} else {
						uni.showToast({
							icon: 'none',
							title: res.data.message
						})
					}
				})
			},
			/* 每日推荐 */
			recommend() {
				uni.navigateTo({
					url: '../recommend/recommend'
				})
			},
			/* 分类点击 */
			handlerClick(val) {
				if (val == '歌单') {
					uni.navigateTo({
						url:'../songMenu/songMenu'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mian {
		padding: 20rpx;
	}

	.middleBar {
		display: flex;
		justify-content: space-between;
		margin-top: 40rpx;
		margin-bottom: 40rpx;
	}

	.barItem {
		align-items: center;
		display: flex;
		flex-direction: column;
		width: 140rpx;
		font-size: 30rpx;
		position: relative;
	}

	.number {
		position: absolute;
		top: 32rpx;
		color: red;
	}

	.imageBar {
		background-image: linear-gradient(to right, #ff5c4b, #fe1e11);
		;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		margin-bottom: 10rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.headset {
		width: 32rpx;
		height: 32rpx;
		position: absolute;
		right: 0;
	}

	.title {
		margin-bottom: 20rpx;
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

	.newsong_item {
		height: 110rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1rpx solid #aaaaaa30;

		.f-thide {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			word-break: normal;
		}

		.item_left {
			.newSongTitle {
				font-size: 34rpx;
				color: #333333;
			}

			.newSongAuthor {
				font-size: 24rpx;
				color: #888;
				margin-top: 8rpx;
			}
		}

		.item_right {
			.iconfont {
				color: #aaa;
			}

			.playIcon {
				font-size: 40rpx;
			}
		}

	}
</style>

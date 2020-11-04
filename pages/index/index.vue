<template>
	<view class="container">
		<view class="mian">
			<!-- 轮播图 -->
			<wj-banner :source="banner"></wj-banner>
			<!-- 选项列表 -->
			<view class="middleBar">
				<view class="barItem">
					<view class="imageBar">
						<image src="../../static/images/home-it666-rl.png"></image>
					</view>
					<view>每日推荐</view>
					<view class="number">30</view>
				</view>
				<view class="barItem" v-for="(item,index) in middleBar" :key="index">
					<view class="imageBar">
						<image :src="item.url"></image>
					</view>
					<view>{{item.name}}</view>
				</view>
			</view>
			<!-- 推荐歌单 -->
			<view class="title"><text>推荐歌单</text></view>
			<wj-grid :source="songList"></wj-grid>
			<!-- 最新专辑 -->
			<!-- <view class="title"><text>最新专辑</text></view> -->
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
		async onLoad() {
			let [a, b, c] = await Promise.all([this.$API({
				url: '/banner'
			}), this.$API({
				url: '/personalized?limit=6'
			}), this.$API({
				url: '/album/newest'
			})]);
			this.banner = a.data.banners
			this.songList = b.data.result
			// /song/url?id=33894312
		},
		methods: {
			searchFocus(e) {
				uni.navigateTo({
					url: '../search/search'
				})
			},
		}
	}
</script>

<style lang="scss">
	
	.mian {
		padding: 20rpx;
	}

	.middleBar {
		display: flex;
		justify-content: space-between;
		margin-top: 40rpx;
		margin-bottom: 20rpx;
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
</style>

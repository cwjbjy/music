<template>
	<view class="container">
		<view class="input_box">
			<u-search :placeholder="placeholder" v-model="keyword" :clearabled="true" :show-action="false" :focus="true" @change="inputChange"
			 @clear="clearSearch" @focus="focus"></u-search>
		</view>
		<view class="hotlist" v-if="flag === 0">
			<view class="title">热门搜索</view>
			<view class="list">
				<view v-for="(item,index) in hotlist" :key="index" class="item" @click="changeInput(item.first)">{{item.first}}</view>
			</view>
			<view class="history_list">
				<view v-for="(item,index) in history_list" :key="index" class="history_item">
					<u-icon name="clock" color="#ccc" size="32"></u-icon>
					<view class="right">
						<view class="title" @click="changeInput(item.keyword)">{{item.keyword}}</view>
						<u-icon name="close" color="#ccc" @click="close(item.keyword)"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<view class="suggest" v-if="flag === 1">
			<view class="recom">搜索：{{keyword}}</view>
			<view v-for="(item,index) in suggest" :key="index" class="suggest_item" @click="clickSuggest(item.keyword)">
				<u-icon name="search"></u-icon>
				<view class="span">{{item.keyword}}</view>
			</view>
		</view>
		<view class="result" v-if="flag === 2">
			<view class="result_item" v-for="(item,index) in result" :key="item.id" @click="resultClick(item.id)">
				<view class="item_left">
					<view class="f-thide newSongTitle">
						<text>{{item.name}}</text>
					</view>
					<view class="f-thide newSongAuthor">{{item.artists | author}} - {{item.album.name}}</view>
				</view>
				<view class="item_right">
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
				id: null,
				placeholder: "",
				keyword: "",
				songCount: 0,
				hotlist: [],
				suggest: [],
				result: [],
				playlist: [],
				search_key: [], //存储搜索历史
				history_list: [],
				flag: 0, //0热门搜索，1搜索建议，2搜索结果
			};
		},
		watch: {
			/* 每次切换到查询页面时，更新历史搜索记录 */
			flag: {
				handler(val) {
					if (val === 0) {
						uni.getStorage({
							key: 'search_key',
							success: (res) => {
								this.history_list = res.data;
							}
						})
					}
				},
				immediate: true,
			}
		},
		onLoad() {
			this.hot();
			this.searchDefault();
		},
		methods: {
			/* 再次获取焦点，跳转到搜索建议 */
			focus(val) {
				if (val !== "") {
					this.flag = 1;
				}
			},
			searchDefault() {
				this.$API({
					url: '/search/default'
				}).then(res => {
					this.placeholder = res.data.data.realkeyword
				})
			},

			hot() {
				this.$API({
					url: '/search/hot'
				}).then(res => {
					this.hotlist = res.data.result.hots
				})
			},
			inputChange() {
				if (this.flag !== 2) {
					/* 搜索建议 */
					this.flag = 1;
					if (this.keyword !== "") {
						this.$API({
							url: `/search/suggest?keywords=${this.keyword}&type=mobile`
						}).then(res => {
							this.suggest = res.data.result.allMatch;
						})
					} else {
						this.flag = 0;
					}
				}
			},
			/* 清除搜索 */
			clearSearch() {
				this.flag = 0;
			},
			/* 点击热门搜索 */
			changeInput(val) {
				this.keyword = val;
			},
			/* 点击搜索建议 */
			clickSuggest(val) {
				this.keyword = val;
				this.search_key.push({
					keyword: this.keyword
				})
				uni.setStorage({
					key: 'search_key',
					data: this.search_key
				})
				/* 搜索结果 */
				this.flag = 2;
				this.$API({
					url: `/search?keywords=${val}&limit=10`
				}).then(res => {
					/* 搜索歌曲条数 */
					this.songCount = res.data.result.songCount;
					this.result = res.data.result.songs;
					this.result.map(item => {
						this.playlist.push(item.id)
					})
				})
			},
			/* 点击查询结果 */
			resultClick(val) {
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
			/* 删除某项历史记录 */
			close(val){
				for(let i=0,len = this.history_list.length;i<len;i++){
					if(this.history_list[i].keyword == val){
						this.history_list.splice(i,1);
						uni.setStorage({
							key: 'search_key',
							data: this.search_key
						})
						break;
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input_box {
		padding: 30rpx 20rpx;
		border-bottom: 1rpx solid #aaaaaa30;
		box-sizing: border-box;
	}

	.hotlist {
		padding: 30rpx 20rpx 0;

		.title {
			font-size: 24rpx;
			line-height: 24rpx;
			color: #666;
		}

		.list {
			margin: 20rpx 0 14rpx;

			.item {
				display: inline-block;
				height: 64rpx;
				margin-right: 16rpx;
				margin-bottom: 16rpx;
				padding: 0 28rpx;
				font-size: 28rpx;
				line-height: 64rpx;
				color: #333;
				border: 1rpx solid #d3d4da;
				border-radius: 64rpx;
			}
		}
	}

	.suggest {
		.recom {
			height: 100rpx;
			margin-left: 20rpx;
			padding-right: 20rpx;
			font-size: 30rpx;
			line-height: 100rpx;
			color: #507daf;
			border-bottom: 1rpx solid #d3d4da47;
		}

		.suggest_item {
			display: flex;
			align-items: center;
			height: 90rpx;
			padding-left: 20rpx;

			.span {
				margin-left: 14rpx;
				display: inline-block;
				flex: 1;
				width: 1%;
				padding-right: 20rpx;
				font-size: 30rpx;
				line-height: 90rpx;
				color: #333;
				border-bottom: 1rpx solid #d3d4da47;
			}
		}
	}

	.result_item {
		height: 110rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1rpx solid #aaaaaa30;
		padding-left: 30rpx;


		.item_left {
			width: 80%;

			.newSongTitle {
				font-size: 34rpx;
				color: #333333;
			}

			.newSongAuthor {
				font-size: 24rpx;
				color: #888;
				margin-top: 8rpx;
			}

			.f-thide {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				word-break: normal;
			}
		}

		.item_right {
			padding: 0 20rpx;

			.iconfont {
				color: #aaa;
			}

			.playIcon {
				font-size: 40rpx;
			}
		}

	}

	.history_item {
		display: flex;

		.right {
			display: flex;
			justify-content: space-between;
			flex: 1;
			margin-left: 20rpx;
			border-bottom: 1rpx solid #aaaaaa30;
			height: 90rpx;
			line-height: 90rpx;
			.title{
				flex: 1;
				line-height: 90rpx;
			}
		}
	}
</style>

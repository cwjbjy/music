<template>
	<view class="container" v-if="duration !== 0">
		<view class="bg" :style="{'background-image':`url(${program.blurCoverUrl})`}"></view>
		<view class="mask"></view>
		<!-- 中间 -->
		<view class="wrap">
			<swiper class="swiper">
				<swiper-item>
					<view class="song">
						<view :class="['song_turn',paused !== true ? 'active':'']">
							<view class="song_pic">
								<image :src="program.coverUrl"></image>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 底部 -->
		<view class="bottom">
			<!-- 进度条 -->
			<view class="progress">
				<view class="timing">
					{{current | palyTime}}
				</view>
				<slider class="audio-slider" :activeColor="color" block-size="16" :value="current" :max="duration" @changing="seek=true,current=$event.detail.value"
				 @change="audio.seek($event.detail.value)"></slider>
				<view class="time">
					{{duration | palyTime}}
				</view>
			</view>
			<!-- 播放控制 -->
			<view class="control">
				<view class="select">
					<view class="iconfont icon-xunhuan barIcon" v-if="!playOrder" @click="continuePlay"></view>
					<view class="iconfont icon-danquxunhuan barIcon" v-if="playOrder" @click="continuePlay"></view>
				</view>
				<view class="iconfont icon-48shangyishou barIcon" @click="next(-1)"></view>
				<view class="play" @click="audio.paused?audio.play():audio.pause()">
					<view class="iconfont icon-plus-start playIcon" v-if="paused"></view>
					<view class="iconfont icon-plus-pause playIcon" v-if="!paused"></view>
				</view>
				<view class="iconfont icon-048caozuo_xiayishou barIcon" @click="next(1)"></view>
				<view class="iconfont icon-shoucang barIcon"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: null, //歌曲ID
				radioId: null,
				program: {},
				djprogram: [],
				tracks: [], //歌单详情
				playlist: "", //歌单下歌曲ID集
				srcs: [], //过滤后的歌单详情
				url: '',
				color: '#169af3',
				audio: null, //音频实例
				playOrder: false, //是否顺序播放
				duration: 0, //总时长
				current: 0, //当前时长
				paused: true, //是否处于暂停状态
				loading: false, //是否处于读取状态
				seek: false //是否处于拖动状态
			};
		},
		filters: {
			/* 格式化时间 将s转为00:00 */
			palyTime(value) {
				/* 向下取整，取分钟 */
				let minute = Math.floor(value / 60)
				/* 取余数，取秒数 */
				let second = parseInt(value % 60)
				/* 将变量转字符串 */
				minute += ''
				second += ''
				/* 如果只有一位数，前面增加一个0 */
				minute = (minute.length == 1) ? '0' + minute : minute
				second = (second.length == 1) ? '0' + second : second
				return minute + ':' + second
			}
		},
		async onLoad(options) {
			this.id = options.id;
			this.playlist = options.playlist;
			this.tracks = this.playlist.split(",")
			this.initData();
			this.getRecommend();
		},
		onUnload() {
			this.audio.destroy()
		},
		methods: {
			async initData() {
				await this.getSongsUrl();
				await this.getRadioDetail();
				this.playSong()
			},
			/* 获取电台推荐 */
			getRecommend() {
				this.$API({
					url: '/personalized/djprogram'
				}).then(res => {
					this.djprogram = res.data.result;
				})
			},
			/* 获取电台列表url */
			getSongsUrl() {
				return new Promise((resolve, reject) => {
					this.$API({
						url: `/song/url?id=${this.playlist}`
					}).then(res => {
						let data = res.data.data;
						/* 过滤无权限歌曲,并排序 */
						this.tracks.map((track, index) => {
							data.map(item => {
								if (track == item.id && item.url) {
									this.srcs.push({
										id: item.id,
										url: item.url,
										index: index
									})
								}
							})
						})
						resolve()
					})
				})
			},
			/* 获取电台详情 */
			getRadioDetail() {
				return new Promise((resolve, reject) => {
					this.$API({
						url: `/dj/program/detail?id=${this.id}`
					}).then(res => {
						this.program = res.data.program;
						this.radioId = this.program.mainSong.id;
						let _this = this;
						uni.setNavigationBarTitle({
							title: _this.program.name,
						});
						resolve()
					});
				})
			},
			/* 播放 */
			playSong() {
				/* 根据id查找对应音乐url */
				this.srcs.map(item => {
					if (item.id == this.radioId) {
						this.url = item.url
					}
				});
				this.audio = uni.createInnerAudioContext();
				this.audio.src = this.url;
				this.audio.autoplay = true;
				/* 每次构建实例时，将行数初始化 */
				/* 音频进入可播放状态 */
				this.audio.onCanplay(() => {
					this.duration = this.audio.duration;
				})
				//音频播放事件
				this.audio.onPlay(() => {
					this.paused = false
					// this.loading = false
				})
				//音频暂停事件
				this.audio.onPause(() => {
					this.paused = true
				})
				//音频进度更新事件
				this.audio.onTimeUpdate(() => {
					if (!this.seek) {
						this.current = this.audio.currentTime;
					}
					if (!this.duration) {
						this.duration = this.audio.duration
					}
				})
				//音频结束事件
				this.audio.onEnded(() => {
					if (!this.playOrder) {
						this.next(1);
					} else {
						this.paused = true
						this.current = 0
					}
				})
				//音频完成更改进度事件
				this.audio.onSeeked(() => {
					this.seek = false
				})
			},
			next(val) {
				let nex = val;
				for (let i = 0, len = this.srcs.length; i < len; i++) {
					/* 匹配当前播放列表Id */
					if (this.srcs[i].id == this.radioId) {
						if (nex == 1) {
							/* 下一首 */
							if (i == len - 1) {
								/* 歌曲为最后一首，循环听第一首歌 */
								this.radioId = this.srcs[0].id;
							} else {
								this.radioId = this.srcs[i + nex].id;
							}
						} else {
							/* 上一首 */
							if (i == 0) {
								/* 歌曲为d第一首，循环听最后一首歌 */
								this.radioId = this.srcs[len - 1].id;
							} else {
								this.radioId = this.srcs[i + nex].id;
							}
						}
						this.djprogram.map(item => {
							if (item.program.mainSong.id == this.radioId) {
								this.id = item.id
							}
						})
						break;
					}
				}
				this.current = 0;
				this.getRadioDetail();
				this.audio.destroy();
				this.playSong();
			},
			continuePlay() {
				this.playOrder = !this.playOrder;
				if (this.playOrder) {
					uni.showToast({
						icon: 'none',
						title: '单曲循环',
						position: 'bottom'
					})
					/* 循环播放 */
					this.audio.loop = true
				} else {
					uni.showToast({
						icon: 'none',
						title: '列表循环',
						position: 'bottom'
					})
					this.audio.loop = false
				}
			},
		}

	}
</script>

<style lang="scss" scoped>
	.container {
		position: absolute;
		width: 100vw;
		top: 0;
		bottom: 0;
	}

	.mask {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		opacity: .25;
		background: #000;
	}

	.bg {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-repeat: no-repeat;
		background-position: center;
		filter: blur(80rpx);
		z-index: 1;
	}

	.wrap {
		position: absolute;
		top: 0;
		z-index: 100;
		width: 100%;
		bottom: 200rpx;

		.swiper {
			height: 100%;
		}

		.song {
			width: 600rpx;
			height: 600rpx;
			margin: 0 auto;
			margin-top: 10%;
			// &::before {
			// 	width: 96px;
			// 	height: 137px;
			// 	content: " ";
			// 	position: absolute;
			// 	background-size: contain;
			// 	background-image: url(../../static/images/player-it666-needle.png);
			// }

			.song_turn {
				width: 100%;
				height: 100%;
				background-image: url(https://wen.cwjbjy.online/images/music/player-it666-disc.png);
				background-repeat: no-repeat;
				background-size: contain;
				display: flex;
				justify-content: center;
				align-items: center;
				animation: mymove 10s linear infinite;
				animation-play-state: paused;

				.song_pic {
					width: 372rpx;
					height: 372rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
			}

			.active {
				animation-play-state: running;
			}
		}
	}

	@keyframes mymove {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	.bottom {
		height: 200rpx;
		position: absolute;
		bottom: 0;
		width: 100%;
		z-index: 100;

		.control {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 80rpx;
		}

		.barIcon {
			font-size: 60rpx;
		}

		.playIcon {
			font-size: 80rpx;
		}
	}

	.progress {
		display: flex;
		font-size: 24rpx;
		color: #fff;
		padding: 0 40rpx;
		align-items: center;

		.timing {
			width: 80rpx;
		}

		.audio-slider {
			flex: 1;
		}

		.time {
			text-align: right;
			color: #ccc;
			width: 80rpx;
		}
	}

	.scroll-Y {
		height: 100%;
		text-align: center;
		display: block;
		font-size: 16px;
		line-height: 4;
		position: relative;
		color: #fff;
	}
</style>

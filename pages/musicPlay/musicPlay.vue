<template>
	<view class="container" v-if="songs.length > 0">
		<view class="bg" :style="{'background-image':`url(${song.al.picUrl})`}"></view>
		<view class="mask"></view>
		<!-- 顶部 -->
		<view class="titleBar">
			<view class="bar_left" @click="handlerClick">
				<view class="iconfont icon-xiangxiajiantou"></view>
			</view>
			<view class="bar_center">
				<view class="title lin1">{{song.name}}</view>
				<view class="author lin1">{{song.ar | author}}</view>
			</view>
		</view>
		<!-- 中间 -->
		<view class="wrap">
			<view class="song">
				<view :class="['song_turn',palyStatus === true ? 'active':'']">
					<view class="song_pic">
						<image :src="song.al.picUrl"></image>
					</view>
				</view>
			</view>
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
					<view class="iconfont icon-xunhuan barIcon"></view>
				</view>
				<view class="iconfont icon-48shangyishou barIcon"></view>
				<view class="play" @click="paly">
					<!-- <u-icon name="photo"></u-icon> -->
					<!-- <view class="playIcon" v-if="!palyStatus">
						<image src="../../static/images/player-it666-play.png"></image>
					</view>
					<view class="playIcon" v-if="palyStatus">
						<image src="../../static/images/player-it666-pause.png"></image>
					</view> -->
				</view>
				<view class="iconfont icon-048caozuo_xiayishou barIcon"></view>
				<view class="iconfont icon-shoucang barIcon"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: null,
				song: {},
				songs: [],
				palyStatus: false,
				url: '',

				color: '#169af3',
				audio: uni.createInnerAudioContext(), //音频实例
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
			/* 获取歌曲详情 */
			this.$API({
				url: `/song/detail?ids=${this.id}`
			}).then(res => {
				this.songs = res.data.songs;
				this.song = this.songs[0]
			})
			/* 判断是否有播放该歌曲权限 */
			let {
				data
			} = await this.$API({
				url: `/check/music?id=${this.id}`
			})
			if (data.success) {
				this.$API({
					url: `/song/url?id=${this.id}`
				}).then(res => {
					this.url = res.data.data[0].url;
					this.audio.src = this.url;
					/* 音频进入可播放状态 */
					this.audio.onCanplay(() => {
						this.duration = this.audio.duration
					})
				})
			} else {
				uni.showToast({
					icon: 'none',
					title: data.message
				})
			}
		},
		methods: {
			handlerClick() {
				uni.navigateBack()
			},
			async paly() {
				this.palyStatus = !this.palyStatus;
				if (this.palyStatus) {
					this.audio.play()
				} else {
					this.audio.pause()
				}
				this.audio.onPlay(() => {
					console.log('开始播放');
					console.log('长度', this.audio.duration)
					console.log('位置', this.audio.currentTime)
					console.log('播放状态', this.audio.paused)
				});
				this.audio.onError((res) => {
					console.log(res.errMsg);
					console.log(res.errCode);
				});
			},
			progressClick(e) {
				console.log(e)
			}
		}

	}
</script>

<style lang="scss" scoped>
	.bg {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-repeat: no-repeat;
		background-position: center;
		filter: blur(60rpx);
		z-index: 1;
		transform: scale(1.5);
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

	.titleBar {
		height: 100rpx;
		width: 100%;
		display: flex;
		z-index: 100;
		position: absolute;

		.bar_left {
			width: 64rpx;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.bar_center {
			margin-left: 20rpx;
			margin-top: 10rpx;
			color: #fff;

			.title {
				font-size: 34rpx;

			}

			.author {
				margin: 4rpx 0;
				font-size: 24rpx;

			}
		}
	}

	.wrap {
		position: absolute;
		top: 70px;
		z-index: 100;
		width: 100%;

		.song {
			width: 600rpx;
			height: 600rpx;
			margin: 0 auto;

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
			width: 90rpx;
			height: 90rpx;

			image {
				width: 100%;
				height: 100%;
			}
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
</style>

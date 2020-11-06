<template>
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
				<view class="playIcon" v-if="paused">
					<image src="../../static/images/player-it666-play.png"></image>
				</view>
				<view class="playIcon" v-if="!paused">
					<image src="../../static/images/player-it666-pause.png"></image>
				</view>
			</view>
			<view class="iconfont icon-048caozuo_xiayishou barIcon"></view>
			<view class="iconfont icon-shoucang barIcon"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
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
		created() {
			uni.showLoading({
				title: '加载中',
				mask: true
			})
			this.audio.src = this.src
			this.audio.onTimeUpdate(() => {
				console.log('11',this.audio.duration)
			})
			/* 音频进入可播放状态 */
			this.audio.onCanplay(() => {
				this.duration = this.audio.duration
				uni.hideLoading()
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
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

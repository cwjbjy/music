<template>
	<view class="wrap">
		<swiper class="swiper">
			<swiper-item>
				<view class="song">
					<view :class="['song_turn',paused !== true ? 'active':'']">
						<view class="song_pic">
							<image :src="url"></image>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<scroll-view :scroll-top="scrollTop" class="scroll-Y" scroll-y="true" ref="scrollY" id="scrollY" v-if="!nolyric">
					<view v-for="(value,index) in lyricArrary" :key="index" :id="index" :ref="index" :style="{'color': index == line ? '#a6e22d' : '#fff'}">
						{{value.text}}
					</view>
				</scroll-view>
				<scroll-view v-if="nolyric" style="color:#FFFFFF;text-align: center;">
					无歌词，请欣赏音乐
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			/* 是否处于暂停状态 */
			paused:{
				type:Boolean,
				default:true
			},
			/* 歌曲图片 */
			url:{
				type:String,
				default:''
			},
			/* 歌词滚动距离 */
			scrollTop:{
				type:Number,
				default:0
			},
			/* 处理后的歌词 */
			lyricArrary:{
				type:Array,
				default:function(){
					return
				}
			},
			/* 无歌词标识 */
			nolyric:{
				type:Boolean,
				default:false
			},
			/* 当前行 */
			line:{
				type:Number,
				default:0
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
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
			position: relative;
			top: 10%;
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
		.scroll-Y {
			height: 100%;
			text-align: center;
			display: block;
			font-size: 32rpx;
			line-height: 4;
			position: relative;
			color: #fff;
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
</style>

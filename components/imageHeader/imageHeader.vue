<template>
	<view class="header">
		<view class="header_bg" :style="{'background-image':`url(${source.coverImgUrl})`}"></view>
		<view class="mask"></view>
		<view class="header_wrap">
			<view class="wrap_fl">
				<image :src="source.coverImgUrl"></image>
				<text class="icon">歌单</text>
			</view>
			<view class="wrap_fr">
				<view class="header_name">
					<text>{{source.name}}</text>
				</view>
				<view class="auth">
					<image :src="source.creator.avatarUrl" class="auth_image"></image>
					<text>{{source.creator.nickname}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			source:{
				type:Object,
				default:[]
			}
		},
		created() {
			
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.header {
		position: relative;
		padding: 60rpx 20rpx 60rpx 30rpx;
		overflow: hidden;

		.header_bg {
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: 50%;
			filter: blur(40rpx);
			transform: scale(1.5);
		}

		.mask {
			z-index: 10;
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			opacity: .25;
			background: #000;
		}

		.header_wrap {
			position: relative;
			z-index: 100;
			color: #fff;
			display: flex;

			.wrap_fl {
				width: 252rpx;
				height: 252rpx;
				position: relative;

				image {
					width: 100%;
					height: 100%;
				}

				.icon {
					position: absolute;
					z-index: 101;
					top: 10px;
					left: 0;
					padding: 0 8px;
					height: 17px;
					color: #fff;
					font-size: 18rpx;
					text-align: center;
					line-height: 34rpx;
					background-color: rgba(217, 48, 48, .8);
					border-top-right-radius: 34rpx;
					border-bottom-right-radius: 34rpx;
				}
			}

			.wrap_fr {
				flex: 1;
				margin-left: 32rpx;

				.header_name {
					text {
						font-size: 34rpx;
					}
				}

				.auth {
					margin-top: 40rpx;
					display: flex;
					align-items: center;

					.auth_image {
						display: inline-block;
						width: 60rpx;
						height: 60rpx;
						border-radius: 50%;
						vertical-align: middle;
						margin-right: 10rpx;
					}

					text {
						color: hsla(0, 0%, 100%, .7);
						font-size: 28rpx;
					}
				}
			}
		}
	}
</style>

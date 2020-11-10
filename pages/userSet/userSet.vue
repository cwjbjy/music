<template>
	<view class="userSet">
		<view class="header" :style="{'background-image':`url(${profile.backgroundUrl})`}">
			<view v-if="!loginStatus" class="lg_button" @click="loginPage">账号登陆</view>
			<view v-else class="avatar_wrap">
				<image :src="profile.avatarUrl" class="avatar"></image>
				<view class="userInfo">
					<view class="name lin1">{{profile.nickname}}</view>
					<view class="follow">
						关注 {{profile.follows}} | 被关注 {{profile.followeds}}
					</view>
				</view>
			</view>
		</view>
		<view class="wrap">
			<view class="list_item">
				<view class="title" style="text-align: center;" @click="logout">退出登录</view>
				<!-- 	<uni-icons type="arrowright" size="30"></uni-icons> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginStatus: false, //登陆状态
				userId: "",
				cookie: "",
				profile: {}, //用户描述
			};
		},
		onShow() {
			/* 获取cookie */
			this.getCookie();
			/* 获取用户ID */
			this.getId();
			this.getLoginStatus();
		},
		methods: {
			/* 获取cookie */
			getCookie() {
				try {
					const value = uni.getStorageSync('cookie');
					if (value) {
						this.cookie = value;
					} else {
						this.cookie = "";
					}
				} catch (e) {
					console.log(e)
				}
			},
			/* 获取用户Id */
			getId() {
				uni.getStorage({
					key: 'userId',
					success: (res) => {
						this.userId = res.data;
						this.getUserDetail()
					},
					fail: () => {
						this.userId = ""
					}
				})
			},
			/* 获取登录状态 */
			getLoginStatus() {
				this.$API({
					url: `/login/status?cookie=${this.cookie}`,
				}).then(res => {
					if (res.data.code === 301) {
						this.loginStatus = false;
					} else {
						this.loginStatus = true;
					}
				})
			},
			/* 获取用户详情 */
			getUserDetail() {
				this.$API({
					url: `/user/detail?uid=${this.userId}`
				}).then(res => {
					if(res.data.code == 404){
						this.$API({
							url:`/activate/init/profile?nickname=${new Date().getTime()}&cookie=${this.cookie}`
						}).then(res=>{
							this.getUserDetail();
						})
					}else{
						this.profile = res.data.profile
					}
				})
			},
			/* 账号登陆 */
			loginPage() {
				uni.navigateTo({
					url: '../login/login'
				})
			},
			/* 退出 */
			logout() {
				this.$API({
					url: '/logout'
				});
				uni.clearStorage();
				this.cookie = "";
				this.userId = "";
				this.profile = {}
				this.getLoginStatus();
				uni.showToast({
					title: '退出成功'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.userSet {
		position: absolute;
		left: 0;
		bottom: 0;
		top: 0;
		right: 0;
		background: #f1f1f1;
	}

	.header {
		background-color: #d43c33;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 300rpx;

		.lg_button {
			width: 280rpx;
			height: 80rpx;
			border-radius: 40rpx;
			background-color: #fff;
			font-size: 36rpx;
			line-height: 80rpx;
			font-weight: bold;
		}

		.avatar_wrap {
			display: flex;
			justify-content: space-between;
			width: 100%;
			padding: 0 60rpx;

			.avatar {
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
			}

			.userInfo {
				flex: 1;
				color: #fff;
				font-size: 32rpx;
				padding: 0 20px;
				position: relative;

				.name {
					margin-top: 20rpx;
					text-align: left;
					position: absolute;
					bottom: 30px;
				}

				.follow {
					margin-top: 20rpx;
					text-align: left;
					position: absolute;
					bottom: 0;
				}
			}

		}

	}

	.wrap {
		position: absolute;
		bottom: 40rpx;
		left: 0;
		right: 0;
		background: #fff;

		.list_item {
			display: flex;
			justify-content: space-between;
			border-top: 1rpx solid #aaaaaa30;

			.title {
				font-size: 32rpx;
				padding: 12px 15px;
				flex: 1;
			}
		}
	}
</style>

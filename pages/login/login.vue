<template>
	<view class="login">
		<view class="title">未注册手机号点击下一步之后选择忘记密码，登录后将自动创建账号</view>
		<view class="input">
			<view class="areaCode" @click="areaClick">
				<view class="area">{{code}}</view>
				<view class="iconfont icon-xiangxiajiantou arrowIcon"></view>
			</view>
			<input v-model="phone" type="number" placeholder="请输入手机号" focus/>
		</view>
		<view class="next_button" @click="nextStep">下一步</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code:"86",
				phone:"",
				flag:false,
			};
		},
		watch:{
			phone(val){
				/* 验证手机号 */
				let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				this.flag = reg.test(val);
			}
		},
		onLoad(options) {
			if(options.code){
				this.code = options.code
			}
		},
		methods:{
			/* 区号选择 */
			areaClick(){
				uni.navigateTo({
					url:`../areaCode/areaCode?code=${this.code}`
				})
			},
			/* 下一步 */
			nextStep(){
				if(this.flag){
					this.$store.commit('set_phone',this.phone);
					this.$store.commit('set_ctcode',this.code)
					uni.navigateTo({
						url:`../nextStep/nextStep`
					})
				}else{
					this.$u.toast('请输入正确的11位手机号');
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		padding: 0 40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.title {
			font-size: 32rpx;
			margin-top: 80rpx;
			text-align: center;
		}

		.input {
			background-color: #eae6e6;
			display: flex;
			margin-top: 40rpx;
			height: 72rpx;
			line-height: 72rpx;
			border-radius: 8rpx;
			font-size: 32rpx;
			min-width: 484rpx;
			.areaCode{
				display: flex;
				padding: 0 20rpx;
				.area{
					padding-right: 10rpx;
				}
				.arrowIcon{
					font-size: 24rpx;
					color: #333333;
					margin-top: 2rpx;
				}
			}
		}
		.auth_button{
			margin-top: 40rpx;
			font-size: 32rpx;
			min-width: 484rpx;
			height: 72rpx;
			line-height: 72rpx;
			text-align: center;
			border-radius: 8rpx;
			color: #fff;
		}
		.next_button{
			margin-top: 40rpx;
			font-size: 32rpx;
			min-width: 484rpx;
			height: 72rpx;
			line-height: 72rpx;
			text-align: center;
			border-radius: 8rpx;
			color: #fff;
			background-color: red;
		}
		.inactive{
			background-color: #a1deb5;
		}
		.active{
			background-color: #23c566;
		}
		uni-input{
			height: 72rpx;
			line-height: 72rpx;
		}
	}
</style>

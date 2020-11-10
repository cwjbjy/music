<template>
	<view class="nextStep">
		<view class="input">
			<input v-model="password" placeholder="请输入密码" focus />
			<view style="color:#007AFF" @click="forgetPass">忘记密码?</view>
		</view>
		<view class="lg_button" @click="login">登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password: "",
			};
		},
		computed:{
			phone(){
				return this.$store.state.phone
			},
			ctcode(){
				return this.$store.state.ctcode
			}
		},
		onLoad() {
			
		},
		methods:{
			forgetPass(){
				uni.navigateTo({
					url:`../forgetPass/forgetPass`
				})
			},
			login(){
				uni.showLoading({
				    title: '加载中'
				});
				this.$API({
					url:`/login/cellphone?phone=${this.phone}&password=${this.password}&countrycode=${this.ctcode}`,
					methods:'POST'
				}).then(res=>{
					if(res.data.code == 200){ 
						uni.setStorage({
							key:'userId',
							data:res.data.account.id
						});
						uni.setStorage({
							key:'cookie',
							data:res.data.cookie
						})
						uni.switchTab({
							url:`../userSet/userSet`
						})
					}else{
						this.$u.toast(`${res.data.message}`);
					}
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nextStep {
		padding: 0 40rpx;
	}

	.input {
		margin-top: 80rpx;
		display: flex;
		border-bottom: 1px solid #ccc;
		justify-content: space-between;
	}

	uni-input {
		flex: 1;
	}

	.lg_button {
		background-color: red;
		font-size: 32rpx;
		height: 72rpx;
		line-height: 72rpx;
		text-align: center;
		border-radius: 36rpx;
		color: #fff;
		margin-top: 40rpx;
	}
</style>

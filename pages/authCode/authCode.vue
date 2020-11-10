<template>
	<view class="authCode">
		<view class="title">输入验证码</view>
		<view class="describe">验证码已发送至 +{{ctcode}} {{phone}}</view>
		<u-message-input mode="box" :focus="true" :breathe="true" @finish="finish"></u-message-input>
		<view class="wrap">
			<u-toast ref="uToast"></u-toast>
			<u-verification-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange" start-text="重新获取验证码"
			 end-text="重新获取验证码" keep-running unique-key="page-auth"></u-verification-code>
			<view class="auth_button" @tap="getCode">{{tips}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tips: '',
				seconds: 60,
				nickname: "",
				captcha: "", //验证码
			};
		},
		computed: {
			phone() {
				return this.$store.state.phone
			},
			ctcode() {
				return this.$store.state.ctcode
			},
			newPass() {
				return this.$store.state.newPass
			}
		},
		onLoad() {
			/* 防止用户刷新，丢失phone信息 */
			if(this.phone == ""){
				this.$u.toast('请返回手机号登录页面，重新输入手机号');
			}
		},
		onReady() {
			this.$refs.uCode.start();
		},
		methods: {
			async finish(e) {
				this.captcha = e;
				await this.verifyCaptcha();
				await this.register();
				await this.login()
			},
			/* 检查验证码是否正确 */
			verifyCaptcha(){
				return new Promise((resolve,reject)=>{
					this.$API({
						url: `/captcha/verify?phone=${this.phone}&captcha=${this.captcha}`
					}).then(res => {
						if (res.data.data) {
							resolve();
						}else{
							this.$u.toast(`${res.data.message}`);
							reject()
						}
					})
				})
			},
				/* 检测手机号码是否已注册 */
			// checkPhone() {
			// 	this.$API({
			// 		url: `/cellphone/existence/check?phone=${this.phone}&ctcode=${this.ctcode}`
			// 	}).then(res => {
			// 		if (res.data.exist == 1) {
			// 			/* 手机号已被注册 */
						
			// 		} else {
			// 			/* 初始化昵称 */
						
			// 		}
			// 		this.register()
			// 	})
			// },
			/* 注册或修改密码 */
			register() {
				return new Promise((resolve,reject)=>{
					this.$API({
						url: `/register/cellphone?phone=${this.phone}&password=${this.newPass}&captcha=${this.captcha}`
					}).then(res => {
						resolve()
					})
				})
			},
			/* 登录 */
			login(){
				return new Promise((resolve,reject)=>{
					uni.showLoading({
					    title: '加载中'
					});
					this.$API({
						url:`/login/cellphone?phone=${this.phone}&password=${this.newPass}&countrycode=${this.ctcode}`,
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
								url:'../userSet/userSet'
							})
						}else{
							this.$u.toast(`${res.data.message}`);
						}
						uni.hideLoading();
						resolve()
					})
				})
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					this.$API({
						url: `/captcha/sent?phone=${this.phone}&ctcode=${this.ctcode}`
					}).then(res => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					})
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				this.$u.toast('倒计时结束');
			},
			start() {
				this.$u.toast('倒计时开始');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.authCode {
		padding: 0 40rpx;
		display: flex;
		flex-direction: column;
		text-align: center;

		.title {
			font-size: 50rpx;
			margin-top: 80rpx;

		}

		.describe {
			margin: 20rpx 0;

		}

		.auth_button {
			margin: 40rpx 0;
			font-size: 34rpx;
			color: #89cc89;
			letter-spacing: 2rpx;
		}
	}

	.wrap {
		padding: 24rpx;
	}
</style>

<template>
	<view class="forgetPass">
		<view class="tip">请设置登录密码，8-20位字符，包含字母与数字</view>
		<view class="input">
			<input v-model="newPass" placeholder="请输入新密码" focus />
		</view>
		<view :class="[flag === false ? 'inactive' : 'active' ,'lg_button']" @click="getCaptcha">下一步</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newPass:"",
				flag:false
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
		watch:{
			newPass(val){
				/* 验证密码 */
				let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
				this.flag = reg.test(val);
			}
		},
		methods:{
			/* 获取验证码 */
			getCaptcha(){
				if(this.flag){
					this.$store.commit('set_newPass',this.newPass)
					uni.showLoading({
					    title: '加载中'
					});
					this.$API({
						url:`/captcha/sent?phone=${this.phone}&ctcode=${this.ctcode}`
					}).then(res=>{
						uni.hideLoading();
						uni.navigateTo({
							url:`../authCode/authCode`
						})
					})
				}else{
					this.$u.toast('请输入正确手机号');
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.forgetPass {
		padding: 0 40rpx;
	}
	.tip{
		font-size: 32rpx;
		    margin-top: 40rpx;
		    color: #aaa;
	}
	.input {
		margin-top: 50rpx;
		display: flex;
		border-bottom: 1px solid #ccc;
		justify-content: space-between;
	}

	uni-input {
		flex: 1;
	}

	.lg_button {
		font-size: 32rpx;
		height: 72rpx;
		line-height: 72rpx;
		text-align: center;
		border-radius: 36rpx;
		color: #fff;
		margin-top: 40rpx;
	}
	.inactive{
		background-color:#ecb4b4;
	}
	.active{
		background-color: red;
	}
</style>

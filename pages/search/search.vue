<template>
	<view class="container">
<!-- 		<view class="header">
			<view class="header_center">
				<image src="../../static/images/topbar-it666-search.png"></image>
				<input v-model="value" placeholder="大家都在搜 那个女孩" focus/>
			</view>
			<view class="header_side" @click="goback">取消</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:""
			};
		},
		methods:{
			goback(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	.header {
		display: flex;
		padding: 20rpx 0 10rpx 0;
		background: $uni-theme-color;
		.header_side {
			width: 84rpx;
			height: 84rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color:#FFFFFF;
			image {
				width: 50%;
				height: 50%;
			}
		}

		.header_center {
			flex: 1;
			border-radius: 40rpx;
			background-color:  #fff;
			margin-left: 40rpx;
			display: flex;
			align-items: center;
			input{
				width: 100%;
				height: 100%;
			}
			image{
				width: 42rpx;
				height: 42rpx;
				margin:0 20rpx;
			}
		}
	}
</style>

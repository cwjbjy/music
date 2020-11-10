<template>
	<view>
		<scroll-view class="scroll-Y" scroll-y="true">
			<view v-for="(item,index) in indexList" :key="index">
				<view class="label">{{item.label}}</view>
				<view class="list-cell" v-for="(children,index) in item.countryList" :key="index" :style="{'color': children.code == activeIndex ? '#2ed573' : '#323233'}"
				 @click="handlerClick(children.code)">
					<view class="zh">{{children.zh}}</view>
					<view class="code">+{{children.code}}</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexList: [],
				activeIndex: '86'
			}
		},
		onLoad(options) {
			if(options.code){
				this.activeIndex = options.code
			}
			this.$API({
				url: '/countries/code/list'
			}).then(res => {
				this.indexList = res.data.data
			});
		},
		methods:{
			handlerClick(value){
				uni.redirectTo({
					url:`../login/login?code=${value}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-Y {
		position: relative;
	}

	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
		justify-content: space-between;
	}

	.label {
		box-sizing: border-box;
		padding: 7px 12px;
		width: 100%;
		font-weight: 500;
		font-size: 14px;
		line-height: 1.2;
		background-color: whitesmoke;
	}

	.sideBar {
		position: fixed;
		top: 50%;
		right: 0;
		display: flex;
		flex-direction: row;
		flex-direction: column;
		text-align: center;
		transform: translateY(-50%);
		user-select: none;
		z-index: 99;
	}
</style>

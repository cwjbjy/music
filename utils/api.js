// const baseURL = 'https://uni-api.cwjbjy.online';
const baseURL = 'http://localhost:3000'
const myRequest = (options) =>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:`${baseURL}${options.url}`,
			method:options.method || 'GET',
			data:options.data || {},
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					icon:'none',
					title:'网络出现异常'
				})
				console.log('1',err)
			}
		})
	})
}

export {myRequest}
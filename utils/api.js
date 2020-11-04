const baseURL = 'https://uni-api.cwjbjy.online'
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
					title:'网络出现异常'
				})
				console.log(err)
			}
		})
	})
}

export {myRequest}
export default {
	disposeLyric(value) {
		let lyrics = value.split("\n")
		/* 定义正则表达式提取[00:00.000] */
		let reg1 = /\[\d*:\d*\.\d*]/g;
		/* 定义正则表达式提取 [00 */
		let reg2 = /\[\d*]/i;
		/* 提取 :00 */
		let reg3 = /\:\d*/i;
		let lyricObj = {};
		lyrics.map(item => {
			/* 提取时间 */
			let timeStr = item.match(reg1);
			console.log('timeStr',timeStr)
			if (!timeStr) {
				return
			};
			timeStr.map((item,index)=>{
				if(index == 0){
					timeStr = item;
				}
			})
			/* 提取分钟 */
			let min = timeStr.match(reg2);
			min.map((item,index)=>{
				if(index == 0){
					min = item.substr(1)
				}
			})
			/* 提取秒 */
			let second = timeStr.match(reg3);
			second.map((item,index)=>{
				if(index == 0){
					second = item.substr(1)
				}
			})
			/* 合并时间，并转为秒 */
			let time = parseInt(min) * 60 + parseInt(second);
			/* 处理歌词 */
			let text = item.replace(reg1, "").trim();
			lyricObj[time] = text;
		})
		return lyricObj;
	}
}

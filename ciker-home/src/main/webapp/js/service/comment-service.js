/**
 * 评论
 */
var comment = {
	// 评论列表
	commentList : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/comment/queryByPage.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});

	},	
	//提交评论
	submit : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/comment/add.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	}
	
}
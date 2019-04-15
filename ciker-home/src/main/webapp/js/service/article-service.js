/**
 * 文章
 */
var article = {
	//文章列表
	articleList : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/queryByPage.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});

	}
}
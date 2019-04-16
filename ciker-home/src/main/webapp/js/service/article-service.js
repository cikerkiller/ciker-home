/**
 * 文章
 */
var article = {
	//文章列表
	articleList : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/article/queryByPage.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});

	},

	articleDetails : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/article/query.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	queryHotRank   : function(resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/article/queryHotRank.do'),
			method : 'GET',
			success : resolve,
			error :reject
		});
	},
	queryRecommendArticle   : function(resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/article/queryRecommendArticle.do'),
			method : 'GET',
			success : resolve,
			error :reject
		});
	}

}
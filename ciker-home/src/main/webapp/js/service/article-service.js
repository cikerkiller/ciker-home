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
	},
	queryArticleList   : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/article/queryByPage.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	saveArticle   : function(param,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/article/save.do'),
			method : 'POST',
			cache	: false,
			data    : JSON.stringify(param),
			dataType:"json",
            processData: false,
            contentType:"application/json",
			success : resolve,
			error :reject
		});
	}

}
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
	queryDetailsArticleList   : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/article/queryDetailsArticleByPage.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	batchRemove   : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/article/batchRemove.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	recommendArticle   : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/article/recommendArticle.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	changeArticleStatus   : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/article/changeArticleStatus.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	selectArticleDetailsById   : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/article/selectArticleDetailsById.do'),
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
	},
	selectArticleByName   : function(param,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/article/selectArticleByName.do'),
			method : 'POST',
			data    : param,
			success : resolve,
			error :reject
		});
	},
	searchArticleByName   : function(param,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/article/searchArticleByName.do'),
			method : 'POST',
			data    : param,
			success : resolve,
			error :reject
		});
	},
	updateViewCount   : function(param,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/article/updateViewCount.do'),
			method : 'POST',
			data    : param,
			async 	: false,
			cache	: false,
			success : resolve,
			error :reject
		});
	},
	updateLikeNumber   : function(param,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/article/updateLikeNumber.do'),
			method : 'POST',
			data    : param,
			async 	: false,
			cache	: false,
			success : resolve,
			error :reject
		});
	},
	selectArticleByClassifyId   : function(param,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/article/selectArticleByClassifyId.do'),
			method : 'POST',
			async 	: false,
			cache	: false,
			data    : param,
			success : resolve,
			error :reject
		});
	}

}
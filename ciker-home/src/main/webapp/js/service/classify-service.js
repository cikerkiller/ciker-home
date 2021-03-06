/**
 * 分类
 */
var classifyService = {
	queryClassifyList : function(param,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/classify/queryClassifyList.do'),
			method : 'GET',
			cache	: param.cache || false,
			async 	: param.async || true,
			success : resolve,
			error :reject
		});

	},
	addClassify : function(param,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/classify/addClassify.do'),
			method : 'POST',
			cache	: param.cache || false,
			async 	: param.async || true,
			data	: param.data,
			success : resolve,
			error :reject
		});
	},
	delClassify : function(param,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/classify/batchDeleteClassify.do'),
			method : 'POST',
			cache	: param.cache || false,
			async 	: param.async || true,
			data	: param.data,
			success : resolve,
			error :reject
		});
	},
	queryClassifys : function(param,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/classify/queryClassifys.do'),
			method : 'POST',
			data	: param,
			success : resolve,
			error :reject
		});
	},
	queryClassify : function(resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/classify/queryClassify.do'),
			method : 'GET',
			success : resolve,
			error :reject
		});
	}
}
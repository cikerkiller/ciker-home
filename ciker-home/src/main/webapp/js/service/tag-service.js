var tagService = {
	//登出
	queryTagCloud : function(resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/tag/queryTagCloud.do'),
			method : 'GET',
			success : resolve,
			error :reject
		});

	}
}
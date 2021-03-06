/**
 * 图片
 */
var imageService = {
	queryImageByReleased : function(resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/image/queryImageByReleased.do'),
			method : 'GET',
			success : resolve,
			error :reject
		});

	},	
	saveImage : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/image/saveImage.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	releaseImage : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/image/releaseImage.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	unReleaseImage : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/image/unReleaseImage.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	batchDeleteImage : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/image/batchDeleteImage.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	queryImages : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/image/queryImages.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	}
	
}
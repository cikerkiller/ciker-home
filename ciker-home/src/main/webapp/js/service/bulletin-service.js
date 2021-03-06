/**
 * 公告
 */
var bulletin = {
	queryBulletin : function(resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/bulletin/queryBulletin.do'),
			method : 'GET',
			success : resolve,
			error :reject
		});

	},	
	addBulletin : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/bulletin/addBulletin.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	queryBulletins : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/bulletin/queryBulletins.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	releaseBulletin : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/bulletin/releaseBulletin.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	deleteBulletin : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/bulletin/deleteBulletin.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	}
	
}
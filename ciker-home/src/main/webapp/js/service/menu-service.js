/**
 * 菜单
 */
var menuService = {
	queryMenus : function(resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/menu/queryMenus.do'),
			method : 'GET',
			cache	: false,
			success : resolve,
			error :reject
		});
	},	
	queryChildReleasedMenus : function(resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/menu/queryChildReleasedMenus.do'),
			method : 'GET',
			success : resolve,
			error :reject
		});
	},	
	addMenu : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/menu/addMenu.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	deleteMenu : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/menu/deleteMenu.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	updateMenu : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/menu/updateMenu.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	selectByMenuId : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/menu/selectByMenuId.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	selectByNotDeletedMenuId : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/menu/selectByNotDeletedMenuId.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	releaseMenu : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/menu/releaseMenu.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	unReleaseMenu : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/menu/unReleaseMenu.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	}
	
	
}
/**
 * 菜单
 */
var menuService = {
	queryMenus : function(resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/menu/queryMenus.do'),
			method : 'GET',
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
	batchDeleteMenu : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/menu/batchDeleteMenu.do'),
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
	batchReleaseMenu : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/menu/batchReleaseMenu.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	},
	batchUnReleaseMenu : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/back/menu/batchUnReleaseMenu.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});
	}
	
	
}
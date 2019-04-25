/**
 * 用户服务
 */
var _user = {
	//登出
	logout : function(resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/user/back/logout.do'),
			method : 'GET',
			success : resolve,
			error :reject
		});

	},
	login : function(param,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/user/back/login.do'),
			method 	: 	'POST',
			data	:	param,
			success : 	resolve,
			error :reject
		});
		
	},
	getUserInfo : function(resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/user/back/get_user_info.do'),
			method : 'POST',
			success : resolve,
			error :reject
		});
	}
}

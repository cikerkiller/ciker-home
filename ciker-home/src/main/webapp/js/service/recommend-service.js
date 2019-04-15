/**
 * 推荐服务
 */
var _user = {
	//登出
	logout : function(resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/user/logout.do'),
			method : 'POST',
			success : resolve,
			error :reject
		});

	},
	//检查登陆状态
	checkLogin : function(resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/user/get_user_info.do'),
			method : 'POST',
			success : resolve,
			error :reject
		});
	}
}

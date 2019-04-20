var conf = {
    serverHost : '/ciker'
};
var ciker = {
	request	: function(param){
		var _this = this;
		$.ajax({
			type 		: param.method 	|| 	'get',
			url			: param.url		||	'',
			dataType	: param.type 	||	'json',
			data 		: param.data 	||	'',
			async 		: param.async 	||	true,
			cache		: param.cache 	||	false,
			success		: function(res){
				if(0 == res.status){
					typeof param.success == 'function' && param.success(res.data);
				}else if(10 == res.status){
					_this.doLogin();
				}else if(1 == res.status){
					typeof param.error == 'function' && param.error(res.msg);
				}
			},
			error		: function(err){
				typeof param.error == 'function' && param.error(err.statusText); 
			}
		});
	},
	// 获取服务器地址
	getServerUrl : function(path){
		return conf.serverHost + path;
	},
	//从url中获取参数
	getUrlParam : function(name){
		var reg		= new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		var result = window.location.search.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : null;
	},
	//渲染html页面
	renderHtml : function(htmlTemplate,data){
		var template = Hogan.compile(htmlTemplate);
		result=template.render(data);
		return result;
	},
	successTips : function(msg){
		alert(msg || '操作成功');
	},
	errorTips : function(msg){
		alert(msg || '操作失败');
	},
	validate : function(value,type){
		var value = $.trim(value);
		//非空验证
		if('require' ===type){
			return !!value;
		}
		//手机号验证
		if('phone' === type){
			return /^[1][3,4,5,7,8][0-9]{9}$/.test(value);
		}
		//邮箱验证
		if('email' ===type){
			return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
		}

	},
	doLogin	: function(){
		window.location.href = './login.jsp?redirect=' + encodeURIComponent(window.location.href);
	},
	//回到首页
	goHome : function(){
		window.location.href = './index.jsp';
	}
};

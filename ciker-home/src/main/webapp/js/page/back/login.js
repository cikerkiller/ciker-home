
var backLogin = {
    init: function(){
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;
        $(document).off('click','#login-submit');
        $(document).on('click','#login-submit',function(){
        	var username = $("#username").val();
        	var password = $("#password").val();
        	
        	if(username == '' || password == '' ){
        		_this.showError($(".error-msg"),"<p class=\"err-tip\">用户名或密码不能为空</p>");
        		return;
        	}
        	
        	_user.login({username:username,password:password},function(res){
        		window.location.href = '../../jsp/back/back-main.jsp';
        	},function(msg){
        		_this.showError($(".error-msg"),"<p class=\"err-tip\">用户名或密码错误</p>");
        	});
        });
        
    },
    showError : function(res,msg){
    	res.html(msg);
    	setTimeout( function(){
    		res.html("");
		},2000);
    }
};
$(function(){
	backLogin.init();
});
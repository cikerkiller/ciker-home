
var indexService = {
    init: function(){
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;
        $(document).on('click', '.login-protal', function(){
        	window.location.href="login.jsp";
        });
        $(document).on('click', '.login-back', function(){
        	window.location.href="jsp/back/login.jsp";
        });
    }
    
};
$(function(){
	indexService.init();
});
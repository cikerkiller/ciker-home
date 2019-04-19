
var bulletinShow = {
    pageHtml : {},
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;
        // 去掉公告
        $(document).on('click', '.bulletin-remove', function(){
        	$(".toptip").css('display','none'); 
        	$(".main").css('marginTop','60px'); 
        	$(".article-content-body").css('marginTop','60px'); 
        });
    },
    onLoad : function(){
    	this.onLoadHtml();
    	this.loadBulletin();
    },
    onLoadHtml:function(){
    	this.pageHtml.bulletinHtml	 	 = 	$(".bulletin").html();
    },
    // 加载公告
    loadBulletin: function(){
    	var _this           = this,
    	bulletinHtml   	= '',
    	$listCon        	= $('.bulletin');
    	bulletin.queryBulletin(function(res){
    		// 渲染html
    		bulletinHtml = ciker.renderHtml(_this.pageHtml.bulletinHtml, res);
    		$listCon.html(bulletinHtml);
    	}, function(errMsg){
    		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
    	});
    }
};
$(function(){
	bulletinShow.init();
});
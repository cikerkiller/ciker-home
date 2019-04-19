
var recommend = {
    pageHtml : {},
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;
        $(document).on('click', '.recommend-article', function(){
	       	var data = $(this).data('value');
        	sessionStorage.setItem("articleId", data);
        	$(".content-container").load("jsp/articleDetails.jsp");
        });
    },
    onLoad : function(){
    	this.onLoadHtml();
    	 this.loadRecommendArticle();
    },
    onLoadHtml:function(){
    	this.pageHtml.recommend	 		 = 	$(".recommend").html();
    },
    // 加载推荐文章
    loadRecommendArticle: function(){
    	var _this           = this,
    	recommendHtml   	= '',
    	$listCon        	= $('.recommend');
    	article.queryRecommendArticle(function(res){
    		// 渲染html
    		recommendHtml = ciker.renderHtml(_this.pageHtml.recommend, res);
    		$listCon.html(recommendHtml);
    	}, function(errMsg){
    		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
    	});
    }
};
$(function(){
	recommend.init();
});
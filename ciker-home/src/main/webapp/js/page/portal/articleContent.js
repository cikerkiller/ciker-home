
var articleContent = {
    pageHtml : {},
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    bindEvent : function(){
    },
    onLoad : function(){
    	this.onLoadHtml();
    	this.loadArticle();
    },
    onLoadHtml:function(){
    	this.pageHtml.articleContentHtml				 = 	$('.article-content-body').html();
    },
    showError : function(res,msg){
    	res.html(msg);
    	setTimeout( function(){
    		res.html("");
		},5000);
    },
    loadArticle : function(){
    	var _this           = this,
    	articleContentHtml   	= '',
        $listCon        	= $('.article-content-body');
       	var data = sessionStorage.getItem("articleId");
       	article.articleDetails({articleId : data},function(res){
       		articleContentHtml = ciker.renderHtml(_this.pageHtml.articleContentHtml, res);
       		$listCon.html(articleContentHtml);
       	},function(errMsg){
       		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
       	});
    }
};
$(function(){
	articleContent.init();
});
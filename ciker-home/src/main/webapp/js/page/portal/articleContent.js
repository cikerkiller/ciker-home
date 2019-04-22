
var articleContent = {
    pageHtml : {},
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    bindEvent : function(){
    	$(document).off('click','.article-auth-like');
    	$(document).on('click','.article-auth-like',function(){
    		var articleId = $("#articleId").val();
    		article.updateLikeNumber({articleId:articleId},function(res){
    			$(".article-auth-like>.count").html(res);
    		},function(msg){
    			$(".article-auth-like>.count").html('<p class="err-tip">加载失败，请刷新后重试</p>');
    		});
    	});
    	$(document).on('click','.article-auth-comment',function(){
    		localStorage.setItem("articleId", $("#articleId").val());
    		 window.location.hash='#commentContent';
    	});
    	
    },
    onLoad : function(){
    	this.onLoadHtml();
    	this.updateViewCount();
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
    updateLike:function(){
    	
    },
    updateViewCount : function(){
    	var data = localStorage.getItem("articleId");
    	article.updateViewCount({articleId:data},function(res){},function(msg){});
    },
    loadArticle : function(){
    	var _this           = this,
    	articleContentHtml   	= '',
        $listCon        	= $('.article-content-body');
       	var data = localStorage.getItem("articleId");
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
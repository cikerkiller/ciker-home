
var hotRank = {
    pageHtml : {},
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;
     // 热门文章详情
        $(document).on('click', '.hot-rank-a', function(){
	       	var data = $(this).data('value');
        	sessionStorage.setItem("articleId", data);
        	$(".content-container").load("../jsp/articleDetails.jsp");
        });
    },
    onLoad : function(){
    	this.onLoadHtml();
    	this.loadHotArticle();
    },
    onLoadHtml:function(){
    	this.pageHtml.hotArticleHtml	 = 	$(".hot-article").html();
    },
 // 加载热门文章
    loadHotArticle: function(){
    	var _this           = this,
    	hotArticle   	= '',
    	$listCon        	= $('.hot-article');
    	article.queryHotRank(function(res){
    		// 渲染html
    		hotArticle = ciker.renderHtml(_this.pageHtml.hotArticleHtml, res);
    		$listCon.html(hotArticle);
    		$(".rank").each(function(){
    			var rank = $(this).data('value');
    			if(rank == 1){
    				$(this).addClass("first");
    			}else if(rank == 2){
    				$(this).addClass("second");
    			}else if(rank == 3){
    				$(this).addClass("third");
    			}
    		});
    	}, function(errMsg){
    		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
    	});
    }
};
$(function(){
	hotRank.init();
});
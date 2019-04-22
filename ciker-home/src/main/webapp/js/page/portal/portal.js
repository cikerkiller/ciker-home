
var portal = {
	data: {
        listParam : {
            pageNum     : 1,
            pageSize    : 5
        }
    },
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    bindEvent : function(){
    	var _this = this;
    	$(document).on('click', '.portal-home',function(){
    		window.location.href = '../jsp/portal.jsp';
    	});
    	
    	$(document).off('click', '.technique-nav-a');
        $(document).on('click', '.technique-nav-a', function(){
        	var classifyId = $(this).parent().data('value');
        	_this.searchArticleByClassifyId(classifyId);
        });
        $(document).off('click', '.article-search');
        $(document).on('click', '.article-search', function(){
        	var articleName = $(this).prev().children('input').val();
        	_this.searchArticle(articleName);
        });
    },
    searchArticle : function(articleName){
    	var _this = this,
    	$listCon        	= $('.articleDetail');
    	portal.data.listParam.articleName = articleName;
    	if(articleName==null || articleName == '' || articleName==undefined){
    		portal.init();
    	}else{
    		article.selectArticleByName(portal.data.listParam,function(res){
    			// 渲染html
            	var artileListHtml = ciker.renderHtml(articleList.pageHtml.artileListHtml, res);
            	$(".content-container").html(artileListHtml);
            	$('.toptip-container').hide();
            	$(".content-container").css('margin-top','60px');
            	portal.data.listParam.pageNum = 1;
                portal.loadPagination({
                    hasPreviousPage : res.hasPreviousPage,
                    prePage         : res.prePage,
                    hasNextPage     : res.hasNextPage,
                    nextPage        : res.nextPage,
                    pageNum         : res.pageNum,
                    pages           : res.pages
                },{
                	container : $('.article-pagination'),
                    onSelectPage : function(pageNum){
                    	portal.data.listParam.pageNum = pageNum;
                        portal.searchArticle(articleName);
                    }
                });
    		},function(msg){
    			$(".content-container").html('<p class="err-tip">加载失败，请刷新后重试</p>');
    		});
    	}
    },
    searchArticleByClassifyId : function(classifyId){
    	var _this = this;
    	portal.data.listParam.classifyId=classifyId;
    	article.selectArticleByClassifyId(portal.data.listParam,function(res){
    		// 渲染html
        	var artileListHtml = ciker.renderHtml(articleList.pageHtml.artileListHtml, res);
        	$(".content-container").html(artileListHtml);
        	$('.toptip-container').hide();
        	$(".content-container").css('margin-top','60px');
        	portal.data.listParam.pageNum = 1;
            portal.loadPagination({
                hasPreviousPage : res.hasPreviousPage,
                prePage         : res.prePage,
                hasNextPage     : res.hasNextPage,
                nextPage        : res.nextPage,
                pageNum         : res.pageNum,
                pages           : res.pages
            },{
            	container : $('.article-pagination'),
                onSelectPage : function(pageNum){
                	portal.data.listParam.pageNum = pageNum;
                    portal.searchArticleByClassifyId(classifyId);
                }
            });
    		
    	},function(errMsg){
    		$(".content-container").html('<p class="err-tip">加载失败，请刷新后重试</p>');
    	});
    },
    
    loadTechniqueNav : function(){
    	var techniqueNavHtml = $(".technique-nav").html();
    	var $listCon = $(".technique-nav");
    	classifyService.queryClassify(function(res){
    		// 渲染html
    		techniqueNavHtml = ciker.renderHtml(techniqueNavHtml, res);
    		$listCon.html(techniqueNavHtml);
    	},function(errMsg){
    		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
    	});
    },
    onLoad : function(){
    	this.loadTechniqueNav();
    	$(".photo-show").load("../jsp/photoShow.jsp");
    	$(".toptip").load("../jsp/bulletin.jsp");
    	$(".hot-rank").load("../jsp/hotRank.jsp");
    	$(".article-list").load("../jsp/articleList.jsp");
    	$(".tag-cloud").load("../jsp/tagCloud.jsp");
    	$(".guess").load("../jsp/recommend.jsp");
    	
    },
    // 加载分页信息
    loadPagination : function(pageInfo,loadInfo){
    	var _this = this;
    	this.pagination = new Pagination();
    	this.pagination.render($.extend({}, pageInfo, loadInfo));
    }
};
$(function(){
	portal.init();
});
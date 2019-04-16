
var portal = {
	data: {
        listParam : {
            pageNum     : 1,
            pageSize    : 5
        }
    },
    pageHtml : {},
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;
       var  articleContent=$("#article-content").html();
        // 文章详情
        $(document).on('click', '.articile-details', function(){
            var $this = $(this),
            articleContentHtml = '';
            var data = $this.data('value');
            article.articleDetails({articleId : data},function(res){
            	$("#main-content").hide();
            	$("#article-content").show();
            	articleContentHtml = ciker.renderHtml(articleContent, res);
            	$("#article-content").html(articleContentHtml);
            	 _this.loadCommentList();
            },function(errMsg){
            	
            });
        });
        $(document).on('click', '.comment-sub', function(){
            var commentContent = $("#commentContent").val();
            var articleId = $("#articleId").val();
            var commentVO = {
            		commentContent : commentContent,
            		articleId : articleId	
            }
            comment.submit(commentVO,function(res){
            	$("#commentContent").val("");
            	// 重新加载评论列表
            	_this.loadCommentList();	
            },function(errMsg){
            	
            });
        });

       
    },
    onLoad : function(){
        this.loadArtileList();
        this.onLoadHtml();
    },
    onLoadHtml:function(){
    	this.pageHtml.ins				 = $('.articile-list').html(),
    	this.pageHtml.commentHtml			  = $(".comment-container").html(),
    	this.pageHtml.articlepaginationHtml = $(".article-pagination").html(),
    	this.pageHtml.commentpaginationHtml = $(".comment-pagination").html();

    },
    loadArtileList: function(){
        	var _this           = this,
        	artileListHtml   	= '',
            $listCon        	= $('.articile-list');
        article.articleList(this.data.listParam, function(res){
        	// 渲染html
        	artileListHtml = ciker.renderHtml(_this.pageHtml.ins, res);
            $listCon.html(artileListHtml);
            _this.data.listParam.pageNum = 1;
            _this.loadPagination({
                hasPreviousPage : res.hasPreviousPage,
                prePage         : res.prePage,
                hasNextPage     : res.hasNextPage,
                nextPage        : res.nextPage,
                pageNum         : res.pageNum,
                pages           : res.pages
            },{
            	container : $('.article-pagination'),
                onSelectPage : function(pageNum){
                    _this.data.listParam.pageNum = pageNum;
                    _this.loadArtileList();
                }
            });
        }, function(errMsg){
            $listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
        });
    },
    loadCommentList: function(){
    	var _this           = this,
    	commentListHtml   	= '',
    	$listCon        	= $('.comment-container');
    	var param = this.data.listParam;
    	param.articleId = $("#articleId").val();
    	comment.commentList(param, function(res){
    		// 渲染html
    		commentListHtml = ciker.renderHtml(_this.pageHtml.commentHtml, res);
    		$listCon.html(commentListHtml);
    		_this.loadPagination({
    			hasPreviousPage : res.hasPreviousPage,
    			prePage         : res.prePage,
    			hasNextPage     : res.hasNextPage,
    			nextPage        : res.nextPage,
    			pageNum         : res.pageNum,
    			pages           : res.pages
    		},{
    			container : $('.comment-pagination'),
                onSelectPage : function(pageNum){
                    _this.data.listParam.pageNum = pageNum;
                    _this.loadCommentList();
                }
    		});
    	}, function(errMsg){
    		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
    	});
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
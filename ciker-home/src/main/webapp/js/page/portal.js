
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
        var loadArticle = function(){
	       	var $this = $(this),
	       	articleContentHtml = '';
	       	var data = $this.data('value');
	       	var articleContent = $("#article-content").html();
	       	article.articleDetails({articleId : data},function(res){
	       		$(".main").hide();
	       		$("#article-content").show();
	       		articleContentHtml = ciker.renderHtml(articleContent, res);
	       		$("#article-content").html(articleContentHtml);
	       		_this.loadCommentList();
	       	},function(errMsg){
	       		
	       	});
        }
        // 去掉公告
        $(document).on('click', '.bulletin-remove', function(){
        	$(".toptip").css('display','none'); 
        	$(".main").css('marginTop','60px'); 
        	$("#article-content").css('marginTop','60px'); 
        });
        // 热门文章详情
        $(document).on('click', '.hot-rank', loadArticle);
        // 推荐文章详情
        $(document).on('click', '.recommend-article', loadArticle);
        // 文章详情
        $(document).on('click', '.articile-details', loadArticle);
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
    	this.onLoadHtml();
    	this.loadBulletin();
    	this.loadHotArticle();
        this.loadArtileList();
        this.loadRecommendArticle();
        this.loadImages();
    },
    onLoadHtml:function(){
    	this.pageHtml.ins				 = 	$('.articile-list').html(),
    	this.pageHtml.commentHtml		 = 	$(".comment-container").html();
    	this.pageHtml.hotArticleHtml	 = 	$(".hot-article").html();
    	this.pageHtml.recommend	 		 = 	$(".recommend").html();
    	this.pageHtml.bulletinHtml	 	 = 	$(".bulletin").html();
    	this.pageHtml.imageHtml	 		 = 	$("#myCarousel").html();
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
    },
    // 加载首页图片
    loadImages: function(){
    	var _this           = this,
    	imageHtml   	= '',
    	$listCon        	= $('#myCarousel');
    	imageService.queryImageByReleased(function(res){
    		var list = res.list;
    		imageHtml = ciker.renderHtml(_this.pageHtml.imageHtml, res);
    		$listCon.html(imageHtml);
    		for(var i=0;i<list.length;i++){
    			$(".carousel-inner").append(
    					"<div class=\"item image-content\">"+
    			"<img src=\""+list[i].imageContent+"\" alt=\"First slide\">"+
    			"<div class=\"carousel-caption\">"+list[i].imageTitle+"</div></div>"
    			);
    		}
    		$(".image-no").first().addClass("active");
    		$(".image-content").first().addClass("active");
    	}, function(errMsg){
    		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
    	});
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
    },
    // 加载文章列表
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
    // 加载评论列表
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
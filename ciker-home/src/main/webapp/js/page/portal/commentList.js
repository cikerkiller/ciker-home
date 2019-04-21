
var commentList = {
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
    	 $(document).on('click', '.comment-sub', function(){
             var commentContent = $("#commentContent").val();
             var articleId = $("#articleId").val();
             var commentVO = {
             		commentContent : commentContent,
             		articleId : articleId	
             }
             comment.submit(commentVO,function(res){
             	$("#commentContent").val("");
             	articleContent.loadArticle();
             	// 重新加载评论列表
             	_this.loadCommentList();	
             },function(errMsg){
             	
             });
         });
    },
    onLoad : function(){
    	this.onLoadHtml();
    	this.loadCommentList();
    },
    onLoadHtml:function(){
    	this.pageHtml.commentHtml		 = 	$(".comment-container").html();
    },
    showError : function(res,msg){
    	res.html(msg);
    	setTimeout( function(){
    		res.html("");
		},5000);
    },
    // 加载评论列表
    loadCommentList: function(){
    	var _this           = this,
    	commentListHtml   	= '',
    	$listCon        	= $('.comment-container');
    	var param = _this.data.listParam;
    	param.articleId = sessionStorage.getItem("articleId");
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
	commentList.init();
});
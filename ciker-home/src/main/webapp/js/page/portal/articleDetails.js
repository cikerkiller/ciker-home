var articleDatailsService = {
	pageHtml : {},
	data: {
        listParam : {
            pageNum     : 1,
            pageSize    : 5
        }
    },
	init : function() {
		articleDatailsService.data.articleId = 	localStorage.getItem("articleId");
		this.onLoad();
		this.bindEvent();
	},
	bindEvent : function() {
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
             	_this.loadArticle();
             	// 重新加载评论列表
             	_this.loadCommentList();	
             },function(errMsg){
             	
             });
         });

	},
	onLoad : function() {
		this.onLoadHtml();
		this.updateViewCount();
		this.loadArticle();
		this.loadCommentList();
	},
	onLoadHtml : function() {
		this.pageHtml.articleContentHtml = $('.article-content-body').html();
		this.pageHtml.commentHtml = $(".comment-container").html();
	},
	showError : function(res, msg) {
		res.html(msg);
		setTimeout(function() {
			res.html("");
		}, 5000);
	},
	updateLike : function() {

	},
	updateViewCount : function() {
		var data = articleDatailsService.data.articleId;
		article.updateViewCount({
			articleId : data
		}, function(res) {
		}, function(msg) {
		});
	},
	loadArticle : function() {
		var _this = this, articleContentHtml = '', $listCon = $('.article-content-body');
		var data = articleDatailsService.data.articleId;
		article.articleDetails({
			articleId : data
		}, function(res) {
			articleContentHtml = ciker.renderHtml(
					_this.pageHtml.articleContentHtml, res);
			$listCon.html(articleContentHtml);
		}, function(errMsg) {
			$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
		});
	},
	// 加载评论列表
	loadCommentList : function() {
		var _this = this, commentListHtml = '', $listCon = $('.comment-container');
		var param = _this.data.listParam;
		param.articleId = articleDatailsService.data.articleId;
		comment.commentList(param,
				function(res) {
					// 渲染html
					commentListHtml = ciker.renderHtml(
							_this.pageHtml.commentHtml, res);
					$listCon.html(commentListHtml);
					_this.loadPagination({
						hasPreviousPage : res.hasPreviousPage,
						prePage : res.prePage,
						hasNextPage : res.hasNextPage,
						nextPage : res.nextPage,
						pageNum : res.pageNum,
						pages : res.pages
					}, {
						container : $('.comment-pagination'),
						onSelectPage : function(pageNum) {
							_this.data.listParam.pageNum = pageNum;
							_this.loadCommentList();
						}
					});
				}, function(errMsg) {
					$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
				});
	},
	// 加载分页信息
	loadPagination : function(pageInfo, loadInfo) {
		var _this = this;
		_this.pagination = new Pagination();
		_this.pagination.render($.extend({}, pageInfo, loadInfo));
	}
};
$(function() {
	articleDatailsService.init();
});
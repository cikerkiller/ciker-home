
var articleList = {
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
        
        $(document).on('click', '.articile-details', function(){
	       	var data = $(this).data('value');
        	sessionStorage.setItem("articleId", data);
        	$(".content-container").load("jsp/articleDetails.jsp");
        });

       
    },
    onLoad : function(){
    	this.onLoadHtml();
    	this.loadArtileList();
    },
    onLoadHtml:function(){
    	this.pageHtml.artileListHtml				 = 	$('.articleList').html();
    },
 // 加载文章列表
    loadArtileList: function(){
        	var _this           = this,
        	artileListHtml   	= '',
            $listCon        	= $('.articleList');
        article.articleList(this.data.listParam, function(res){
        	// 渲染html
        	artileListHtml = ciker.renderHtml(_this.pageHtml.artileListHtml, res);
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
 // 加载分页信息
    loadPagination : function(pageInfo,loadInfo){
    	var _this = this;
    	this.pagination = new Pagination();
    	this.pagination.render($.extend({}, pageInfo, loadInfo));
    }
};
$(function(){
	articleList.init();
});
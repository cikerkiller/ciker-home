
var article = {
	//文章列表
	articleList : function(listParam,resolve,reject){
		ciker.request({
			url : ciker.getServerUrl('/it/queryByPage.do'),
			method : 'POST',
			data    : listParam,
			success : resolve,
			error :reject
		});

	}
}
var ins;
var portal = {
	data: {
        listParam : {
            pageNum     : 1,
            pageSize    : 5
        }
    },
    init: function(){
    	ins = $('.articile-list').html();
        this.onLoad();
    },
    onLoad : function(){
        this.loadArtileList();
    },
    loadArtileList: function(){
        	var _this           = this,
        	artileListHtml   	= '',
            $listCon        	= $('.articile-list');
        article.articleList(this.data.listParam, function(res){
        	// 渲染html
        	artileListHtml = ciker.renderHtml(ins, res);
            $listCon.html(artileListHtml);
            _this.loadPagination({
                hasPreviousPage : res.hasPreviousPage,
                prePage         : res.prePage,
                hasNextPage     : res.hasNextPage,
                nextPage        : res.nextPage,
                pageNum         : res.pageNum,
                pages           : res.pages
            });
        }, function(errMsg){
            $listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
        });
    },
    // 加载分页信息
    loadPagination : function(pageInfo){
        var _this = this;
        this.pagination ? '' : (this.pagination = new Pagination());
        this.pagination.render($.extend({}, pageInfo, {
            container : $('.pagination'),
            onSelectPage : function(pageNum){
                _this.data.listParam.pageNum = pageNum;
                _this.loadArtileList();
            }
        }));
    }
};
$(function(){
	portal.init();
});
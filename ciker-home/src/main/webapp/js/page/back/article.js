
var articleManage = {
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
        $('#summernote').summernote({
        	 	height		: 	500,
        	 	minHeight	:	null,
        	 	maxHeight	:	null,
        	 	focus		: 	true
        });
        $(document).on('click', '.self-model-sub', function(){
        	var summernoteHtml = $('#summernote').summernote('code');
        	var param=new Object();
        	param.classifyId=1;
        	param.articleTitle=$(".model-article-title").val();
        	param.content=summernoteHtml;
        	_this.articleOperate({url:"../../it/back/article/save.do",data :param });
        });
       
        
    },
    // 文章操作
    articleOperate : function(param){
    	var _this = this;
    	$.ajax({
            url: param.url,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            data: JSON.stringify(param.data),//必要
            dataType:"json",
            contentType:"application/json",
            success: function (data) {
           	 var messageEntity = JSON.stringify(data);
           	 if(messageEntity.status == 0){
           		 $("#myModal").modal('hide')
           		 ciker.request({url:"article.jsp"});
           	 }else{
           		_this.showError($(".panel-article"),"<p class=\"err-tip\">加载失败，请刷新后重试</p>");
           		 $("#myModal").modal('hide')
           	 }
            }
        });
    },
    onLoad : function(){
    	this.onLoadHtml();
    	this.loadArticleList();
    },
    onLoadHtml:function(){
    	var articleDetailHtml = 	$(".articleDetail").html();
    	// html()无法获取到{{list}}
    	articleDetailHtml+="{{#list}}"+
			"<tr>"+
				"<td>" +
					"<input type=\"checkbox\" class=\"article-check-single\" /> " +
					"<input class=\"article-single article-single-id\" type=\"hidden\" value=\"{{articleId}}\" /></td>"+
				"<td><span class=\"article-single-title\"><a>{{articleTitle}}<a></a></span></td>"+
				"<td><span class=\"article-single-creator\">{{articleTitle}}</span></td>"+
				"<td><span class=\"article-single-creationdate\">{{creationDate}}</span></td>"+
				"<td><span class=\"article-single-lastupdator\">{{articleTitle}}</span></td>"+
				"<td><span class=\"article-single-lastupdatedate\">{{lastUpdateDate}}</span></td>"+
				"<td><span class=\"article-single-viewingcount\">{{articleTitle}}</span></td>"+
				"<td>" +
				"<button type=\"button\" class=\"article-single-status\" value=\"\">有效</button></td>"+
				"<td><button type=\"button\" class=\"article-single-recommend\" value=\"\">推荐</button></td>"+
			"</tr>"+
			"{{/list}}";
    	this.pageHtml.articleDetailHtml	 	 = articleDetailHtml;
    },
    loadArticleList: function(){
    	var _this           = this,
    	articleDetailHtml   	= '',
    	$listCon        	= $('.articleDetail');
    	article.queryArticleList(_this.data.listParam,function(res){
    		// 渲染html
    		articleDetailHtml = ciker.renderHtml(_this.pageHtml.articleDetailHtml, res);
    		$listCon.html(articleDetailHtml);
    		 _this.data.listParam.pageNum = 1;
    		_this.loadPagination({
                hasPreviousPage : res.hasPreviousPage,
                prePage         : res.prePage,
                hasNextPage     : res.hasNextPage,
                nextPage        : res.nextPage,
                pageNum         : res.pageNum,
                pages           : res.pages
            },{
            	container : $('.articlelist-pagination'),
                onSelectPage : function(pageNum){
                	 _this.data.listParam.pageNum = pageNum;
                    _this.loadArticleList();
                }
            });
    	}, function(errMsg){
    		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
    	});
    },
    showError : function(res,msg){
    	res.html(msg);
    	setTimeout( function(){
    		res.html("");
		},5000);
    },
    // 加载分页信息
    loadPagination : function(pageInfo,loadInfo){
    	var _this = this;
    	this.pagination = new Pagination();
    	this.pagination.render($.extend({}, pageInfo, loadInfo));
    }
};
$(function(){
	articleManage.init();
});
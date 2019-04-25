
var articleManage = {
	data: {
        listParam : {
            pageNum     : 1,
            pageSize    : 5
        },
        recommendParam : {
        	recommend : 1,
        	unRecommend : 0
        },
        articleStatusParam:{
        	effective : 1,
        	deprecated : 0
        },
        articleOpCode : {
        	add 	: 0,
        	update 	: 1
        },
        articleOp : {
        	operate : 0
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
        // 文档提交
        $(document).off('click', '.self-model-sub');
        $(document).on('click', '.self-model-sub', function(){
        	var summernoteHtml = $('#summernote').summernote('code');
        	var param=new Object();
        	param.classifyId=$(".model-article-classify-id").val();
        	param.articleTitle=$(".model-article-title").val();
        	param.content=summernoteHtml;
        	if(_this.data.articleOp.operate == _this.data.articleOpCode.update){
        		param.articleId = $(".model-article-id").val();
        		_this.articleOperate({url:"../../it/back/article/updateArticle.do",data :param });
        	}else if(_this.data.articleOp.operate == _this.data.articleOpCode.add){
        		_this.articleOperate({url:"../../it/back/article/save.do",data :param });
        	}
        });
        $(document).on('change', '.classify-select .self-select', function(){
        	var classifyId = $(this).val();
        	$(".model-article-classify-id").val(classifyId);
        	if(classifyId == 0){
        		$(".classify-select-two").hide();
        		$(".classify-select-three").hide();
        		return ;
        	}
        	_this.changeSelectHtml("二级分类");
        	_this.queryClassifys($(".classify-select-two"),classifyId);
        });
        $(document).on('change', '.classify-select-two .self-select', function(){
        	var classifyId = $(this).val();
        	$(".model-article-classify-id").val(classifyId);
        	if(classifyId == 0){
        		$(".classify-select-three").hide();
        		return ;
        	}
        	_this.changeSelectHtml("三级分类");
        	_this.queryClassifys($(".classify-select-three"),classifyId);
        });
        $(document).off('click', '.add-editor');
        $(document).on('click', '.add-editor', function(){
        	// 初始化
        	$(".model-article-id").val("");
        	$(".model-article-title").val("");
        	$('#summernote').summernote('code','');
        	$(".modal-title").html("新增文档");
    		_this.data.articleOp.operate = _this.data.articleOpCode.add;
    		$("#myModal").modal('show');
    		_this.queryClassifys( $(".classify-select"),0);
        });
        $(document).off('click', '.article-single-recommend-btn');
        $(document).on('click', '.article-single-recommend-btn', function(){
        	var recommend = $(this).data('value');
        	if(recommend == _this.data.recommendParam.recommend){
        		recommend = _this.data.recommendParam.unRecommend;
        	}else{
        		recommend = _this.data.recommendParam.recommend;
        	}        	
        	var articleId = $(this).parent().parent().find('input.article-single-id').val();
        	article.recommendArticle({articleId : articleId,recommend:recommend},function(res){
        		_this.loadArticleList();
				_this.showMsg($(".error-msg"),"<p class=\"err-tip\">"+res+"</p>",1000);
        	},function(msg){
        		_this.showMsg($(".error-msg"),"<p class=\"err-tip\">"+msg+"</p>",3000);
        	});
        });
        $(document).on('click', '.article-single-status', function(){
        	var status = $(this).data('value');
        	if(status == _this.data.articleStatusParam.effective){
        		status = _this.data.articleStatusParam.deprecated;
        	}else{
        		status = _this.data.articleStatusParam.effective;
        	}        	
        	var articleId = $(this).parent().parent().find('input.article-single-id').val();
        	article.changeArticleStatus({articleId : articleId,articleStatus:status},function(res){
        		_this.loadArticleList();
        		_this.showMsg($(".error-msg"),"<p class=\"err-tip\">"+res+"</p>",1000);
        	},function(msg){
        		_this.showMsg($(".error-msg"),"<p class=\"err-tip\">"+msg+"</p>",3000);
        	});
        });
        $(document).on('click', '.article-single-title', function(){
        	var articleId = $(this).parent().parent().find('input.article-single-id').val();
        	
        	article.selectArticleDetailsById({articleId : articleId},function(res){
        		var summernoteHtml = res.content;
        		$('#summernote').summernote('code',summernoteHtml);
        		$(".model-article-title").val(res.articleTitle);
        		$(".model-article-id").val(res.articleId);
        		$(".modal-title").html("修改文档");
        		_this.data.articleOp.operate = _this.data.articleOpCode.update; 
        		$("#myModal").modal('show');
        	},function(msg){
        		_this.showMsg($(".error-msg"),"<p class=\"err-tip\">"+msg+"</p>",3000);
        	});
        });
        // 全选
        $(document).on('change', '.article-check-all', function(){
        	if($(this).prop("checked")){
        		// 全选
        		$(".article-check-single").prop("checked",true);
        	}else{
        		// 全不选
        		$(".article-check-single").prop("checked",false);
        	}
        });
        $(document).on('click', '.article-search', _this.searchArticle);
        // 删除事件绑定
        $(document).off('click', '.btn-del');
        $(document).on('click', '.btn-del', function(){
        	var array=[];
    		$(".article-check-single:checked").each(function(i){
    			array[i] = $(this).next().val();
    		});
    		if(array.length != 0){
    			if(confirm("确定删除？")){
    				article.batchRemove({"articleIds":array},function(res){
    					_this.loadArticleList();
    					_this.showMsg($(".error-msg"),"<p class=\"err-tip\">"+res+"</p>",1000);
    					
    				},function(msg){
    					_this.showMsg($(".error-msg"),"<p class=\"err-tip\">加载失败，请刷新后重试</p>",3000);
    				});
    			}
    		}else{
    			_this.showMsg($(".error-msg"),"<p class=\"err-tip\">请选择一个文档</p>",1000);
    		}
        });
       
        
    },
    searchArticle : function(){
    	var _this = this,
    	articleName = $(".article-name").val(),
    	$listCon        	= $('.articleDetail');
    	articleManage.data.listParam.articleName = articleName;
    	if(articleName==null || articleName == '' || articleName==undefined){
    		articleManage.loadArticleList();
    	}else{
    		article.selectArticleByName(articleManage.data.listParam,function(res){
    			articleManage.articleListCon($listCon,res);
        		var onSelectPage = function(pageNum){
        			articleManage.data.listParam.pageNum = pageNum;
                  	articleManage.searchArticle();
            	}
        		articleManage.pageUtil(res,$('.articlelist-pagination'),onSelectPage)
    		},function(msg){
    			$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
    		});
    	}
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
           	 if(data.status == 0){
           		 $("#myModal").modal('hide')
           		_this.loadArticleList();
           		$(".classify-select-two").hide();
        		$(".classify-select-three").hide();
        		_this.changeSelectHtml("一级分类");
           	 }else{
           		_this.showMsg($(".error-msg"),"<p class=\"err-tip\">加载失败，请刷新后重试</p>",100000);
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
				"<td><span class=\"article-single-title\"><a>{{articleTitle}}</a></span></td>"+
				"<td><span class=\"article-single\">{{classifyName}}</span></td>"+
				"<td><span class=\"article-single-creator\">{{creatior}}</span></td>"+
				"<td><span class=\"article-single-creationdate\">{{creationDate}}</span></td>"+
				"<td><span class=\"article-single-lastupdator\">{{lastUpdator}}</span></td>"+
				"<td><span class=\"article-single-lastupdatedate\">{{lastUpdateDate}}</span></td>"+
				"<td><span class=\"article-single\">{{viewingCount}}</span></td>"+
				"<td><span class=\"article-single\">{{likeNumber}}</span></td>"+
				"<td><span class=\"article-single\">{{commentNumber}}</span></td>"+
				"<td><span class=\"article-single article-single-recommend\" data-value=\"{{recommend}}\"></span></td>"+
				"<td>" +
				"<button type=\"button\" class=\"article-single-status\" data-value=\"{{status}}\"></button></td>"+
			"</tr>"+
			"{{/list}}";
    	this.pageHtml.articleDetailHtml	 	 = articleDetailHtml;
    	this.changeSelectHtml("一级分类");
    },
    changeSelectHtml : function(title){
    	this.pageHtml.classifySelectHtml = "<label>"+title+"</label><select class=\"form-control self-select\"><option value=\"0\">请选择</option>{{#childClassifies}}<option value=\"{{classifyId}}\">{{classifyName}}</option>{{/childClassifies}}</select>"
    },
    loadArticleList: function(){
    	var _this           = this,
    	articleDetailHtml   	= '',
    	$listCon        	= $('.articleDetail');
    	article.queryDetailsArticleList(_this.data.listParam,function(res){
    		_this.articleListCon($listCon,res);
    		var onSelectPage = function(pageNum){
              	 _this.data.listParam.pageNum = pageNum;
                 _this.loadArticleList();
        	}
    		 _this.pageUtil(res,$('.articlelist-pagination'),onSelectPage)
    	}, function(errMsg){
    		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
    	});
    },
    articleListCon : function($listCon,res){
    	var _this = this;
    	// 渲染html
		articleDetailHtml = ciker.renderHtml(_this.pageHtml.articleDetailHtml, res);
		$listCon.html(articleDetailHtml);
		 _this.statusChange();
		 _this.recommendChange();
    },
    pageUtil : function(res,container,onSelectPage){
    	var _this = this;
    	_this.data.listParam.pageNum = 1;
    	container.html("");
    	_this.loadPagination({
            hasPreviousPage : res.hasPreviousPage,
            prePage         : res.prePage,
            hasNextPage     : res.hasNextPage,
            nextPage        : res.nextPage,
            pageNum         : res.pageNum,
            pages           : res.pages
        },{
        	container : container,
            onSelectPage : onSelectPage
        });
    },
    statusChange:function(){
    	$(".article-single-status").each(function(){
    		var status = $(this).data('value');
    		if(status == 1){
    			$(this).html("弃用");
    		}else{
    			$(this).html("生效");
    		}
    	});
    },
    queryClassifys:function($listCon,classifyId){
    	var _this = this,
    	classifySelectHtml = '';
		// 加载分类信息
		classifyService.queryClassifys({classifyId : classifyId},function(res){
			// 渲染html
			classifySelectHtml = ciker.renderHtml(_this.pageHtml.classifySelectHtml, res);
			$listCon.html(classifySelectHtml);
			var selecthtml = $listCon.children('select').text();
			if( selecthtml== '' || selecthtml =='请选择'){
				$listCon.hide();
			}else{
				$listCon.show();
			}
    	},function(msg){
    		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
    	});
    },
    recommendChange:function(){
    	$(".article-single-recommend").each(function(){
    		var status = $(this).data('value');
    		if(status == 1){
    			$(this).html("已推荐");
    		}else{
    			$(this).parent().html("<button type=\"button\" class=\"article-single-recommend article-single-recommend-btn\" data-value=\"0\">推荐</button>")
    		}
    	});
    },
    showMsg : function(res,msg,time){
    	res.html(msg);
    	setTimeout( function(){
    		res.html("");
		},time);
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

var bulletinService = {
	data: {
        listParam : {
            pageNum     : 1,
            pageSize    : 5
        },
        isBulletin :{
        	bulletin : 0,
        	bulletined:1
        }
	},
	pageHtml : {},
    init: function(){
        this.bindEvent();
        this.onLoadHtml();
        this.loadBulletinList();
    },
    onLoadHtml:function(){
    	var bulletinListHtml = 	$(".bulletin-table").html();
    	// html()无法获取到{{list}}
    	bulletinListHtml += "{{#list}}"+
			"<tr>"+
				"<td>" +
					"<input type=\"checkbox\" class=\"check-single\" /> " +
					"<input class=\"single single-id\" type=\"hidden\" value=\"{{bulletinId}}\" /></td>"+
				"<td><span class=\"single-content\">{{bulletinContent}}</span></td>"+
				"<td><span class=\"single-creator\">{{creator}}</span></td>"+
				"<td><span class=\"single-creationdate\">{{creationdate}}</span></td>"+
				"<td><span class=\"single single-isbulletin\" data-value=\"{{isBulletin}}\"></span></td>"+
			"</tr>"+
			"{{/list}}";
    	
    	this.pageHtml.bulletinListHtml	 	 = 	bulletinListHtml;
    	
    	
    	
    },
    bindEvent : function(){
        var _this = this;
        $(document).off('click', '.add-editor');
        $(document).on('click', '.add-editor', function(){
        	$(".modal-title").html("新增公告");
        	$(".bulletin-content").val("");
    		$("#myModal").modal('show');
        });
        $(document).off('click', '.self-model-sub');
        $(document).on('click', '.self-model-sub', function(){
        	bulletin.addBulletin({
        		bulletinContent : $(".bulletin-content").val()
        	},function(res){
        		_this.loadBulletinList();
        		 $("#myModal").modal('hide');
        	},function(msg){
        		
        	});
        });
        $(document).off('click', '.btn-del');
        $(document).on('click', '.btn-del', function(){
        	var array=[];
    		$(".check-single:checked").each(function(i){
    			array[i] = $(this).next().val();
    		});
    		if(array.length != 0){
    			if(confirm("确定删除？")){
    				bulletin.deleteBulletin({"bulletinIds":array},function(res){
    					_this.loadBulletinList();
    					_this.showMsg($(".error-msg"),"<p class=\"err-tip\">"+res+"</p>",1000);
    					
    				},function(msg){
    					_this.showMsg($(".error-msg"),"<p class=\"err-tip\">加载失败，请刷新后重试</p>",3000);
    				});
    			}
    		}else{
    			_this.showMsg($(".error-msg"),"<p class=\"err-tip\">请选择一个文档</p>",1000);
    		}
        });
        $(document).on('change', '.check-all', function(){
        	if($(this).prop("checked")){
        		// 全选
        		$(".check-single").prop("checked",true);
        	}else{
        		// 全不选
        		$(".check-single").prop("checked",false);
        	}
        });
        
        $(document).off('click', '.single-isbulletin-btn');
        $(document).on('click', '.single-isbulletin-btn', function(){
        	var isBulletin = $(this).data('value');
        	if(isBulletin == _this.data.isBulletin.bulletin){
        		isBulletin = _this.data.isBulletin.bulletined;
        	}else{
        		isBulletin =  _this.data.isBulletin.bulletin;
        	}        	
        	var bulletinId = $(this).parent().parent().find('input.single-id').val();
        	bulletin.releaseBulletin({bulletinId : bulletinId,isBulletin:isBulletin},function(res){
        		_this.loadBulletinList();
				_this.showMsg($(".error-msg"),"<p class=\"err-tip\">"+res+"</p>",1000);
        	},function(msg){
        		_this.showMsg($(".error-msg"),"<p class=\"err-tip\">"+msg+"</p>",3000);
        	});
        });
        
    },
    showMsg : function(res,msg,time){
    	res.html(msg);
    	setTimeout( function(){
    		res.html("");
		},time);
    },
    loadBulletinList : function(){
    	var _this = this;
    	var bulletinListHtml = '';
    	var $listCon=$(".bulletin-table");
    	bulletin.queryBulletins(_this.data.listParam,function(res){
    		// 渲染html
    		bulletinListHtml = ciker.renderHtml(_this.pageHtml.bulletinListHtml, res);
    		$listCon.html(bulletinListHtml);
    		_this.statusChange();
    		var onSelectPage = function(pageNum){
             	 _this.data.listParam.pageNum = pageNum;
                _this.loadBulletinList();
       	}
    		_this.pageUtil(res,$(".list-pagination"),onSelectPage);
    	},function(msg){
    		
    	});
    	
    },
    statusChange:function(){
    	$(".single-isbulletin").each(function(){
    		var status = $(this).data('value');
    		if(status == 1){
    			$(this).html("已发布");
    		}else{
    			$(this).parent().html("<button type=\"button\" class=\"single-isbulletin-btn\" data-value=\"0\">发布</button>")
    		}
    	});
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
    },// 加载分页信息
    loadPagination : function(pageInfo,loadInfo){
    	var _this = this;
    	this.pagination = new Pagination();
    	this.pagination.render($.extend({}, pageInfo, loadInfo));
    }
};
$(function(){
	bulletinService.init();
});
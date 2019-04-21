
var classify = {
    pageHtml : {},
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    saveOpParam : {
    	param : 1,
    	classifyParentId:0
    },
    bindEvent : function(){
    	$("#classify-tree").treeview();
        var _this = this;
        
     // 菜单点击事件
        $(document).off('click', '.list-classify-item,.hitarea');
        $(document).on('click', '.list-classify-item,.hitarea', function(){
        	$("#classify-tree span").removeClass("classify-active");
        	$(this).addClass("classify-active");
        	if($(this).parent().has('div').html()){
        		var p = $(this).parent();
        		if(p.children('div').hasClass('collapsable-hitarea')){
        			p.children('div').removeClass('collapsable-hitarea');
        			p.children('div').removeClass('lastCollapsable-hitarea');
        			p.children('div').addClass('expandable-hitarea');
        			p.children('ul').hide();
        		}else{
        			p.children('div').removeClass('expandable-hitarea');
        			p.children('div').removeClass('lastExpandable-hitarea');
        			p.children('div').addClass('collapsable-hitarea');
        			p.children('ul').show();
        			
        		}
        	}
        });
        $(document).on('click', '.op-btn-add', function(){
        	var parentId;
        	var li ;
        	if($(".classify-active")){
        		li = $(".classify-active").parent();
        		parentId = $(".classify-active").data('value');
        	}else{
        		li = $("#classify-tree>li")
        		parentId = 0;
        	}
        	if(li.is(':has(ul)')){
        		li.children('ul').append("<li><input type=\"checkbox\"/><span class=\"folder list-classify-item\" data-value=\""+parentId+"\"><input type=\"text\" class=\"new-classify-ltem\"/></span></li>");
        		li.children('ul').show();
        	}else{
        		li.append("<ul class=\"ul-classify\"><li><input type=\"checkbox\"/><span class=\"folder list-classify-item\" data-value=\""+parentId+"\"><input type=\"text\" class=\"new-classify-ltem\"/></span></li></ul>");
        	}
        });
        $(document).on('click', '.op-btn-delete', function(){
        	var array = new Array();
        	$('input[type=checkbox]:checked').each(function(i){
        		array.push($(this).parent().children("span").data('value'));
        	})
        	if(array.length == 0){
        		return;
        	}
        	classifyService.delClassify({
            	cache	:	false,
            	async	:	false,
            	data	:   {"classifyIds":array}
            },function(res){
            	$("#classify-tree").html('');
            	_this.loadClassify();
            }, function(errMsg){
                $(".error-msg").html('<p class="err-tip">加载失败，请刷新后重试</p>');
            });
        });
        $(document).off('change', 'input[type=checkbox]');
        $(document).on('change', 'input[type=checkbox]', function(){
        	var li = $(this).parent();
        	if($(this).prop("checked")){
        		_this.classifyHandler(li,true);
        	}else{
        		_this.classifyHandler(li,false);
        	}
        });
        $(document).on('focus', '.new-classify-ltem', function(){
        	$("#classify-tree span").removeClass("classify-active");
        	$(this).parent().addClass("classify-active");
        });
        $(document).on('blur', '.new-classify-ltem', function(){
        	var parentId = $(".classify-active").data('value');
        	var classifyName = $('.new-classify-ltem').val();
            classifyService.addClassify({
            	cache	:	false,
            	async	:	false,
            	data	: {parentId:parentId,classifyName:classifyName}
            },function(res){
            	$("#classify-tree").html('');
            	_this.loadClassify();
            }, function(errMsg){
                $(".error-msg").html('<p class="err-tip">加载失败，请刷新后重试</p>');
            });
        	
        });
        
        
    },
    classifyHandler : function(node,checked){
    	var _this = this;
    	node.children("input").prop("checked",checked);
    	if(node.is(':has(ul)')){
    		node.children('ul').children('li').each(function(){
    			_this.classifyHandler($(this),checked);
    		});
    	}
    },
    onLoad : function(){
    	this.onLoadHtml();
        this.loadClassify();
    },
    onLoadHtml:function(){
    	/*this.pageHtml.classifyDetailHtml				 = 	$('.list-classify-body').html();*/
    },
    showError : function(res,msg){
    	res.html(msg);
    	setTimeout( function(){
    		res.html("");
		},5000);
    },
    loadClassify: function(){
        	var _this           = this;
        classifyService.queryClassifyList({
        	cache	:	false,
        	async	:	false
        },function(res){
        	_this.forEachBuildClassify(res);
        }, function(errMsg){
            $listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
        });
    },
    forEachBuildClassify:function(res){
    	var _this           = this;
    	if(res.classifyId == 0){
    		$("#classify-tree").append("<li class=\"classify-list-node-"+res.classifyId+"\"><input type=\"checkbox\"/><span class=\"folder list-classify-item\" data-value=\""+res.classifyId+"\">"+res.classifyName+"</span></li>");
    	}
    	if(res.childClassifies !=null){
    		$(".classify-list-node-"+res.classifyId).append("<div class=\"hitarea collapsable-hitarea \"></div>");
    		$(".classify-list-node-"+res.classifyId).append("<ul class=\"ul-classify\"></ul>");
    		res.childClassifies.forEach(function(value){
    			$(".classify-list-node-"+value.parentId+">ul").append("<li class=\"classify-list-node-"+value.classifyId+"\"><input type=\"checkbox\"/><span class=\"folder list-classify-item\" data-value=\""+value.classifyId+"\">"+value.classifyName+"</span></li>");
    			if(value.childClassifies != null){
    				_this.forEachBuildClassify(value);
    			}
    		})
    	}
    }

};
$(function(){
	classify.init();
});
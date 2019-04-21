
var menuListService = {
    pageHtml : {},
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    saveOpParam : {
    	param : 1,
    	menuParentId:0
    },
    bindEvent : function(){
    	$("#tree").treeview();
        var _this = this;
        $(".list-menu-body").hide();
        // 菜单点击事件
        $(document).off('click', '.list-menu-item,.hitarea');
        $(document).on('click', '.list-menu-item,.hitarea', function(){
        	$("#tree span").removeClass("menu-active");
        	$(this).addClass("menu-active");
        	var menuId = $(this).data('value');
        	if(menuId != undefined && menuId != 0){
        		$(".list-menu-body").html("");
        		_this.queryMenu(menuId);
        		$(".list-menu-body").show();
        	}else{
        		$(".list-menu-body").hide();
        	}
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
        $(document).on('click', '.op-btn-release', _this.releaseEvent);
        $(document).on('click', '.op-btn-add', _this.addMenuEvent);
        $(document).on('click', '.op-btn-update', _this.updateMenuEvent);
        $(document).on('click', '.op-btn-delete', function(){
        	if(menuListService.saveOpParam.param == 3){
        		menuListService.unDeleteMenuEvent();
        	}else{
        		menuListService.deleteMenuEvent();
        	}
        });
        $(document).on('click', '.op-btn-save', _this.saveOpEvent);
    },
    addMenuEvent : function(){
    	var menuParentId =$(".menu-active").data('value');
    	$(".menu-detail-input").val("");
    	$(".list-menu-body").show();
    	$(".op-btn-release").text("保存");
    	$(".op-btn-release").addClass("op-btn-save");
    	$(".op-btn-release").removeClass("op-btn-release")
    	$(".menu-detail-input").removeAttr("readonly");
    	$(".menu-detail-input-id").val("");
    	menuListService.saveOpParam.param=1;
    	if(menuParentId!=undefined){
    		menuListService.saveOpParam.menuParentId=menuParentId;
    	}
    },
    updateMenuEvent : function(){
    	$(".op-btn-release").text("保存");
    	$(".op-btn-release").addClass("op-btn-save");
    	$(".op-btn-release").removeClass("op-btn-release");
    	$(".menu-detail-input").removeAttr("readonly");
    	menuListService.saveOpParam.param=2;
    },
    unDeleteMenuEvent : function(){
    	$('.op-btn-delete').text('删除菜单');
    	$(".del-line").removeClass('del-line');
    	var isRelease = $(".op-btn-save").val();
    	if(isRelease == 1){
    		$(".op-btn-save").html("取消发布");
    	}else{
    		$(".op-btn-save").html("发布菜单");
    	}
    	$(".op-btn-save").addClass("op-btn-release");
    	$(".op-btn-save").removeClass("op-btn-save");
    	menuListService.saveOpParam.param=1;
    },
    deleteMenuEvent : function(){
    	$('.op-btn-delete').text('取消删除');
    	var menutId =$(".menu-active").data('value');
    	$errorHtml			= $('.error-msg');
    	if(menutId == undefined || menutId==0){
    		menuListService.showError($errorHtml,"请选择不是根节点的其他菜单");
    	}
    	// 删除线
    	var delLine = function(node){
    		node.children('span').addClass('del-line');
    		if(node.has('ul').html()){
    			node.has('ul').children('ul').children('li').each(function(){
    				delLine($(this));
				});
        	}
    	}
    	var parent=$(".menu-active").parent();
    	delLine(parent);
    	$(".menu-detail-input").addClass('del-line');
    	$(".op-btn-release").text("保存");
    	$(".op-btn-release").addClass("op-btn-save");
    	$(".op-btn-release").removeClass("op-btn-release");
    	menuListService.saveOpParam.param=3;
    },
    saveOpEvent : function(){
    	menuDetailHtml   	= '',
    	$listCon        	= $('.list-menu-body'),
    	$errorHtml			= $('.error-msg');
    	var param = menuListService.saveOpParam.param;
    	
    	var success = function(res){
    		// 渲染html
    		menuDetailHtml = ciker.renderHtml(menuListService.pageHtml.menuDetailHtml, res);
    		$listCon.html(menuDetailHtml);
    	};
    	var error = function(errMsg){
    		if(errMsg == null || errMsg == "" || errMsg == undefined){
    			menuListService.showError($errorHtml,'<p class="err-tip">加载失败，请刷新后重试</p>');
    		}else{
    			menuListService.showError($errorHtml,'<p class="err-tip">'+errMsg+'</p>');
    		}
    	};
    	var menuId ;
    	if(param == 1){
    		menuId = menuListService.saveOpParam.menuParentId;
    		menuService.addMenu({
    			async : false,
    			cache :false,
    			data : {
    			menuParentId 	: menuId,
    			menuName		:	$(".menu-detail-input-name").val(),	
    			menuUrl			:	$(".menu-detail-input-url").val(),	
    			menuDesc		:	$(".menu-detail-input-desc").val()
    		}
    			
    		},success,error );
    	}else if(param == 2){
    		menuId = $(".menu-detail-input-id").val();
    		menuService.updateMenu(
    				{
    					async : false,
    					data :{
    		    			menuId 			: 	menuId,	
    		    			menuName		:	$(".menu-detail-input-name").val(),	
    		    			menuUrl			:	$(".menu-detail-input-url").val(),	
    		    			menuDesc		:	$(".menu-detail-input-desc").val()
    		    		}
    				}
    			,success,error );
    		
    	}else if(param == 3){
    		menuId = $(".menu-detail-input-id").val();
    		menuService.deleteMenu({
    			async 	: false,
    			data	: {menuId : menuId}
    		},success,error );
    		$('.op-btn-delete').text('删除菜单');
        	$(".del-line").removeClass('del-line');
        	menuListService.saveOpParam.param=1;
    	}
		$("#tree").html("");
		$(".list-menu-body").hide();
		menuListService.loadMenus();
		if(menuId != undefined && menuId != 0 && param != 3){
			$("#tree span").removeClass("menu-active");
			$(".menu-list-node-"+menuId+">span").addClass("menu-active");
			$(".list-menu-body").html("");
			setTimeout( function(){
				menuListService.queryMenu(menuId);
				$(".list-menu-body").show();
				$(".menu-detail-input").attr("readonly","");
			}, 10);
		}
    	
    },
    // 发布操作
    releaseEvent:function(){
    	var menuId = $(".menuDetail input").eq(0).val();
    	var param = {
    			menuId : menuId
    	}
    	if($(".op-btn-release").val()==1){
    		menuService.unReleaseMenu(param,function(res){
    			$(".op-btn-release").html("发布菜单");
    			$(".op-btn-release").val(0);
    		}, 
    		function(errMsg){
        		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
        	});
    	}else{
    		menuService.releaseMenu(param,function(res){
    			$(".op-btn-release").html("取消发布");
    			$(".op-btn-release").val(1);
    		}, 
    		function(errMsg){
        		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
        	});
    	}
    	$("#tree").html("");
    	menuListService.loadMenus();
    },
    onLoad : function(){
    	this.onLoadHtml();
        this.loadMenus();
    },
    onLoadHtml:function(){
    	this.pageHtml.menuDetailHtml				 = 	$('.list-menu-body').html();
    },
    queryMenu:function(menuId){
    	var _this           = this,
    	menuDetailHtml   	= '',
    	$listCon        	= $('.list-menu-body');
    	var data = {menuId:menuId};
    	menuService.selectByNotDeletedMenuId({
    		async:false,
    		data : data
    	}, function(res){
    		if(res.isRelease == 1){
    			res.operate = "取消发布";
    		}else{
    			res.operate = "发布菜单";
    		}
    		// 渲染html
    		menuDetailHtml = ciker.renderHtml(_this.pageHtml.menuDetailHtml, res);
    		$listCon.html(menuDetailHtml);
    		if(menuListService.saveOpParam.param==3){
    			$(".menu-detail-input").addClass('del-line');
    			$(".op-btn-release").text("保存");
    	    	$(".op-btn-release").addClass("op-btn-save");
    	    	$(".op-btn-release").removeClass("op-btn-release");
    		}
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
    // 加载menu
    loadMenus: function(){
        	var _this           = this;
        menuService.queryMenus({
        	cache	:	false,
        	async	:	false
        },function(res){
        	_this.forEachBuildMenus(res);
        }, function(errMsg){
            $listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
        });
    },
    forEachBuildMenus:function(res){
    	var _this           = this;
    	if(res.menuId == 0){
    		$("#tree").append("<li class=\"menu-list-node-"+res.menuId+"\"><input type=\"checkbox\" onclick=\"return false;\"/><span class=\"folder list-menu-item\" data-value=\""+res.menuId+"\">"+res.menuName+"</span></li>");
    	}
    	if(res.childMenus !=null){
    		if(res.isRelease == 1){
    			$('.menu-list-node-'+res.menuId+">input").prop("checked",true);
    		}
    		$(".menu-list-node-"+res.menuId).append("<div class=\"hitarea collapsable-hitarea \"></div>");
    		$(".menu-list-node-"+res.menuId).append("<ul class=\"ul-menu\"></ul>");
    		res.childMenus.forEach(function(value){
    			$(".menu-list-node-"+value.menuParentId+">ul").append("<li class=\"menu-list-node-"+value.menuId+"\"><input type=\"checkbox\" onclick=\"return false;\" /><span class=\"folder list-menu-item\" data-value=\""+value.menuId+"\">"+value.menuName+"</span></li>");
    			if(value.isRelease == 1){
	    			$('.menu-list-node-'+value.menuId+">input").prop("checked",true);
	    		}
    			if(value.childMenus != null){
    				_this.forEachBuildMenus(value);
    			}else{
    				if(value.isRelease == 0){
        				$('.menu-list-node-'+value.menuParentId+">input").prop("indeterminate",true);
        			}
    			}
    		})
    	}
    }

};
$(function(){
	menuListService.init();
});
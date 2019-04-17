
var menuListService = {
    pageHtml : {},
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;
        $(".list-menu-body").hide();
        $(document).on('click', '.list-menu-item', function(){
        	/*$(this).addClass("menu-active");*/
        	var menuId = $(this).data('value');
        	if(menuId != 0){
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
        $("#tree").treeview();
        
        
        
        
    },
    onLoad : function(){
    	this.onLoadHtml();
        this.loadMenus();
    },
    onLoadHtml:function(){
    	this.pageHtml.menuDetailHtml				 = 	$('.list-menu-body').html();
    },
    queryMenu:function(data){
    	var _this           = this,
    	menuDetailHtml   	= '',
    	$listCon        	= $('.list-menu-body');
    	var param = {menuId:data};
    	menuService.selectByMenuId(param, function(res){
    		// 渲染html
    		menuDetailHtml = ciker.renderHtml(_this.pageHtml.menuDetailHtml, res);
    		$listCon.html(menuDetailHtml);
    	}, function(errMsg){
    		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
    	});
    },
    // 加载menu
    loadMenus: function(){
        	var _this           = this;
        menuService.queryMenus(function(res){
        	_this.forEachBuildMenus(res);
        }, function(errMsg){
            $listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
        });
    },
    forEachBuildMenus:function(res){
    	var _this           = this;
    	if(res.menuId == 0){
    		$("#tree").append("<li class=\"menu-list-node-"+res.menuId+"\"><input type=\"checkbox\"/><span class=\"folder list-menu-item\" data-value=\""+res.menuId+"\">"+res.menuName+"</span></li>");
    	}
    	if(res.childMenus !=null){
    		$(".menu-list-node-"+res.menuId).append("<div class=\"hitarea collapsable-hitarea \"></div>");
    		$(".menu-list-node-"+res.menuId).append("<ul class=\"ul-menu\"></ul>");
    		res.childMenus.forEach(function(value){
    			$(".menu-list-node-"+value.menuParentId+">ul").append("<li class=\"menu-list-node-"+value.menuId+"\"><input type=\"checkbox\"/><span class=\"folder list-menu-item\" data-value=\""+value.menuId+"\">"+value.menuName+"</span></li>");
    			if(value.childMenus != null){
    				_this.forEachBuildMenus(value);
    			}
    		})
    	}
    }

};
$(function(){
	menuListService.init();
});
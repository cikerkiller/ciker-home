
var back = {
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
        $(document).on('click', 'ul.sidebar-menu li', function(){
        	var li = $('ul.sidebar-menu li.active');
			li.removeClass('active');
			$(this).addClass('active');
        });
        $(document).on('click', '.myLeftMenu', function(){
        	var url = $(this).attr('data');
			$('#container').load(url);
        });
    },
    onLoad : function(){
    	this.onLoadHtml();
        this.loadMenus();
        this.onLoadWelcomeHtml();
    },
    onLoadWelcomeHtml:function(){
    	$('#container').load("menu.jsp");
    },
    onLoadHtml:function(){
    	this.pageHtml.menuHtml				 = 	$('.sidebar-menu').html();
    },
    // 加载menu
    loadMenus: function(){
        	var _this           = this,
        	menuHtml   	= '',
            $listCon        	= $('.sidebar-menu');
        menuService.queryChildReleasedMenus(function(res){
        	_this.forEachBuildMenus(res);
        }, function(errMsg){
            $listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
        });
    },
    forEachBuildMenus:function(res){
    	var _this           = this;
    	if(res.childMenus !=null){
    		res.childMenus.forEach(function(value){
    			if(value.menuParentId == 0){
    				$(".sidebar-menu").append("<li class=\"menu-node-"+value.menuId+"\"><a href=\"#\"><i class=\"fa fa-link\"></i><span>"+value.menuName+"</span></a></li>");
    			}else{
    				$(".menu-node-"+value.menuParentId+">ul").append("<li class=\"menu-node-"+value.menuId+"\"><a href=\"javascript:void(0)\"><i class=\"fa fa-link\"></i>"+value.menuName+"</a></li>");
    			}
    			if(value.childMenus != null){
    				$(".menu-node-"+value.menuId+">a").append("<span class=\"pull-right-container\"><i class=\"fa fa-angle-left pull-right\"></i></span> ");
    				$(".menu-node-"+value.menuId).append("<ul class=\"lte-treeview-menu menu-list\"></ul>");
    				$(".menu-node-"+value.menuId).addClass("lte-treeview");
    				_this.forEachBuildMenus(value);
    			}else{
    				if(value.menuUrl != null){
    					$(".menu-node-"+value.menuId+">a").addClass("myLeftMenu");
    					$(".menu-node-"+value.menuId+">a").attr("data",value.menuUrl);
    				}
    			}
    		})
    	}
    }

};
$(function(){
	back.init();
});
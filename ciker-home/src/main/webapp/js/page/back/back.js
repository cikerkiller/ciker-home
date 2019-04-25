
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
        	var navTitle = $(this).text();
        	var menuId = $(this).parent().attr('data');
        	var url = $(this).attr('data');
			$('#container').load(url);
			_this.loadNavMenu({menuId : menuId});
			
        });
        $(document).on('click', '.logout', function(){
        	$listCon        	= $('.nav-menu');
        	_user.logout(function(res){
        		window.location.href = "login.jsp";
        	},function(msg){
        		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
        	});
        });
    },
    loadNavMenu : function(param){
    	var _this           = this,
    	navMenuHtml   	= '',
        $listCon        	= $('.nav-menu');
    	menuService.queryNavMenu(param,function(res){
    		// 渲染html
    		navMenuHtml = ciker.renderHtml(_this.pageHtml.navMenuHtml, res);
    		$listCon.html(navMenuHtml);
    	},function(msg){
    		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
    	})
    },
    onLoad : function(){
    	this.onLoadHtml();
        this.loadMenus();
        this.onLoadWelcomeHtml();
    },
    onLoadWelcomeHtml:function(){
    	$('.nav-menu').html("<h3>欢迎来到刺客空间!</h3>");
    	var date = new Date();
    	var year = date.getFullYear();
    	var next;
    	if(year == 2019){
    		next = '?';
    	}
    	$('.copyright').html("<strong>Copyright &copy; "+year+"-"+next+" <a href=\"#\">hfeitech</a>.</strong> All rights reserved.");
    },
    onLoadHtml:function(){
    	this.pageHtml.menuHtml				 = 	$('.sidebar-menu').html();
    	this.pageHtml.navMenuHtml				 = 	$('.nav-menu').html();
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
    					$(".menu-node-"+value.menuId).attr("data",value.menuId);
    				}
    			}
    		})
    	}
    }

};
$(function(){
	back.init();
});
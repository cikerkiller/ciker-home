
var photoShow = {
    pageHtml : {},
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;

       
    },
    onLoad : function(){
    	this.onLoadHtml();
    	 this.loadImages();
    },
    onLoadHtml:function(){
    	this.pageHtml.imageHtml				 = 	$('#myCarousel').html()
    },
    // 加载首页图片
    loadImages: function(){
    	var _this           = this,
    	imageHtml   	= '',
    	$listCon        	= $('#myCarousel');
    	imageService.queryImageByReleased(function(res){
    		var list = res.list;
    		imageHtml = ciker.renderHtml(_this.pageHtml.imageHtml, res);
    		$listCon.html(imageHtml);
    		for(var i=0;i<list.length;i++){
    			$(".carousel-inner").append(
    					"<div class=\"item image-content\">"+
    			"<img src=\""+list[i].imageContent+"\" alt=\"First slide\">"+
    			"<div class=\"carousel-caption\">"+list[i].imageTitle+"</div></div>"
    			);
    		}
    		$(".image-no").first().addClass("active");
    		$(".image-content").first().addClass("active");
    	}, function(errMsg){
    		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
    	});
    }
};
$(function(){
	photoShow.init();
});
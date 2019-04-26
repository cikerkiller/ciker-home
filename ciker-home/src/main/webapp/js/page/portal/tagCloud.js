
var tagCloud = {
    pageHtml : {},
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;
        $(document).off('click','.tag-a');
        $(document).on('click','.tag-a',function(){
        	var tagName = $(this).text();
        	portal.searchArticle(tagName);
        });
    },
    onLoad : function(){
    	this.onLoadHtml();
    	this.loadTagCloud();
    },
    onLoadHtml:function(){
    	this.pageHtml.tagCloudHtml	 = 	$(".tag-cloud-body").html();
    },
    loadTagCloud : function(){
    	var _this           = this,
    	tagCloudHtml   	= '',
    	$listCon        	= $('.tag-cloud-body');
    	tagService.queryTagCloud(function(res){
    		// 渲染html
    		tagCloudHtml = ciker.renderHtml(_this.pageHtml.tagCloudHtml, res);
    		$listCon.html(tagCloudHtml);
    	},function(msg){
    		$listCon.html('<p class="err-tip">加载失败，请刷新后重试</p>');
    	});
    	
    }
};
$(function(){
	tagCloud.init();
});
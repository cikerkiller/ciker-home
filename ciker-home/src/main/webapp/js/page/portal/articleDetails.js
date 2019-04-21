
var articleDatailsService = {
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    bindEvent : function(){
    },
    onLoad : function(){
    	$(".article-content").load("../jsp/articleContent.jsp");
    	$(".comment").load("../jsp/commentList.jsp");
    }
   
};
$(function(){
	articleDatailsService.init();
});
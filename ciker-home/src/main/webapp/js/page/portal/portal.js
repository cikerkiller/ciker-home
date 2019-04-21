
var portal = {
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    bindEvent : function(){
    	$(document).on('click', '.portal-home',function(){
    		window.location.href = '../jsp/portal.jsp';
    	});
    },
    onLoad : function(){
    	$(".photo-show").load("../jsp/photoShow.jsp");
    	$(".toptip").load("../jsp/bulletin.jsp");
    	$(".hot-rank").load("../jsp/hotRank.jsp");
    	$(".article-list").load("../jsp/articleList.jsp");
    	$(".tag-cloud").load("../jsp/tagCloud.jsp");
    	$(".guess").load("../jsp/recommend.jsp");
    }
};
$(function(){
	portal.init();
});
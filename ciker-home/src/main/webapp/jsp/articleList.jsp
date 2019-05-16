
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="../js/service/article-service.js"></script>
<script type="text/javascript" src="../js/service/pagination.js"></script>
<script type="text/javascript" src="../js/page/portal/articleList.js"></script>
<link rel="stylesheet" type="text/css" href="../css/portal/articleList.css" />
</head>
<div class="col-sm-12 articleList">

	{{#list}}
	<div class="panel panel-default articile">
		<div class="panel-heading">
			<a href="#" class="articile-details" data-value="{{articleId}}">{{{articleTitle}}}</a>
		</div>
		<div class="panel-body article-body">
			<span class="article-content">{{{content}}}</span>
			<p class="article-auth">
				<span class="article-auth-element">
					<a class="article-auth-user">
						<i class="fa fa-user"></i>
						<span>{{creatior}}</span>
					</a>
				</span>
				<span class="article-auth-element">
					<i class="fa fa-clock-o"></i>
					<span class="article-auth-time">{{lastUpdateDate}}</span>
				</span>
				
				<span class="article-auth-element">
					<span class="article-auth-scan">
						<i class="fa fa-eye"></i>
						<span class="count">{{viewingCount}}</span>
						浏览
					</span>
				</span>
				
				<span class="article-auth-element">
					<span class="article-auth-comment">
						<i class="fa fa-comments-o"></i>
						<span class="count">{{commentNumber}}</span>
						评论
					</span>
				</span>
				
				<span class="article-auth-element">
					<a class="article-auth-like">
						<input type="hidden" value="{{articleId}}"/>
						<i class="fa fa-thumbs-up"></i>
						<span class="count">{{likeNumber}}</span>点赞
					</a>
				</span>
				
			</p>
		</div>
		
	</div>
	
	{{/list}}
	<div class="pg-content">
		<nav aria-label="Page navigation">
			<ul class="pagination article-pagination">
			</ul>
		</nav>
	</div>
</div>

</html>
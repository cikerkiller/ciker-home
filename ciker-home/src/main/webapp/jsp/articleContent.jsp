<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="../js/page/portal/articleContent.js"></script>
<link rel="stylesheet" type="text/css" href="../css/portal/articleContent.css" />
</head>

<div class="col-sm-12 article-content-body">
	<div class="panel panel-default">
		<input id="articleId" type="hidden" value="{{articleId}}" />
		<!-- 文章导航 -->
		<div class="panel-heading self-heading">
			<h5 class="panel-title articleTitle">{{articleTitle}}</h5>
			<p class="article-auth">
				<span class="article-auth-element">
					<i class="fa fa-user"></i>
					<a class="article-auth-user">{{creatior}}</a>
				</span>
				<span class="article-auth-element">
					<i class="fa fa-clock-o"></i>
					<span class="article-auth-time">{{lastUpdateDate}}</span>
				</span>
				<span class="article-auth-element">
					<i class="fa fa-eye"></i>
					<span class="article-auth-scan">
						<span class="count">{{viewingCount}}</span>
						浏览
					</span>
					
				</span>
				<span class="article-auth-element">
					<i class="fa fa-comments-o"></i>
					<a class="article-auth-comment">
					<span class="count">{{commentNumber}}</span>
					评论
					</a>
					
				</span>
				<span class="article-auth-element">
					<i class="fa fa-thumbs-up"></i>
					<a class="article-auth-like">
						<span class="count">{{likeNumber}}</span>
						点赞
					</a>
				</span>
			</p>
		</div>
		<div class="divider"></div>
		<!-- 文章主体 -->
		<div class="panel-body">
			<div class="article-body">{{{content}}}</div>
		</div>
	</div>
</div>


</html>
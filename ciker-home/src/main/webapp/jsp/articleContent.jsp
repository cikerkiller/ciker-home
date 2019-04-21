<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="../js/page/portal/articleContent.js"></script>
</head>

<div class="col-sm-12 article-content-body">
	<div class="panel panel-default">
		<input id="articleId" type="hidden" value="{{articleId}}" />
		<!-- 文章导航 -->
		<div class="panel-heading self-heading">
			<h5 class="panel-title articleTitle">{{articleTitle}}</h5>
		</div>
		<div class="divider"></div>
		<!-- 文章主体 -->
		<div class="panel-body">
			<p class="article-body">{{{content}}}</p>
		</div>
	</div>
</div>


</html>
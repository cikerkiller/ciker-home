<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="js/service/article-service.js"></script>
<script type="text/javascript" src="js/page/portal/hotRank.js"></script>
<link rel="stylesheet" type="text/css" href="css/portal/hotRank.css" />
</head>
<div class="col-sm-12">
	<div class="panel panel-default hot-article">
		<div class="panel-heading">
			<h3 class="panel-title">热门排行</h3>
		</div>
		<div class="divider"></div>
		{{#list}}
		<div class="panel-body">
			<span class="badge rank" data-value="{{rank}}">{{rank}}</span> 
			<a class="hot-rank-a" data-value="{{articleId}}">{{articleTitle}}</a>
		</div>
		{{/list}}
	</div>
</div>
</html>
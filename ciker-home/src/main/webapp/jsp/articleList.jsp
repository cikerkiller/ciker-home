
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="../js/service/article-service.js"></script>
<script type="text/javascript" src="../js/service/pagination.js"></script>
<script type="text/javascript" src="../js/page/portal/articleList.js"></script>
</head>
<div class="col-sm-12 articleList">
	{{#list}}
	<div class="panel panel-default articile">
		<div class="panel-heading">
			<a href="#" class="articile-details" data-value="{{articleId}}">{{{articleTitle}}}</a>
		</div>
		<div class="panel-body">{{{content}}}</div>
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
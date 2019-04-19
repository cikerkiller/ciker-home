<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="js/page/portal/recommend.js"></script>
</head>
<div class="col-sm-12">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h3 class="panel-title">热情推荐</h3>
		</div>
		<div class="divider"></div>
		<div class="panel-body">
			<ul class="list-group recommend">
				{{#list}}
				<li class="list-group-item"><a class="recommend-article"
					data-value="{{articleId}}">{{articleTitle}}</a></li> {{/list}}
			</ul>
		</div>
	</div>
</div>
</html>
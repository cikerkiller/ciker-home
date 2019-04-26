<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="../js/service/tag-service.js"></script>
<script type="text/javascript" src="../js/page/portal/tagCloud.js"></script>
</head>
<div class="col-sm-12">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h3 class="panel-title">标签云</h3>
		</div>
		<div class="divider"></div>
		<div class="panel-body tag-cloud-body">
			{{#tagList}}
			<span class="label label-success"><a class="tag-a" href="#">{{tagName}}</a></span> 
			{{/tagList}}
		</div>
	</div>
</div>
</html>
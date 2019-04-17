<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<div class="panel panel-default">
	<!-- 导航头 -->
	<div class="panel-heading">
		<form class="form-inline">
			<div class="form-group self-form">
				<label>分类</label> <input class="form-control" type="email"
					placeholder="请输入技术分类">
			</div>

			<div class="form-group self-form">
				<label>标题</label> <input type="password" class="form-control"
					placeholder="请输入分类子标题">
			</div>
			<button type="button" class="btn btn-default" id="self-systematics">
				<span class="glyphicon glyphicon-search" aria-hidden="true"></span>查询
			</button>
		</form>
	</div>


	<div class="panel-body">
		<div class="panel">
			<button type="button" class="btn btn-success add-editor"
				data-toggle="modal" data-target="#myModal">
				<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
			</button>
			<button type="button" class="btn btn-danger">
				<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
			</button>
			<button type="button" class="btn btn-info">
				<span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span>模板
			</button>
		</div>
		<ul class="list-group">
			<li class="list-group-item"><span class="badge">14</span> Cras
				justo odio</li>
			<li class="list-group-item"><span class="badge">14</span> Cras
				justo odio</li>
			<li class="list-group-item"><span class="badge">14</span> Cras
				justo odio</li>
			<li class="list-group-item"><span class="badge">14</span> Cras
				justo odio</li>
		</ul>
	</div>
</div>
</html>
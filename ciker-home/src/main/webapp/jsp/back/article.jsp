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
				<label>分类</label>
				<select class="form-control">
					  <option>所有</option>
					  <option>Hot Dog</option>
					  <option>Fries</option>
					  <option>Soda</option>
					  <option>Burger</option>
					  <option>Shake</option>
					  <option>Smile</option>
				</select>
			</div>

			<div class="form-group self-form">
				<label>文档名称</label> <input type="text" class="form-control" placeholder="请输入文档名称">
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
		<table class="table menuDetail">
	        <th><input type="checkbox" class="article-check-all" /></th>
	        <th>文档名称</th>
	        <th>创建人</th>
	        <th>创建时间</th>
	        <th>最后更新人</th>
	        <th>最后更新时间 </th>
	        <th>浏览量</th>
	        <th>文档状态</th>
	        <th>是否推荐</th>
	       <!--  {{#list}} -->
	        <tr>
	        	<td>
		        	<input type="checkbox" class="article-check-single" />
		        	<input class="article-single article-single-id" type="hidden" value="{{menuId}}"/>
	        	</td>
	        	<td><span class="article-single-title"><a>关于Java内存模型的一些思考<a></a></span></td>
	        	<td><span class="article-single-creator">ciker</span></td>
	        	<td><span class="article-single-creationdate">2015.01.01</span></td>
	        	<td><span class="article-single-lastupdator">ciker</span></td>
	        	<td><span class="article-single-lastupdatedate">2015.01.01</span></td>
	        	<td><span class="article-single-viewingcount">26</span></td>
	        	<td><button type="button" class="article-single-status" value="">有效</button></td>
	        	<td><button type="button" class="article-single-recommend" value="">推荐</button></td>
	        </tr>
	        <!--  {{/list}} -->
	    </table>
	</div>
</div>
</html>
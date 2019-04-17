<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
  <head>
    <title>tree.html</title>
	<script type="text/javascript" src="../../js/utils/jquery.treeview.js"></script>
	<script type="text/javascript" src="../../js/page/menu.js"></script>
	<link rel="stylesheet" type="text/css" href="../../css/jquery.treeview.css" />
	<link rel="stylesheet" type="text/css" href="../../css/menu.css" />
  </head>
  
  <body>
  	<div class="panel panel-default">
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
  	<div class="panel-body list-menu-head">
	    <ul id="tree" class="filetree">
	        <li><span class="folder">系统管理</span>
	            <ul>
	                <li><input type="checkbox"/><span class="folder list-menu-item">部门管理</span></li>
	                <li><input type="checkbox"/><span class="folder list-menu-item">岗位管理</span>
	                    <ul>
	                        <li><input type="checkbox"/><span class="folder list-menu-item">岗位添加</span></li>
	                        <li><input type="checkbox"/><span class="folder list-menu-item">岗位删除</span></li>
	                    </ul>
	                </li>
	                <li><input type="checkbox"/><span class="folder list-menu-item">用户管理</span>
	                    <ul>
	                        <li><input type="checkbox"/><span class="folder"><a class="list-menu-item">用户管理</a></span></li>
	                        <li><span class="folder">修改用户</span></li>
	                    </ul>
	                </li>
	            </ul>
	        </li>
	    </ul>
    </div>
  	<div class="panel-body list-menu-body">
	    <table class="table">
	        <th>菜单名称</th><th>菜单地址 </th><th>菜单描述 </th>
	        <tr><td>菜单管理</td><td>menu.jsp</td><td>关于菜单管理的节点</td></tr>
	    </table>
    </div>
    </div>
  </body>
</html>
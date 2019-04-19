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
		 <button type="button" class="btn btn-default op-btn op-btn-add">增加菜单</button>
		 <button type="button" class="btn btn-default op-btn op-btn-update">修改菜单</button>
		 <button type="button" class="btn btn-default op-btn op-btn-delete">删除菜单</button>
		 <span class="error-msg"></span>
	</div>
  	<div class="panel-body list-menu-head">
	    <ul id="tree" class="filetree">
	    </ul>
    </div>
  	
  	<div class="panel-body list-menu-body">
	    <table class="table menuDetail">
	        <th>菜单名称</th><th>菜单地址 </th><th>菜单描述 </th><th>菜单操作 </th>
	        <tr>
	        	<td style="display: none">
	        	<input class="form-control menu-detail-input menu-detail-input-id" type="hidden" value="{{menuId}}"/>
	        	</td>
	        	<td><input class="form-control menu-detail-input menu-detail-input-name" type="text" value="{{menuName}}" readonly/></td>
	        	<td><input class="form-control menu-detail-input menu-detail-input-url" type="text" value="{{menuUrl}}" readonly/></td>
	        	<td><input class="form-control menu-detail-input menu-detail-input-desc" type="text" value="{{menuDesc}}" readonly/></td>
	        	<td><button type="button" class="btn btn-default op-btn-release" value="{{isRelease}}">{{operate}}</button></td>
	        </tr>
	    </table>
    </div>
    
    </div>
  </body>
</html>
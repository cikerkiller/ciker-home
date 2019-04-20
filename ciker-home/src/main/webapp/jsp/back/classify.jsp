<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
  <head>
    <title>tree.html</title>
	<script type="text/javascript" src="../../js/utils/jquery.treeview.js"></script>
	<script type="text/javascript" src="../../js/page/back/classify.js"></script>
	<script type="text/javascript" src="../../js/service/classify-service.js"></script>
	<link rel="stylesheet" type="text/css" href="../../css/jquery.treeview.css" />
	<link rel="stylesheet" type="text/css" href="../../css/back/classify.css" />
  </head>
  
  <body>
  	<div class="panel panel-default">
  	<div class="panel-heading">
		 <button type="button" class="btn btn-default op-btn op-btn-add">增加分类</button>
		 <button type="button" class="btn btn-default op-btn op-btn-delete">删除分类</button>
		 <span class="error-msg"></span>
	</div>
  	<div class="panel-body list-classify-head">
	    <ul id="classify-tree" class="filetree">
	    </ul>
    </div>
    
    </div>
  </body>
</html>
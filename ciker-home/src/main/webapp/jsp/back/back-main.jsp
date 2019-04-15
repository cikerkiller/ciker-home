<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ciker后台管理系统</title>
<script type="text/javascript" src="../../js/utils/jquery-3.2.1.js"></script>
<script type="text/javascript" src="../../js/utils/bootstrap.min.js"></script>
<script type="text/javascript" src="../../js/utils/adminlte.js"></script>
<link rel="stylesheet" type="text/css"
	href="../../css/bootstrap.min.css" />

<link rel="stylesheet" href="../../css/font-awesome.css">
<link rel="stylesheet" href="../../css/ionicons.css">
<link rel="stylesheet" href="../../css/AdminLTE.css">
<style type="text/css">
body {
	background-color: black;
}
#search-btn{
	 padding: 9px 10px;
	 border-right: solid 1px black;
}
.divider{
	height: 1px;
}

.self-form{
	margin-left: 10px;
}
</style>


</head>
<body>
	<div class="wrapper">
		<header class="main-header">
			<a href="#" target="_blank" class="logo">
				<span class="logo-lg"><b>Welcome</b> visit ciker</span>
			</a>

			<nav class="navbar navbar-static-top" role="navigation">
				<a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
					 <span class="sr-only">Toggle navigation</span>
				</a>
				
				<div class="navbar-custom-menu">
					<ul class="nav navbar-nav">
						<!-- User Account Menu -->
						<li class="dropdown user user-menu">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown"> 
								<img src="../../img/1.png" class="user-image" alt="User Image">
								<span class="hidden-xs">Alexander Pierce</span>
							</a>
							<ul class="dropdown-menu">
								<li class="user-header"><img src="../../img/1.png"
									class="img-circle" alt="User Image">

									<p>
										Alexander Pierce - Web Developer <small>Member since
											Nov. 2012</small>
									</p></li>
								<!-- Menu Body -->
								<li class="user-body">
									<div class="row">
										<div class="col-xs-4 text-center">
											<a href="#">Followers</a>
										</div>
										<div class="col-xs-4 text-center">
											<a href="#">Sales</a>
										</div>
										<div class="col-xs-4 text-center">
											<a href="#">Friends</a>
										</div>
									</div> 
								</li>
								
								<li class="user-footer">
									<div class="pull-left">
										<a href="#" class="btn btn-default btn-flat">Profile</a>
									</div>
									<div class="pull-right">
										<a href="#" class="btn btn-default btn-flat">Sign out</a>
									</div>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</header>
		
		<!-- 左侧菜单 -->
		<aside class="main-sidebar">
			<section class="sidebar">
				<!-- 搜索 -->
				<form action="#" method="get" class="sidebar-form">
					<div class="input-group">
						<input type="text" name="q" class="form-control" placeholder="Search..."> 
						<span class="input-group-btn">
							<button type="submit" name="search" id="search-btn" class="btn btn-flat">
								<i class="fa fa-search"></i>
							</button>
						</span>
					</div>
				</form>

				<ul class="sidebar-menu" data-widget="tree">
					<li class="active">
						<a href="#"><i class="fa fa-link"></i><span>Link</span></a>
					</li>
					<li>
						<a href="#"><i class="fa fa-link"></i> <span>Another Link</span></a>
					</li>
					
					<li class="treeview">
						<a href="#">
							<i class="fa fa-link"></i> 
							<span>Multilevel</span> 
							<span class="pull-right-container">
								<i class="fa fa-angle-left pull-right"></i>
							</span> 
						</a>
						<ul class="treeview-menu">
							<li>
								<a href="javascript:void(0)" class="myLeftMenu" data="add.html">我是add</a>
							</li>
							<li>
								<a href="javascript:void(0)" class="myLeftMenu" data="checkbox.html">点击是checkbox页面</a>
							</li>
							<li>
								<a href="javascript:void(0)" class="myLeftMenu" data="userList.html">我是userList</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
		</aside>

		<!-- 内容 -->
		<div class="content-wrapper">
			<!-- 内容header -->
			<section class="content-header">
				<h1>
					Page Header <small>Optional description</small>
				</h1>
				<ol class="breadcrumb">
					<li>
						<a href="#"><i class="fa fa-dashboard"></i> Level</a>
					</li>
					<li class="active">Here</li>
				</ol>
			</section>
			<section class="content container-fluid">
				<div id="container">
					<div class="panel panel-default">
						  <!-- 导航头 -->
						  <div class="panel-heading">
					  		<form class="form-inline">
						        <div class="form-group self-form">
						            <label>分类</label>
						            <input class="form-control" type="email" placeholder="请输入技术分类">
						        </div>
						        
						        <div class="form-group self-form">
						            <label>标题</label>
						            <input type="password" class="form-control" placeholder="请输入分类子标题">
						        </div>
						        <button type="button" class="btn btn-default" id="self-systematics"><span class="glyphicon glyphicon-search" aria-hidden="true"></span>查询</button>
						    </form>
						  </div>
						 
						  
						  <div class="panel-body">
						  	<div class="panel">
						  		<button type="button" class="btn btn-success add-editor"  data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增</button>
						  		<button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除</button>
						  		<button type="button" class="btn btn-info"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span>模板</button>
						  	</div>
						    <ul class="list-group">
							  <li class="list-group-item">
							    <span class="badge">14</span>
							    Cras justo odio
							  </li>
							  <li class="list-group-item">
							    <span class="badge">14</span>
							    Cras justo odio
							  </li>
							  <li class="list-group-item">
							    <span class="badge">14</span>
							    Cras justo odio
							  </li>
							  <li class="list-group-item">
							    <span class="badge">14</span>
							    Cras justo odio
							  </li>
							</ul>
							<jsp:include page="../pagination.jsp" flush="true"/>
						  </div>
					</div>
				</div>
			</section>
			<jsp:include page="editor.jsp" flush="true"/>
		</div>
		
		<!-- Main Footer -->
		<footer class="main-footer">
			<!-- To the right -->
			<div class="pull-right hidden-xs">Anything you want</div>
			<strong>
				Copyright &copy; 2016 <a href="#">Company</a>.
			</strong> All rights reserved.
		</footer>
	</div>
	<script>
		$(function() {
			$('ul.sidebar-menu li').click(function() {
				var li = $('ul.sidebar-menu li.active');
				li.removeClass('active');
				$(this).addClass('active');
			});

			$('.myLeftMenu').click(function(e) {

				var url = $(this).attr('data');
				//  console.log(url);
				$('#container').load(url);
			});
			
			/* $('.add-editor').click(function(e) {
				window.open("editor.jsp");
			}); */
			
			
			
			
		})
	</script>






</body>
</html>
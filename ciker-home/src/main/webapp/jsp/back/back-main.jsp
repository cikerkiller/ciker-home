<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ciker后台管理系统</title>
<script type="text/javascript" src="../../js/utils/jquery-3.2.1.js"></script>
<script type="text/javascript" src="../../js/utils/bootstrap.min.js"></script>
<script type="text/javascript" src="../../js/utils/adminlte.js"></script>
<script type="text/javascript" src="../../js/utils/Hogan.js"></script>
<script type="text/javascript" src="../../js/utils/ciker.js"></script>
<script type="text/javascript" src="../../js/service/menu-service.js"></script>
<script type="text/javascript" src="../../js/page/back.js"></script>

<link rel="stylesheet" type="text/css" href="../../css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="../../css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="../../css/ionicons.css">
<link rel="stylesheet" type="text/css" href="../../css/AdminLTE.css">
<link rel="stylesheet" type="text/css" href="../../css/admin.css">
<style type="text/css">

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
								<li class="user-header">
									<img src="../../img/1.png" class="img-circle" alt="User Image">
									<p>
										Alexander Pierce - Web Developer 
										<small>Member since Nov. 2012</small>
									</p>
								</li>
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
				<ul class="sidebar-menu" data-widget="tree">
				</ul>
			</section>
		</aside>

		<!-- 内容 -->
		<div class="content-wrapper">
			<!-- 内容header -->
			<section class="content-header">
				<ol class="breadcrumb nav-menu">
				{{#list}}
				  <li><a href="#" data-value="{{menuId}}">{{menuName}}</a></li>
				{{/list}}
				</ol>
			</section>
			
			
			<section class="content container-fluid">
				<div id="container">
					
				</div>
			</section>
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
</body>
</html>
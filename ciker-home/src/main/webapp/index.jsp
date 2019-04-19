<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="js/utils/jquery-3.2.1.js"></script>
<script type="text/javascript" src="js/utils/bootstrap.min.js"></script>
<script type="text/javascript" src="js/utils/Hogan.js"></script>
<script type="text/javascript" src="js/utils/ciker.js"></script>
<script type="text/javascript" src="js/page/portal/indexHome.js"></script>

<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/common.css" />
<link rel="stylesheet" type="text/css" href="css/index.css" />
</head>

<body>
	<div class="navbar navbar-inverse navbar-fixed-top">
		<!-- 100%适应屏幕 -->
		<div class="container">
			<div class="navbar-header">
				<a class="navbar-brand" href="#"><span
					class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</a>
			</div>

			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-2">
				<ul class="nav navbar-nav">
					<li><a href="#">Java</a></li>
					<li><a href="#">Big Data</a></li>
					<li><a href="#">C/C++</a></li>
					<li><a href="#">Python</a></li>
					<li><a href="#">Linux</a></li>

					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown" role="button" aria-haspopup="true"
						aria-expanded="false">Web <span class="caret"></span></a>
						<ul class="dropdown-menu">
							<li><a href="#">JavaScript</a></li>
							<li><a href="#">Css</a></li>
							<li><a href="#">Html</a></li>
							<li><a href="#">JQuery</a></li>
							<li><a href="#">BootStrap</a></li>
							<!-- <li role="separator" class="divider"></li> -->
						</ul></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown" role="button" aria-haspopup="true"
						aria-expanded="false">DataBase <span class="caret"></span></a>
						<ul class="dropdown-menu">
							<li><a href="#">Mysql</a></li>
							<li><a href="#">Oracle</a></li>
							<li><a href="#">Hbase</a></li>
							<li><a href="#">Redis</a></li>
						</ul></li>
				</ul>
				<form class="navbar-form navbar-right">
					<div class="form-group">
						<input type="text" class="form-control search" placeholder="Search">
					</div>
					<button type="submit" class="btn btn-default">搜索</button>
				</form>

			</div>
		</div>
	</div>
	<div class="container">
	<!-- 公告 -->
		<div class="row toptip"></div>
	</div>
		
	<div class="container content-container">
		
		<div class="row main">
			<div class="col-md-8">
				<div class="left-content">
					<!-- 图片显示 -->
					<div class="row photo-show"></div>
					<!-- 热门排行 -->
					<div class="row hot-rank"></div>
					<!-- 文章列表 -->
					<div class="row article-list"></div>

				</div>
			</div>
			<div class="col-md-4">
				<div class="right-content">

					<!-- 标签云 -->
					<div class="row tag-cloud"></div>
					<!-- 推荐-->
					<div class="row guess"></div>


				</div>
			</div>

		</div>

	</div>

</body>
</html>
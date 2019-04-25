<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>portal</title>
<script type="text/javascript" src="../js/utils/jquery-3.2.1.js"></script>
<script type="text/javascript" src="../js/utils/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/utils/Hogan.js"></script>
<script type="text/javascript" src="../js/utils/ciker.js"></script>
<script type="text/javascript" src="../js/service/classify-service.js"></script>
<script type="text/javascript" src="../js/page/portal/portal.js"></script>
<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="../css/font-awesome.css" />
<link rel="stylesheet" type="text/css" href="../css/common.css" />
<link rel="stylesheet" type="text/css" href="../css/portal/portal.css" />
</head>

<body>
	<div class="navbar navbar-inverse navbar-fixed-top">
		<!-- 100%适应屏幕 -->
		<div class="container">
			<div class="navbar-header">
				<a class="navbar-brand portal-home"><span
					class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</a>
			</div>

			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-2">
				<ul class="nav navbar-nav technique-nav">
					{{#childClassifies}}
					<li data-value="{{classifyId}}"><a class="technique-nav-a" href="#">{{classifyName}}</a></li>
					{{/childClassifies}}
				</ul>
				<form class="navbar-form navbar-right">
					<div class="form-group">
						<input type="text" class="form-control search" placeholder="Search">
					</div>
					<a type="submit" class="btn btn-default article-search">搜索</a>
				</form>

			</div>
		</div>
	</div>
	<div class="container toptip-container">
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
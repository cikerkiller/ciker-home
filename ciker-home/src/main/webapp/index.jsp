<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="js/utils/jquery-3.2.1.js"></script>
<script type="text/javascript" src="js/utils/bootstrap.min.js"></script>
<script type="text/javascript" src="js/utils/Hogan.js"></script>

<script type="text/javascript" src="js/utils/ciker.js"></script>
<script type="text/javascript" src="js/service/hot-ranking.js"></script>
<script type="text/javascript" src="js/service/article-service.js"></script>
<script type="text/javascript" src="js/service/comment-service.js"></script>
<script type="text/javascript" src="js/service/pagination.js"></script>
<script type="text/javascript" src="js/page/portal.js"></script>



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
		<div class="row toptip">
			<div class="col-md-12">
				<div class="self-panel">
					<strong><i class="glyphicon glyphicon-volume-up"
						aria-hidden="true"
						style="font-size: 20px; color: green; text-align: center; top: 4px;"></i></strong>
					<a class="self-bulletin text">这是一个公告！这是一个公告！这是一个公告！这是一个公告！这是一个公告！这是一个公告！</a>
				</div>
			</div>
		</div>
		<div class="row main">
			<div class="col-md-8">
				<div class="left-content" id="main-content">
					<!-- 图片显示 -->
					<div class="row">
						<div class="col-sm-12">
							<div id="myCarousel" class="carousel slide">
								<!-- 轮播（Carousel）指标 -->
								<ol class="carousel-indicators">
									<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
									<li data-target="#myCarousel" data-slide-to="1"></li>
									<li data-target="#myCarousel" data-slide-to="2"></li>
								</ol>
								<!-- 轮播（Carousel）项目 -->
								<div class="carousel-inner">
									<div class="item active">
										<img src="img/xunguang-4.jpg" alt="First slide">
										<div class="carousel-caption">标题 1</div>
									</div>
									<div class="item">
										<img src="img/xunguang-4.jpg" alt="Second slide">
										<div class="carousel-caption">标题 2</div>
									</div>
									<div class="item">
										<img src="img/xunguang-4.jpg" alt="Third slide">
										<div class="carousel-caption">标题 3</div>
									</div>
								</div>
								<!-- 轮播（Carousel）导航 -->
								<a class="left carousel-control" href="#myCarousel"
									role="button" data-slide="prev"> <span
									class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
									<span class="sr-only">Previous</span>
								</a> <a class="right carousel-control" href="#myCarousel"
									role="button" data-slide="next"> <span
									class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
									<span class="sr-only">Next</span>
								</a>
							</div>
						</div>
					</div>

					<!-- 热门排行 -->
					<div class="row">
						<div class="col-sm-12">
							<div class="panel panel-default">
								<div class="panel-heading">
									<h3 class="panel-title">热门排行</h3>
								</div>
								<div class="divider"></div>
								<div class="panel-body">
									<span class="badge first">1</span>Panel content
								</div>
								<div class="panel-body">
									<span class="badge second">2</span>Panel content
								</div>
								<div class="panel-body ">
									<span class="badge third">3</span> Panel content
								</div>
								<div class="panel-body">
									<span class="badge">4</span> Panel content
								</div>
								<div class="panel-body">
									<span class="badge">5</span>Panel content
								</div>
							</div>
						</div>
					</div>
					<!-- 文章列表 -->
					<div class="row">
						<div class="col-sm-12 articile-list">
							{{#list}}
							<div class="panel panel-default articile">
								<div class="panel-heading">
									<a href="#" class="articile-details" data-value="{{articleId}}">{{{articleTitle}}}</a>
								</div>
								<div class="panel-body">{{{content}}}</div>
							</div>
							{{/list}}
							<div class="pg-content">
								<nav aria-label="Page navigation">
								<ul class="pagination article-pagination">
								    {{#pageArray}}
								    {{#disabled}}
								        <span class="pg-item disabled" data-value="{{value}}">{{name}}</span>
								    {{/disabled}}
								    {{^disabled}}
								        {{#active}}
								            <span class="pg-item active" data-value="{{value}}">{{name}}</span>
								        {{/active}}
								        {{^active}}
								            <span class="pg-item" data-value="{{value}}">{{name}}</span>
								        {{/active}}
								    {{/disabled}}
								    {{/pageArray}}
								</ul>
								</nav>
							</div>
						</div>
					</div>

				</div>
				<div class="left-content" id="article-content"  style="display: none">
					<div class="panel panel-default content">
						<input id="articleId" type="hidden" value="{{articleId}}"/>
						<!-- 文章导航 -->
						<div class="panel-heading self-heading">
							<h3 class="panel-title">
								{{articleTitle}}
							</h3>
						</div>
						<div class="divider"></div>
						<!-- 文章主体 -->
						<div class="panel-body">
							<p id="article-body">{{{content}}}</p>
						</div>
					</div>
					<div class="panel panel-default comment">
						<!-- 我的评论-->
						<div class="panel-heading self-heading">
							<h3 class="panel-title">
								我的评论
							</h3>
						</div>
						<div class="divider"></div>
						<!-- 评论列表 -->
						<div class="panel-body">
							 <textarea class="form-control" id="commentContent" rows="3" style="min-width: 90%"></textarea>
							 <button type="button" class="btn btn-primary comment-sub">提交评论</button>
						</div>
						<div class="comment-container">
							{{#list}}
							<div class="panel-body comment-list">
								<img class="comment-people" src="img/comment-people.png"/>
								<div class="comment-body">
									<span class="">{{commentContent}}</span>
									<div class="comment-date">{{commentDate}}</div>
								</div>
							</div>
							{{/list}}
							<div class="pg-content">
								<nav aria-label="Page navigation">
									<ul class="pagination comment-pagination">
									    {{#pageArray}}
									    {{#disabled}}
									        <span class="pg-item disabled" data-value="{{value}}">{{name}}</span>
									    {{/disabled}}
									    {{^disabled}}
									        {{#active}}
									            <span class="pg-item active" data-value="{{value}}">{{name}}</span>
									        {{/active}}
									        {{^active}}
									            <span class="pg-item" data-value="{{value}}">{{name}}</span>
									        {{/active}}
									    {{/disabled}}
									    {{/pageArray}}
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div class="col-md-4">
				<div class="right-content">
					<!-- 个人信息 -->
					<div class="myself">
						<div class="row">
							<div class="col-sm-12">
								<div class="thumbnail">
									<div class="self-img">
										<img src="img/self.jpg" alt="">
									</div>
									<div class="caption self-info">
										<h3>Thumbnail label</h3>
									</div>
									<div class="self-view">
										<p>
											<a href="#" class="btn btn-primary query" role="button">查看</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 标签云 -->
					<div class="tag">
						<div class="panel panel-default">
							<div class="panel-heading">
								<h3 class="panel-title">标签云</h3>
							</div>
							<div class="divider"></div>
							<div class="panel-body">
								<span class="label label-success"><a href="#">JAVA</a></span> <span
									class="label label-success"><a href="#">大数据</a></span> <span
									class="label label-success"><a href="#">C++</a></span> <span
									class="label label-success"><a href="#">Linux</a></span> <span
									class="label label-success"><a href="#">市场</a></span> <span
									class="label label-success"><a href="#">经济</a></span> <span
									class="label label-success"><a href="#">健康</a></span> <span
									class="label label-success"><a href="#">自由</a></span> <span
									class="label label-success"><a href="#">女人</a></span> <span
									class="label label-success"><a href="#">爱情</a></span> <span
									class="label label-success"><a href="#">JAVA</a></span> <span
									class="label label-success"><a href="#">大数据</a></span> <span
									class="label label-success"><a href="#">C++</a></span> <span
									class="label label-success"><a href="#">Linux</a></span> <span
									class="label label-success"><a href="#">市场</a></span> <span
									class="label label-success"><a href="#">经济</a></span> <span
									class="label label-success"><a href="#">健康</a></span> <span
									class="label label-success"><a href="#">自由</a></span> <span
									class="label label-success"><a href="#">女人</a></span> <span
									class="label label-success"><a href="#">爱情</a></span>
							</div>
						</div>
					</div>
					<!-- 推荐喜欢 -->
					<div class="guess">
						<div class="panel panel-default">
							<div class="panel-heading">
								<h3 class="panel-title">猜你喜欢</h3>
							</div>
							<div class="divider"></div>
							<div class="panel-body">
								<ul class="list-group">
									<li class="list-group-item">Cras justo odio</li>
									<li class="list-group-item">Dapibus ac facilisis in</li>
									<li class="list-group-item">Morbi leo risus</li>
									<li class="list-group-item">Porta ac consectetur ac</li>
									<li class="list-group-item">Vestibulum at eros</li>
								</ul>
							</div>
						</div>
					</div>


				</div>
			</div>

		</div>
	</div>

</body>
<script>
	var text = $('.text');
	var initMarginLeft = '6px';
	text.css({
		"margin-left" : initMarginLeft
	});
</script>
</html>
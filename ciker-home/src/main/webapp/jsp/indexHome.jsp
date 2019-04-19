<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

<script type="text/javascript" src="../../js/service/hot-ranking.js"></script>
<script type="text/javascript" src="../../js/service/article-service.js"></script>
<script type="text/javascript" src="../../js/service/comment-service.js"></script>
<script type="text/javascript" src="../../js/service/bulletin-service.js"></script>
<script type="text/javascript" src="../../js/service/image-service.js"></script>
<script type="text/javascript" src="../../js/service/pagination.js"></script>
<script type="text/javascript" src="../../js/page/portal.js"></script>

<link rel="stylesheet" type="text/css" href="../../css/common.css" />
<link rel="stylesheet" type="text/css" href="../../css/index.css" />
</head>

		<div class="row toptip">
			<div class="col-md-12">
				<div class="self-panel bulletin">
					<strong>
						<i class="glyphicon glyphicon-volume-up" aria-hidden="true" style="font-size: 20px; color: green; text-align: center; top: 4px;"></i>
					</strong>
					<a class="self-bulletin">{{bulletinContent}}</a>
					<span class="glyphicon glyphicon-remove bulletin-remove"></span>
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
									{{#list}}
									<li data-target="#myCarousel" data-slide-to="{{rowno}}" class="image-no"></li>
									{{/list}}
								</ol>
								<!-- 轮播（Carousel）项目 -->
								<div class="carousel-inner">
									
								</div>
								<!-- 轮播（Carousel）导航 -->
								<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"> 
									<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
									<span class="sr-only">Previous</span>
								</a> 
								<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"> 
									<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
									<span class="sr-only">Next</span>
								</a>
							</div>
						</div>
					</div>

					<!-- 热门排行 -->
					<div class="row">
						<div class="col-sm-12">
							<div class="panel panel-default hot-article">
								<div class="panel-heading">
									<h3 class="panel-title">热门排行</h3>
								</div>
								<div class="divider"></div>
								{{#list}}
								<div class="panel-body">
									<span class="badge rank" data-value ="{{rank}}">{{rank}}</span> 
									<a class="hot-rank" data-value ="{{articleId}}">{{articleTitle}}</a>
								</div>
								{{/list}}
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
					<!-- <div class="myself">
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
					</div> -->
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
					<!-- 推荐-->
					<div class="guess">
						<div class="panel panel-default">
							<div class="panel-heading">
								<h3 class="panel-title">热情推荐</h3>
							</div>
							<div class="divider"></div>
							<div class="panel-body">
								<ul class="list-group recommend">
									{{#list}}
									<li class="list-group-item"><a class="recommend-article" data-value="{{articleId}}">{{articleTitle}}</a></li>
									{{/list}}
								</ul>
							</div>
						</div>
					</div>


				</div>
			</div>

		</div>
</html>
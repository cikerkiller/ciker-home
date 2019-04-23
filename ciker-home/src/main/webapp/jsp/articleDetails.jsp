<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="../js/service/comment-service.js"></script>
<script type="text/javascript" src="../js/service/pagination.js"></script>
<!-- <script type="text/javascript" src="../js/page/portal/commentList.js"></script> -->
<script type="text/javascript" src="../js/page/portal/articleDetails.js"></script>
<link rel="stylesheet" type="text/css"
	href="../css/portal/articleContent.css" />
</head>

<div class="row">
	<div class="col-sm-12">
		<div class="row article-content">
			<div class="col-sm-12 article-content-body">
				<div class="panel panel-default">
					<input id="articleId" type="hidden" value="{{articleId}}" />
					<!-- 文章导航 -->
					<div class="panel-heading self-heading">
						<h5 class="panel-title articleTitle">{{articleTitle}}</h5>
						<p class="article-auth">
							<span class="article-auth-element"> 
								<i class="fa fa-user"></i>
								<a class="article-auth-user">{{creatior}}</a>
							</span> 
							<span class="article-auth-element"> 
								<i class="fa fa-clock-o"></i> 
								<span class="article-auth-time">{{lastUpdateDate}}</span>
							</span> 
							<span class="article-auth-element"> 
								<i class="fa fa-eye"></i>
								<span class="article-auth-scan"> 
									<span class="count">{{viewingCount}}</span>
									浏览
								</span>
							</span>

							</span> 
							<span class="article-auth-element"> 
								<i class="fa fa-comments-o"></i> 
								<span class="article-auth-comment">
									<span class="count">{{commentNumber}}</span> 评论
								</span>
							</span> 
							<span class="article-auth-element"> 
								<i class="fa fa-thumbs-up"></i> 
								<a class="article-auth-like"> 
									<input type="hidden" value="{{articleId}}"/>
									<span class="count">{{likeNumber}}</span> 点赞
								</a>
							</span>
						</p>
					</div>
					<div class="divider"></div>
					<!-- 文章主体 -->
					<div class="panel-body">
						<div class="article-body">{{{content}}}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row comment">
			<div class="col-sm-12">
				<div class="panel panel-default">
					<!-- 我的评论-->
					<div class="panel-heading self-heading">
						<h3 class="panel-title">我的评论</h3>
					</div>
					<div class="divider"></div>
					<!-- 评论列表 -->
					<div class="panel-body">
						<textarea class="form-control" id="commentContent" rows="3"
							style="min-width: 90%"></textarea>
						<button type="button" class="btn btn-primary comment-sub">提交评论</button>
					</div>
					<div class="comment-container">
						{{#list}}
						<div class="panel-body comment-list">
							<img class="comment-people" src="../img/comment-people.png" />
							<div class="comment-body">
								<span class="">{{commentContent}}</span>
								<div class="comment-date">{{commentDate}}</div>
							</div>
						</div>
						{{/list}}
					</div>
					<div class="pg-content">
						<nav aria-label="Page navigation">
							<ul class="pagination comment-pagination">
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


</html>
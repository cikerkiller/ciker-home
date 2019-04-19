<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="js/service/comment-service.js"></script>
<script type="text/javascript" src="js/service/pagination.js"></script>
<script type="text/javascript" src="js/page/portal/commentList.js"></script>
</head>

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
				<img class="comment-people" src="img/comment-people.png" />
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

</html>
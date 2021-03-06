<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="../../js/utils/summernote.min.js"></script>
<script type="text/javascript" src="../../js/service/article-service.js"></script>
<script type="text/javascript" src="../../js/service/classify-service.js"></script>
<script type="text/javascript" src="../../js/service/pagination.js"></script>
<script type="text/javascript" src="../../js/page/back/article.js"></script>
<link rel="stylesheet" type="text/css" href="../../css/summernote.css" />
<link rel="stylesheet" type="text/css" href="../../css/back/article.css" />
</head>
<div class="panel panel-default">
	<!-- 导航头 -->
	<div class="panel-heading">
		<form class="form-inline">
			<!-- <div class="form-group self-form">
				<label>分类</label> <select class="form-control">
					<option>所有</option>
					<option>Hot Dog</option>
					<option>Fries</option>
					<option>Soda</option>
					<option>Burger</option>
					<option>Shake</option>
					<option>Smile</option>
				</select>
			</div> -->

			<div class="form-group self-form">
				<label>文档名称</label> 
				<input type="text" class="form-control article-name" placeholder="请输入文档名称">
			</div>
			<button type="button" class="btn btn-default article-search" id="self-systematics">
				<span class="glyphicon glyphicon-search" aria-hidden="true"></span>查询
			</button>
		</form>
	</div>


	<div class="panel-body">
		<div class="panel panel-article">
			<button type="button" class="btn btn-success add-editor">
				<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
			</button>
			<button type="button" class="btn btn-danger btn-del">
				<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
			</button>
			<button type="button" class="btn btn-info">
				<span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span>模板
			</button>
			<span class="error-msg"></span>
		</div>
		<div class="article-list">
			<table class="table articleDetail">
				<tr>
					<th><input type="checkbox" class="article-check-all" /></th>
					<th>文档名称</th>
					<th>文档分类</th>
					<th>创建人</th>
					<th>创建时间</th>
					<th>最后更新人</th>
					<th>最后更新时间</th>
					<th>浏览量</th>
					<th>点赞数</th>
					<th>评论数</th>
					<th>是否推荐</th>
					<th>文档状态</th>
				</tr>
			</table>
			<div class="pg-content">
				<nav aria-label="Page navigation">
					<ul class="pagination articlelist-pagination">
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>

<!-- 模态框（Modal） -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	    <div class="modal-dialog">
	        <div class="modal-content">
	            <div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
	                    ×
	                </button>
	                <h4 class="modal-title" id="myModalLabel">新增文档</h4>
	            </div>
	            <form id="form_data">
	            <div class="modal-body">
	                <div class="panel panel-default">
						<div class="panel-heading">
							<div class="self-operating">
								<button type="button" class="btn btn-success self-button self-model-sub">提交</button>
								<button type="button" class="btn btn-info self-button "  data-dismiss="modal">取消</button>
							</div>
						</div>
						<div class="panel-heading">
							<form role="form article-model-form">
								<input type="hidden" class="model-article-id"/>
								<input type="hidden" class="model-article-classify-id"/>
								<div class="form-group">
									<label>文章标题</label> 
									<input type="text" class="form-control self-control model-article-title" placeholder="请输入标题">
								</div>
								<div class="classify-select-div">
									<div class="form-group classify-select">
										
									</div>
									<div class="form-group classify-select-two"  style="display: none">
										
									</div>
									<div class="form-group classify-select-three" style="display: none">
										
									</div>
								</div>
							</form>
						</div>
						<div class="divider"></div>
						<div class="panel-body">
							<div class="form-group">
								<!-- 编辑器 -->
								<div id="summernote"></div>
							</div>
						</div>
					</div>
	            </div>
	            </form>
	        </div>
	    </div>
	</div>

</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<script type="text/javascript" src="../../js/service/pagination.js"></script>
<script type="text/javascript" src="../../js/service/image-service.js"></script>
<script type="text/javascript" src="../../js/page/back/image.js"></script>
<link rel="stylesheet" type="text/css" href="../../css/back/image.css" />
</head>
<div class="panel panel-default">

	<div class="panel-body">
		<div class="panel self-panel">
			<button type="button" class="btn btn-success add-editor">
				<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
			</button>
			<button type="button" class="btn btn-danger btn-del">
				<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
			</button>
			<span class="error-msg"></span>
		</div>
		<div class="image-list">
			{{#list}}
			<div class="image-list-item">
				<input class="imageId"  type="hidden" value="{{imageId}}">
				<input class="isRelease" type="hidden" value="{{isRelease}}">
				<img alt="{{imageTitle}}" data-value="{{imageContent}}">
			</div>
			{{/list}}
			<div class="pg-content">
				<nav aria-label="Page navigation">
					<ul class="pagination list-pagination">
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
	                <h4 class="modal-title" id="myModalLabel">新增图片</h4>
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
						<div class="panel-body">
							<div class="form-group">
									<label>图片标题</label> 
									<input type="text" class="form-control self-control model-image-title" placeholder="请输入标题">
								</div>
							<div class="form-group">
								<input type="file" id="upload_file"/>
								<span id="update_file_label"></span>
								<div class="image-show">
									<img id="base64_output"/>
								</div>
							</div>
						</div>
					</div>
	            </div>
	            </form>
	        </div>
	    </div>
	</div>

</html>
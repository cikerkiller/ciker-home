<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<script type="text/javascript" src="../../js/service/pagination.js"></script>
<script type="text/javascript" src="../../js/service/bulletin-service.js"></script>
<script type="text/javascript" src="../../js/page/back/bulletin.js"></script>
<link rel="stylesheet" type="text/css" href="../../css/summernote.css" />
<link rel="stylesheet" type="text/css" href="../../css/back/bulletin.css" />
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
		<div class="bulletin-list">
			<table class="table bulletin-table">
				<tr>
					<th><input type="checkbox" class="check-all" /></th>
					<th>公告名称</th>
					<th>创建人</th>
					<th>创建时间</th>
					<th>是否公告</th>
				</tr>
			</table>
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
						<div class="panel-body">
							<div class="form-group">
								<textarea class="bulletin-content" rows="2" cols="70"></textarea>
							</div>
						</div>
					</div>
	            </div>
	            </form>
	        </div>
	    </div>
	</div>

</html>
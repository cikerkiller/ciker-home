<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="../../css/summernote.css" />
<script type="text/javascript" src="../../js/summernote.min.js"></script>

<script type="text/javascript">
	$(function() {
		$("#summernote").summernote();
	});
</script>

<style type="text/css">
.title {
	text-align: center;
}

.self-operating {
	text-align: center;
}

.self-button {
	margin: 0 15px;
}
.self-control{
	display :inline-block;
	width: 80%;
	margin-left: 50px;
}
.modal-dialog{
	width: 80%;
}

</style>
</head>

	<!-- 模态框（Modal） -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	    <div class="modal-dialog">
	        <div class="modal-content">
	            <div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
	                    ×
	                </button>
	                <h4 class="modal-title" id="myModalLabel"> 模态框（Modal）标题</h4>
	            </div>
	            <form id="form_data">
	            <div class="modal-body">
	                <div class="panel panel-default">
						<div class="panel-heading">
							<div class="self-operating">
								<button type="button" class="btn btn-success self-button">提交</button>
								<button type="button" class="btn btn-info self-button "  data-dismiss="modal">取消</button>
							</div>
						</div>
						<div class="panel-heading">
							<form role="form">
								<div class="form-group">
									<label>分类</label> 
									<select class="form-control self-control">
										<option>踢足球</option>
										<option>游泳</option>
										<option>慢跑</option>
										<option>跳舞</option>
									</select>
								</div>
								<div class="form-group">
									<label>标题</label> 
									<input type="password" class="form-control self-control" placeholder="请输入分类子标题">
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
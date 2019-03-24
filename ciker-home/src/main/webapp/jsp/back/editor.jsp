<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="../../css/summernote.css" />
<script type="text/javascript" src="../../js/summernote.min.js"></script>

<script type="text/javascript">
	$(function() {
       	$('#summernote').summernote();
       	findClassify();
        $(".self-sub").click(function(){
        	var summernoteHtml = $('#summernote').summernote('code');
        	alert(summernoteHtml);
        	var s=$('#self-select-one').val();
        	alert(s);
        	var ArticleVO=new Object();
        	ArticleVO.articleId = 123;
        	ArticleVO.classifyId = 123;
        	ArticleVO.articleTheme = '123';
        	ArticleVO.articleTitle = '123';
        	ArticleVO.content = summernoteHtml;
        	/* $.ajax({
                 url: "../../it/back/save.do",
                 cache: false,
                 contentType: false,
                 processData: false,
                 type: 'POST',
                 data: JSON.stringify(ArticleVO),//必要
                 dataType:"json",
                 contentType:"application/json",
                 success: function (data) {
                	 var messageEntity = JSON.stringify(data);
                	 alert(messageEntity);
                 }
             }); */
        });
    		
    });
 
	function findClassify(){
		$.ajax({
            url: "../../it/back/searchClassifyOne.do",
            cache: false,
            contentType: false,
            processData: false,
            type: 'GET',
            success: function (data) {
           	 var messageEntity = JSON.stringify(data);
           	 alert(messageEntity);
            }
        });
		
	}
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
								<button type="button" class="btn btn-success self-button self-sub">提交</button>
								<button type="button" class="btn btn-info self-button "  data-dismiss="modal">取消</button>
							</div>
						</div>
						<div class="panel-heading">
							<form role="form">
								<div class="form-group">
									<label>分类</label> 
									<select id="self-select-one" class="form-control self-control">
										<option>踢足球</option>
										<option>游泳</option>
										<option>慢跑</option>
										<option>跳舞</option>
									</select>
								</div>
								<div class="form-group hidden">
									<label>子类</label> 
									<select id="self-select-second" class="form-control self-control">
										<option>踢足球</option>
										<option>游泳</option>
										<option>慢跑</option>
										<option>跳舞</option>
									</select>
								</div>
								<div class="form-group">
									<label>主题</label> 
									<input type="text" class="form-control self-control" placeholder="请输入主题">
								</div>
								<div class="form-group">
									<label>标题</label> 
									<input type="text" class="form-control self-control" placeholder="请输入标题">
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
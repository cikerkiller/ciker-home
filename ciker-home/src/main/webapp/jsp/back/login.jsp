<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="../../js/utils/jquery-3.2.1.js"></script>
<script type="text/javascript" src="../../js/utils/bootstrap.min.js"></script>
<script type="text/javascript" src="../../js/utils/ciker.js"></script>
<link rel="stylesheet" type="text/css" href="../../css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="../../css/font-awesome.css">
<style type="text/css">
	body {
		background: #fff url("../../img/login-1.jpg") no-repeat left top;
		 background-size:100%;
		animation-name: myfirst;
		animation-duration: 12s;
		/*变换时间*/
		animation-delay: 2s;
		/*动画开始时间*/
		animation-iteration-count: infinite;
		/*下一周期循环播放*/
		animation-play-state: running;
		/*动画开始运行*/
	}
	
	@keyframes myfirst { 
		0% {
			background: #fff url("../../img/login-1.jpg") no-repeat left top;
		 	background-size:100%;
		}
		
		34% {
			background: #fff url("../../img/login-2.jpg") no-repeat left top;
		 	background-size:100%;
		}
		67% {
			background: #fff url("../../img/login-3.jpg") no-repeat left top;
		 	background-size:100%;
		}
		100% {
			background: #fff url("../../img/login-1.jpg") no-repeat left top;
		 	background-size:100%;
		}
	}
	.form {
		background: rgba(255, 255, 255, 0.2);
		width: 400px;
		margin: 120px auto;
	}
	/*阴影*/
	.fa {
		display: inline-block;
		top: 27px;
		left: 6px;
		position: relative;
		color: #ccc;
	}
	
	input[type="text"], input[type="password"] {
		padding-left: 26px; 
	}
	
	.checkbox {
		padding-left: 21px;
	}
</style>
<script type="text/javascript">
	$(function(){
		$("button").click(function(){
			window.location.href="../../jsp/back/back-main.jsp";
		});
	});
	
	

</script>
</head>
<body>
	<div class="container">
		<div class="form row">
			<div class="form-horizontal col-md-offset-3" id="login_form">
				<h3 class="form-title">LOGIN</h3>
				<div class="col-md-9">
					<div class="form-group">
						<i class="fa fa-user fa-lg"></i> 
						<input class="form-control required" type="text" placeholder="Username"
							id="username" name="username" autofocus="autofocus"
							maxlength="20" />
					</div>
					<div class="form-group">
						<i class="fa fa-lock fa-lg"></i> 
						<input class="form-control required" type="password"
							placeholder="Password" id="password" name="password"
							maxlength="8" />
					</div>
					<div class="form-group">
						<label class="checkbox"> 
						<input type="checkbox" name="remember" value="1" />记住我
						</label>
					</div>
					<div class="form-group col-md-offset-9">
						<button type="submit" class="btn btn-success pull-right" name="submit">登录</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
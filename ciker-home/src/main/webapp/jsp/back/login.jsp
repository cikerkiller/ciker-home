<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="../../js/utils/jquery-3.2.1.js"></script>
<script type="text/javascript" src="../../js/utils/bootstrap.min.js"></script>
<script type="text/javascript" src="../../js/utils/ciker.js"></script>
<script type="text/javascript" src="../../js/service/user-service.js"></script>
<script type="text/javascript" src="../../js/page/back/login.js"></script>
<link rel="stylesheet" type="text/css" href="../../css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="../../css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="../../css/back/login.css">

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
						<button type="submit" class="btn btn-success pull-right" id="login-submit">登录</button>
					</div>
					<span class="error-msg"></span>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
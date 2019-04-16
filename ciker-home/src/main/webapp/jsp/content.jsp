<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

<style type="text/css">
	.panel .panel-default{
		margin: 5px 0;
	}
	.self-breadcrumb{
		margin-bottom: 5px;
		padding: 4px 15px;
	}
	.self-heading{
		padding: 2px 5px;
	}
</style>

</head>
<body>
	<div class="panel panel-default">
	   <jsp:include page="content-header.jsp" flush="true"/>
	   <div class="divider"></div>
	   <!-- 文章主体 -->
	   <div class="panel-body">
	   		<jsp:include page="content-main.jsp" flush="true"/>
	   </div>
	 </div>
</body>
</html>
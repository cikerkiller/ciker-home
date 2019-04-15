<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>首页显示</title>
</head>

<body>
	<jsp:include page="photo.jsp" flush="true" />
	<jsp:include page="hot-ranking.jsp" flush="true" />
	<jsp:include page="article-list.jsp" flush="true" />
</body>
</html>

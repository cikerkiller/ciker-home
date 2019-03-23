<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<style>
.label{
	text-align: center;
	margin-left: 15px;
	font-size:100%;
	line-height:2;
/* 	padding:.2em 3em .3em; */
}
/* .panel{
	margin : 15px 0;
} */
</style>

<div class="panel-group" >
	<jsp:include page="myself.jsp" flush="true"/>
	<jsp:include page="TagCloud.jsp" flush="true"/>
	<jsp:include page="TagCloud.jsp" flush="true"/>
	<jsp:include page="guess.jsp" flush="true"/>
	<jsp:include page="guess.jsp" flush="true"/>
</div>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="row">
	<div class="col-sm-12">
		<div class="panel panel-default articile-list">
		    {{#list}}
		  <div class="panel-body">
		  	<span class="badge first">1</span>{{{content}}}
		  </div>
		  {{/list}}
		  
		  <jsp:include page="pagination.jsp" flush="true"/>
		</div>
	</div>
</div>
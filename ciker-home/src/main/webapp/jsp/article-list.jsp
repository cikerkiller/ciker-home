<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<style>
	.articile{
		margin: 5px 0;
	}


</style>
<div class="row">
	<div class="col-sm-12 articile-list">
		    {{#list}}
		<div class="panel panel-default articile">
			<div class="panel-heading"><a href="#" class="articile-details"  data-value="{{articleId}}">{{{articleTitle}}}</a></div>
		  <div class="panel-body">
		  	{{{content}}}
		  </div>
		</div>
		  {{/list}}
		  <jsp:include page="pagination.jsp" flush="true"/>
	</div>
</div>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<style>
	.first{
		background-color:red;
	}
	.second{
		background-color:green;
	}
	.third{
		background-color:blue;
	}
</style>
<div class="row">
	<div class="col-sm-12">
		<div id="myCarousel" class="carousel slide">
		    <!-- 轮播（Carousel）指标 -->
		    <ol class="carousel-indicators">
		        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		        <li data-target="#myCarousel" data-slide-to="1"></li>
		        <li data-target="#myCarousel" data-slide-to="2"></li>
		    </ol>   
		    <!-- 轮播（Carousel）项目 -->
		    <div class="carousel-inner">
		        <div class="item active">
		            <img src="img/xunguang-4.jpg" alt="First slide">
		            <div class="carousel-caption">标题 1</div>
		        </div>
		        <div class="item">
		            <img src="img/xunguang-4.jpg" alt="Second slide">
		            <div class="carousel-caption">标题 2</div>
		        </div>
		        <div class="item">
		            <img src="img/xunguang-4.jpg" alt="Third slide">
		            <div class="carousel-caption">标题 3</div>
		        </div>
		    </div>
		    <!-- 轮播（Carousel）导航 -->
		    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
		        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		        <span class="sr-only">Previous</span>
		    </a>
		    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
		        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		        <span class="sr-only">Next</span>
		    </a>
		</div>
	</div>
</div>
<div class="row">
	<div class="col-sm-12">
		<div class="panel panel-default">
		  <div class="panel-heading">
		    <h3 class="panel-title">热门排行</h3>
		  </div>
		  <div class="divider"></div>
		  <div class="panel-body">
		    <span class="badge first">1</span>Panel content
		  </div>
		  <div class="panel-body">
		    <span class="badge second">2</span>Panel content
		  </div>
		  <div class="panel-body ">
		   <span class="badge third">3</span> Panel content
		  </div>
		  <div class="panel-body">
		   <span class="badge">4</span> Panel content
		  </div>
		  <div class="panel-body">
		    <span class="badge">5</span>Panel content
		  </div>
		</div>
	</div>
</div>
<div class="row">
	<div class="col-sm-12">
		<div class="panel panel-default">
		  <div class="panel-body">
		    <span class="badge first">1</span>Panel content
		  </div>
		  <div class="panel-body">
		    <span class="badge first">1</span>Panel content
		  </div>
		  <div class="panel-body">
		    <span class="badge first">1</span>Panel content
		  </div>
		  <div class="panel-body">
		    <span class="badge first">1</span>Panel content
		  </div>
		  <div class="panel-body">
		    <span class="badge first">1</span>Panel content
		  </div>
		  <div class="panel-body">
		    <span class="badge first">1</span>Panel content
		  </div>
		  <div class="panel-body">
		    <span class="badge first">1</span>Panel content
		  </div>
		  <jsp:include page="pagination.jsp" flush="true"/>
		  
		</div>
	</div>
</div>
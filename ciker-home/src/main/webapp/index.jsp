<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="js/jquery-3.2.1.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>

<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/common.css" />
<style type="text/css">

body{
	background-color: #eee;
}

.main{
	padding-top: 5px;
	float: none;
}
.toptip{
	margin-top: 50px;
	float: none;
}

/* div{
	border:1px solid black
} */

.right-content{
	margin-left: -18px;
}
.self-bulletin{
	padding-bottom:5px;
	font-size: 16px;
	color:black;
	padding-left: 10px;
}
.self-panel{
	margin: 10px 0;
	padding: 0 10px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
}

.text {
      position: relative;
      display: inline-block;
      white-space: nowrap;
      /*animation:scroll 5s 0s linear infinite;*/
      animation-name: scroll;
      animation-duration: 5s;
      animation-delay: 10ms;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      -webkit-animation-name: scroll;
      -webkit-animation-delay: 10ms;
      -webkit-animation-duration: 5s;
      -webkit-animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      -moz-animation-name: scroll;
      -moz-animation-delay: 10ms;
      -moz-animation-duration: 5s;
      -moz-animation-timing-function: linear;
      -moz-animation-iteration-count: infinite;
  }
   @-webkit-keyframes scroll {
     36% {
       margin-left: 36%;
     }
   }
   @-moz-keyframes scroll {
    36% {
       margin-left: 36%;
     }
   }
   @-ms-keyframes scroll {
     36%  {
       margin-left: 36%;
     }
   }

 .text:hover {
      -webkit-animation-play-state: paused;
    }
</style>
</head>

<body>
	<jsp:include page="jsp/navbar.jsp" flush="true"/>
	<div class="container">
			<div class="row toptip">
			    <div class="col-md-12">
			    	<div class="self-panel">
			    		<strong><i class="glyphicon glyphicon-volume-up" aria-hidden="true" style="font-size: 20px;color:green;text-align: center;top: 4px;"></i></strong>
					   <a class="self-bulletin text">这是一个公告！这是一个公告！这是一个公告！这是一个公告！这是一个公告！这是一个公告！</a>
					</div>
			    </div>
			</div>
			<div class="row main">
			    <div class="col-md-8">
			    	<div class="left-content">
			    		<jsp:include page="jsp/left-body.jsp" flush="true"/>
			    	</div>
			    	
			    </div>
			    <div class="col-md-4">
			    	<div class="right-content">
			    			<jsp:include page="jsp/right-body.jsp" flush="true"/>
			    	</div>
			    
			    </div>
			</div>
	</div>

</body>
<script>
  var text = $('.text');
  var initMarginLeft = '6px';
  text.css({"margin-left": initMarginLeft});
</script>
</html>
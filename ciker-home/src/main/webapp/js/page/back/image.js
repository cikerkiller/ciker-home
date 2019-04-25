
var image = {
	data: {
        listParam : {
            pageNum     : 1,
            pageSize    : 6
        }
	},
	pageHtml : {},
    init: function(){
        this.bindEvent();
        this.onLoadHtml();
        this.loadImageList();
    },
    onLoadHtml:function(){
    	this.pageHtml.imageListHtml = 	$(".image-list").html();
    },
    bindEvent : function(){
        var _this = this;
        $(document).off('click', '.add-editor');
        $(document).on('click', '.add-editor', function(){
        	$('#base64_output').removeAttr('src');
        	$('.image-show').hide();
    		$("#myModal").modal('show');
        });
        $(document).off('click', '.self-model-sub');
        $(document).on('click', '.self-model-sub', function(){
        	imageService.saveImage({
        		imageTitle : $(".model-image-title").val(),
        		imageContent : $('#base64_output').attr('src')
        	},function(res){
        		 $("#myModal").modal('hide');
        	},function(msg){
        		
        	});
        });
        $(document).off('click', '.image-list-item img');
        $(document).on('click', '.image-list-item img', function(){
        	$(this).css('border','3px solid #808080')
        	$(this).addClass('img-active');
        	
        });
        $(document).off('dblclick', '.image-list-item img');
        $(document).on('dblclick', '.image-list-item img', function(){
        	var imageId = $(this).parent().children('.imageId').val();
        	var isRelease = $(this).parent().children('.isRelease').val();
        	if(isRelease==0){
        		imageService.releaseImage({imageId:imageId},function(res){
        			_this.loadImageList();
        		},function(msg){
        			_this.showMsg($(".error-msg"),"<p class=\"err-tip\">"+msg+"</p>",3000);
        		});
        	}else{
        		imageService.unReleaseImage({imageId:imageId},function(res){
        			_this.loadImageList();
        		},function(msg){
        			_this.showMsg($(".error-msg"),"<p class=\"err-tip\">"+msg+"</p>",3000);
        		});
        	}
        	
        });
        $(document).on('change', '#upload_file', function(){
        	_this.gen_base64();
        	$('.image-show').show();
        });
        $(document).off('click', '.btn-del');
        $(document).on('click', '.btn-del', function(){
        	var array=[];
    		$(".img-active").each(function(i){
    			array[i] = $(this).parent().children('.imageId').val();
    		});
    		if(array.length != 0){
    			if(confirm("确定删除？")){
    				imageService.batchDeleteImage({"imageIds":array},function(res){
    					_this.loadImageList();
    					_this.showMsg($(".error-msg"),"<p class=\"err-tip\">"+res+"</p>",1000);
    					
    				},function(msg){
    					_this.showMsg($(".error-msg"),"<p class=\"err-tip\">加载失败，请刷新后重试</p>",3000);
    				});
    			}
    		}else{
    			_this.showMsg($(".error-msg"),"<p class=\"err-tip\">请选择一个文档</p>",1000);
    		}
        });
        $(document).on('change', '.check-all', function(){
        	if($(this).prop("checked")){
        		// 全选
        		$(".check-single").prop("checked",true);
        	}else{
        		// 全不选
        		$(".check-single").prop("checked",false);
        	}
        });
        
        
    },
    showMsg : function(res,msg,time){
    	res.html(msg);
    	setTimeout( function(){
    		res.html("");
		},time);
    },
    
    gen_base64 : function() {
		var file = $('#upload_file').get(0).files[0];
		if(!/image\/\w+/.test(file.type)){
			alert("请确保文件为图像类型");
			return false;
		}
		var r = new FileReader();  //本地预览
		r.onload = function(){
			$('.image-show').css('width',this.width);
			$('.image-show').css('height',this.height);
			$('#base64_output').attr('src',r.result);
		}
		r.readAsDataURL(file); 
	},
    loadImageList : function(){
    	var _this = this;
    	var imageListHtml = '';
    	var $listCon=$(".image-list");
    	imageService.queryImages(_this.data.listParam,function(res){
    		// 渲染html
    		imageListHtml = ciker.renderHtml(_this.pageHtml.imageListHtml, res);
    		$listCon.html(imageListHtml);
    		$(".image-list-item img").each(function(){
    			$(this).attr("src",$(this).data("value"));
    			if($(this).parent().children('.isRelease').val() == 1){
    				$(this).css('border','1px solid black');
    			}
    			$(this).css('width','30%');
    			$(this).css('height','60%');
    			$(this).removeAttr('data-value');
    		});
    		
    		var onSelectPage = function(pageNum){
             	 _this.data.listParam.pageNum = pageNum;
                _this.loadImageList();
       	}
    		_this.pageUtil(res,$(".list-pagination"),onSelectPage);
    	},function(msg){
    		
    	});
    	
    },
    pageUtil : function(res,container,onSelectPage){
    	var _this = this;
    	_this.data.listParam.pageNum = 1;
    	container.html("");
    	_this.loadPagination({
            hasPreviousPage : res.hasPreviousPage,
            prePage         : res.prePage,
            hasNextPage     : res.hasNextPage,
            nextPage        : res.nextPage,
            pageNum         : res.pageNum,
            pages           : res.pages
        },{
        	container : container,
            onSelectPage : onSelectPage
        });
    },// 加载分页信息
    loadPagination : function(pageInfo,loadInfo){
    	var _this = this;
    	this.pagination = new Pagination();
    	this.pagination.render($.extend({}, pageInfo, loadInfo));
    }
};
$(function(){
	image.init();
});
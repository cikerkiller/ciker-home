var Pagination = function(){
    var _this = this;
    this.defaultOption = {
        container       : null,
        pageNum         : 1,
        pageRange       : 3,
        onSelectPage    : null
    };
    // 事件的处理
    $(document).on('click', '.pg-item', function(){
        var $this = $(this);
        var data = $this.data('value');
        // 对于active和disabled按钮点击，不做处理
        if($this.hasClass('active') || $this.hasClass('disabled')){
            return;
        }
        typeof _this.option.onSelectPage === 'function' 
            ? _this.option.onSelectPage(data) : null;
    });
};
// 渲染分页组件
Pagination.prototype.render = function(userOption){
    // 合并选项
    this.option = $.extend({}, this.defaultOption, userOption);
    // 判断容器是否为合法的jquery对象
    if(!(this.option.container instanceof jQuery)){
        return;
    }
    // 判断是否只有1页
    if(this.option.pages <= 1){
        return;
    }
    // 渲染分页内容
    this.option.container.html(this.getPaginationHtml());
};
// 获取分页的html
Pagination.prototype.getPaginationHtml = function(){
    var html        = '',
        option      = this.option,
        paginationHtml = "{{#pageArray}}"+
		  	"{{#disabled}}"+
		    "<li class=\"pg-item disabled\"  data-value=\"{{value}}\"><a href=\"#\" aria-label=\"Previous\" >{{name}}</a></li>"+
		   "{{/disabled}}" +
		    "{{^disabled}}"+
		    	"{{#active}}" +
		    		"<li class=\"pg-item active\"  data-value=\"{{value}}\"><a href=\"#\" >{{name}}</a></li>"+
		    	 "{{/active}}"+
		    	 "{{^active}}"+
         			"<li class=\"pg-item\" data-value=\"{{value}}\"> "+
		      		"	<a href=\"#\" aria-label=\"Next\">{{name}}</a>"+
		    		"</li>"+
    
        		 "{{/active}}"+
    		"{{/disabled}}"+
		   " {{/pageArray}}",
        pageArray   = [],
        start       = option.pageNum - option.pageRange > 0 
            ? option.pageNum - option.pageRange : 1,
        end         = option.pageNum + option.pageRange < option.pages
            ? option.pageNum + option.pageRange : option.pages;
    // 上一页按钮的数据
    pageArray.push({
        name : '<<',
        value : this.option.prePage,
        disabled : !this.option.hasPreviousPage
    });
    // 数字按钮的处理
    for(var i = start; i <= end; i++){
        pageArray.push({
            name : i,
            value : i,
            active : (i === option.pageNum)
        });
    };
    // 下一页按钮的数据
    pageArray.push({
        name : '>>',
        value : this.option.nextPage,
        disabled : !this.option.hasNextPage
    });
    html = ciker.renderHtml(paginationHtml, {
        pageArray   : pageArray,
        pageNum     : option.pageNum,
        pages       : option.pages
    });
    return html;
};
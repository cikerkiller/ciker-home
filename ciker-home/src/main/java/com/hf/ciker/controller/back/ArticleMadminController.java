package com.hf.ciker.controller.back;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.services.IArticleService;
import com.hf.ciker.vo.ArticleVO;

@Controller
@RequestMapping("/it/back")
public class ArticleMadminController {
	
	@Autowired
	private IArticleService  articleService; 
	
	@RequestMapping(value="save.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> save( HttpSession session,@RequestBody ArticleVO articleVO) {
		return articleService.saveArticle(articleVO);
	}
	
	@RequestMapping(value="query.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<ArticleVO> query(HttpSession session,Long articleId) {
		return articleService.queryArticle(articleId);
	}
	
	@RequestMapping(value="remove.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> remove(HttpSession session,Long articleId) {
		return articleService.removeArticle(articleId);
	}
	
	@RequestMapping(value="queryByPage.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<PageInfo<ArticleVO>> queryByPage( HttpSession session,@RequestParam(value="pageNum",defaultValue="1") Integer pageNum,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize) {
		return articleService.queryArticles(pageNum,pageSize);
	}
	
	@RequestMapping(value="match.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<PageInfo<ArticleVO>> queryByPage( HttpSession session,@RequestParam(value="pageNum",defaultValue="1") Integer pageNum,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,String match) {
		return articleService.queryArticles(pageNum,pageSize);
	}
	
}
package com.hf.ciker.controller.portal;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.services.IArticleService;
import com.hf.ciker.vo.ArticleVO;
import com.hf.ciker.vo.HotRankListVO;
import com.hf.ciker.vo.RecommendVO;

@Controller
@RequestMapping("/it/article")
public class ArticleController {
	
	@Autowired
	private IArticleService  articleService; 
	
	@RequestMapping(value="query.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<ArticleVO> query(HttpSession session,Long articleId) {
		return articleService.queryArticle(articleId);
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
	
	@RequestMapping(value="updateViewCount.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> updateViewCount( HttpSession session,Long articleId) {
		return articleService.updateViewCount(articleId);
	}
	
	@RequestMapping(value="queryHotRank.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<HotRankListVO> queryHotRank() {
		return articleService.queryHotRank();
	}
	
	@RequestMapping(value="queryRecommendArticle.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<RecommendVO> queryRecommendArticle() {
		return articleService.queryRecommendArticle();
	}
	
	@RequestMapping(value="recommendArticle.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<String> recommendArticle(Long articleId) {
		return articleService.recommendArticle(articleId);
	}
	
	@RequestMapping(value="unRecommendArticle.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<String> unRecommendArticle(Long articleId) {
		return articleService.unRecommendArticle(articleId);
	}
	
	
	
}

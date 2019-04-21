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
import com.hf.ciker.vo.DetailsArticleVO;
import com.hf.ciker.vo.HotRankListVO;
import com.hf.ciker.vo.RecommendVO;

@Controller
@RequestMapping("/it/article")
public class ArticleController {
	
	@Autowired
	private IArticleService  articleService; 
	
	@RequestMapping(value="query.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<DetailsArticleVO> query(HttpSession session,Long articleId) {
		return articleService.queryArticleById(articleId);
	}
	
	@RequestMapping(value="queryByPage.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<PageInfo<DetailsArticleVO>> queryByPage( HttpSession session,@RequestParam(value="pageNum",defaultValue="1") Integer pageNum,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize) {
		return articleService.commonQueryArticles(pageNum,pageSize);
	}
	
	@RequestMapping(value="match.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<PageInfo<DetailsArticleVO>> queryByPage( HttpSession session,@RequestParam(value="pageNum",defaultValue="1") Integer pageNum,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,String match) {
		return articleService.commonQueryArticles(pageNum,pageSize);
	}
	
	@RequestMapping(value="updateViewCount.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> updateViewCount( HttpSession session,Long articleId) {
		return articleService.updateViewCount(articleId);
	}
	@RequestMapping(value="updateLikeNumber.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<Integer> updateLikeNumber( HttpSession session,Long articleId) {
		return articleService.updateLikeNumber(articleId);
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
	
	
	
	
}

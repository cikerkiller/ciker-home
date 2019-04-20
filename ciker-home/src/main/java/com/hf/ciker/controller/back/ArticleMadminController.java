package com.hf.ciker.controller.back;

import java.util.Arrays;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.CikerConstant;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.services.IArticleService;
import com.hf.ciker.vo.ArticleVO;
import com.hf.ciker.vo.DetailsArticleVO;
import com.hf.ciker.vo.UserVO;

@Controller
@RequestMapping("/it/back/article")
public class ArticleMadminController {
	
	@Autowired
	private IArticleService  articleService; 
	
	@RequestMapping(value="save.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> save( HttpSession session,@RequestBody ArticleVO articleVO) {
		UserVO user = (UserVO) session.getAttribute(CikerConstant.CURRENT_USER);
        if(user != null){
        	articleVO.setLastUpdateBy(user.getUserId());
        	articleVO.setCreationBy(user.getUserId());
        }
		return articleService.saveArticle(articleVO);
	}
	@RequestMapping(value="updateArticle.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> updateArticle( HttpSession session,@RequestBody ArticleVO articleVO) {
		UserVO user = (UserVO) session.getAttribute(CikerConstant.CURRENT_USER);
		if(user != null){
			articleVO.setLastUpdateBy(user.getUserId());
		}
		return articleService.updateArticle(articleVO);
	}
	
	@RequestMapping(value="query.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<ArticleVO> query(HttpSession session,Long articleId) {
		return articleService.queryArticleById(articleId);
	}
	
	@RequestMapping(value="remove.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> remove(HttpSession session,Long articleId) {
		return articleService.removeArticle(articleId);
	}
	@RequestMapping(value="batchRemove.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> batchRemove(HttpSession session,@RequestParam(value = "articleIds[]")Long[] articleIds) {
		return articleService.batchRemove(Arrays.asList(articleIds));
	}
	
	@RequestMapping(value="queryByPage.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<PageInfo<ArticleVO>> queryByPage( HttpSession session,@RequestParam(value="pageNum",defaultValue="1") Integer pageNum,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize) {
		return articleService.commonQueryArticles(pageNum,pageSize);
	}
	
	@RequestMapping(value="match.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<PageInfo<ArticleVO>> queryByPage( HttpSession session,@RequestParam(value="pageNum",defaultValue="1") Integer pageNum,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,String match) {
		return articleService.commonQueryArticles(pageNum,pageSize);
	}
	@RequestMapping(value="queryDetailsArticleByPage.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<PageInfo<DetailsArticleVO>> queryDetailsArticleByPage( HttpSession session,@RequestParam(value="pageNum",defaultValue="1") Integer pageNum,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize) {
		return articleService.detailsQueryArticles(pageNum,pageSize);
	}
	
	@RequestMapping(value="recommendArticle.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> recommendArticle( HttpSession session,@RequestParam(value="articleId")Long articleId,@RequestParam(value="recommend")Integer recommend) {
		/*UserVO user = (UserVO) session.getAttribute(CikerConstant.CURRENT_USER);
        if(user != null){
        	return articleService.recommendArticle(user.getUserId(),articleId,recommend);
        }else {
        	return ServerResponse.createByErrorCodeMessage(ResponseCode.NEED_LOGIN.getCode(), "请先登陆系统");
        }*/
        return articleService.recommendArticle(new Long(12),articleId,recommend);
		
	}
	@RequestMapping(value="changeArticleStatus.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> changeArticleStatus( HttpSession session,@RequestParam(value="articleId")Long articleId,@RequestParam(value="articleStatus")Integer articleStatus) {
		/*UserVO user = (UserVO) session.getAttribute(CikerConstant.CURRENT_USER);
        if(user != null){
        	return articleService.recommendArticle(user.getUserId(),articleId,recommend);
        }else {
        	return ServerResponse.createByErrorCodeMessage(ResponseCode.NEED_LOGIN.getCode(), "请先登陆系统");
        }*/
		return articleService.changeArticleStatus(new Long(12),articleId,articleStatus);
		
	}
	@RequestMapping(value="selectArticleDetailsById.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<ArticleVO> selectArticleDetailsById( HttpSession session,@RequestParam(value="articleId")Long articleId) {
		return articleService.selectArticleDetailsById(articleId);
		
	}
}
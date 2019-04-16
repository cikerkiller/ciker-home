package com.hf.ciker.services;

import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.vo.ArticleVO;
import com.hf.ciker.vo.HotRankListVO;
import com.hf.ciker.vo.RecommendVO;

public interface IArticleService {
	
	ServerResponse<String> saveArticle(ArticleVO articleVO); 
	
	ServerResponse<ArticleVO> queryArticle(Long articleId); 
	
	ServerResponse<RecommendVO> queryRecommendArticle(); 
	
	ServerResponse<String> removeArticle(Long articleId); 
	
	ServerResponse<String> recommendArticle(Long articleId); 
	
	ServerResponse<String> unRecommendArticle(Long articleId); 
	
	ServerResponse<String> updateViewCount(Long articleId); 
	
	ServerResponse<PageInfo<ArticleVO>> queryArticles(Integer pageNum,Integer pageSize); 
	
	ServerResponse<PageInfo<ArticleVO>> queryArticles(Integer pageNum,Integer pageSize,String match); 
	
	ServerResponse<HotRankListVO> queryHotRank(); 
	
}

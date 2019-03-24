package com.hf.ciker.services;

import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.vo.ArticleVO;

public interface IArticleService {
	
	ServerResponse<String> saveArticle(ArticleVO articleVO); 
	
	ServerResponse<ArticleVO> queryArticle(Long articleId); 
	
	ServerResponse<String> removeArticle(Long articleId); 
	
	ServerResponse<String> updateViewCount(Long articleId); 
	
	ServerResponse<PageInfo<ArticleVO>> queryArticles(Integer pageNum,Integer pageSize); 
	
	ServerResponse<PageInfo<ArticleVO>> queryArticles(Integer pageNum,Integer pageSize,String match); 
	
}

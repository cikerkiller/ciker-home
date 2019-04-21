package com.hf.ciker.services;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.vo.ArticleVO;
import com.hf.ciker.vo.DetailsArticleVO;
import com.hf.ciker.vo.HotRankListVO;
import com.hf.ciker.vo.RecommendVO;

public interface IArticleService {
	
	ServerResponse<String> saveArticle(ArticleVO articleVO); 
	ServerResponse<String> updateArticle(ArticleVO articleVO); 
	
	ServerResponse<DetailsArticleVO> queryArticleById(Long articleId); 
	
	ServerResponse<ArticleVO> selectArticleDetailsById(Long articleId); 
	
	ServerResponse<PageInfo<ArticleVO>>  selectArticleByName(Integer pageNum,Integer pageSize,String articleName); 
	
	ServerResponse<RecommendVO> queryRecommendArticle(); 
	
	ServerResponse<String> removeArticle(Long articleId); 
	
	ServerResponse<String> batchRemove(List<Long> articleIds); 
	
	ServerResponse<String> recommendArticle(Long userId,Long articleId,Integer recommend); 
	
	ServerResponse<String> updateViewCount(Long articleId); 
	
	ServerResponse<Integer> updateLikeNumber(Long articleId); 
	
	ServerResponse<PageInfo<DetailsArticleVO>> commonQueryArticles(Integer pageNum,Integer pageSize); 
	
	ServerResponse<PageInfo<DetailsArticleVO>> detailsQueryArticles(Integer pageNum,Integer pageSize); 
	
	ServerResponse<PageInfo<ArticleVO>> queryArticlesByMatch(Integer pageNum,Integer pageSize,String match); 
	
	ServerResponse<HotRankListVO> queryHotRank();
	
	ServerResponse<String> changeArticleStatus(Long userId,Long articleId,Integer status); 
	
}

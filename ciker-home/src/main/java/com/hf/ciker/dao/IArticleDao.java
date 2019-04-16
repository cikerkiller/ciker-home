package com.hf.ciker.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hf.ciker.vo.ArticleVO;
import com.hf.ciker.vo.HotRankVO;

public interface IArticleDao {
	
	int addArticle(ArticleVO articleVO);
	
	int insert(ArticleVO articleVO);
	
	int updateArticle(ArticleVO articleVO);
	
	int deleteArticle(Long articleId);
	
	int recommendArticle(Long articleId);
	
	int unRecommendArticle(Long articleId);
	
	List<ArticleVO> selectArticles();
	
	ArticleVO selectArticleById(Long articleId);
	
	List<ArticleVO> selectArticleByMatch(String match);
	
	List<HotRankVO> queryHotRank();
	
	List<ArticleVO> queryRecommendArticle();
	
	int updateViewingCount(@Param("articleId") Long articleId,@Param("viewingCount") Long viewingCount);
	
	Long selectViewingCount(Long articleId);
	
}

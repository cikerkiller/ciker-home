package com.hf.ciker.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hf.ciker.vo.ArticleVO;
import com.hf.ciker.vo.DetailsArticleVO;
import com.hf.ciker.vo.HotRankVO;

public interface IArticleDao {
	
	int addArticle(ArticleVO articleVO);
	
	int updateArticle(ArticleVO articleVO);
	
	int deleteArticle(Long articleId);
	
	int batchDeleteArticle(@Param("articleIds")List<Long> articleIds);
	
	List<DetailsArticleVO> commonQueryArticles();
	
	List<DetailsArticleVO> detailsQueryArticles();
	
	List<ArticleVO> portalQueryArticles();
	
	DetailsArticleVO selectArticleById(Long articleId);
	
	ArticleVO selectArticleDetailsById(Long articleId);
	
	List<ArticleVO> selectArticleByMatch(String match);
	
	List<ArticleVO> selectArticleByName(String articleTitle);
	
	List<HotRankVO> queryHotRank();
	
	List<ArticleVO> queryRecommendArticle();
	
	int updateViewingCount(@Param("articleId") Long articleId,@Param("viewingCount") Long viewingCount);
	
	Long selectViewingCount(Long articleId);
	
	Integer selectLikeNumber(Long articleId);
	
}

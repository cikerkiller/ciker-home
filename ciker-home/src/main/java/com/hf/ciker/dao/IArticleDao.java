package com.hf.ciker.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hf.ciker.vo.ArticleVO;

public interface IArticleDao {
	
	int addArticle(ArticleVO articleVO);
	int insert(ArticleVO articleVO);
	
	int updateArticle(ArticleVO articleVO);
	
	int deleteArticle(Long articleId);
	
	List<ArticleVO> selectArticles();
	
	ArticleVO selectArticleById(Long articleId);
	
	List<ArticleVO> selectArticleByMatch(String match);
	
	int updateViewingCount(@Param("articleId") Long articleId,@Param("viewingCount") Long viewingCount);
	
	Long selectViewingCount(Long articleId);
	
}

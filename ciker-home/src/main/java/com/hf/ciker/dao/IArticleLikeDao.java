package com.hf.ciker.dao;

import org.apache.ibatis.annotations.Param;

public interface IArticleLikeDao {
	int selectLikeCount(@Param("articleId")Long articleId,@Param("userId")Long userId);
	int insertLike(@Param("articleId")Long articleId,@Param("userId")Long userId);
}

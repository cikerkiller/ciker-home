package com.hf.ciker.dao;

import java.util.List;

import com.hf.ciker.vo.CommentVO;

public interface IArticleCommentDao {
	
	int insertComment(CommentVO commentVO);
	
	List<CommentVO> queryComments(Long articleId);
}

package com.hf.ciker.services;

import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.vo.CommentVO;

public interface ICommentService {
	ServerResponse<String> addComment(CommentVO commentVO);
	ServerResponse<PageInfo<CommentVO>> queryComments(Integer pageNum,Integer pageSize,Long articleId);
}

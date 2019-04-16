package com.hf.ciker.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.dao.IArticleCommentDao;
import com.hf.ciker.services.ICommentService;
import com.hf.ciker.vo.CommentVO;

@Service
public class CommentService implements ICommentService{

	@Autowired
	private IArticleCommentDao articleCommentDao;

	@Override
	public ServerResponse<String> addComment(CommentVO commentVO) {
		int resultCount = articleCommentDao.insertComment(commentVO);
		 if(resultCount == 0){
	         return ServerResponse.createByErrorMessage("添加评论失败");
	     }
	     return ServerResponse.createBySuccessMessage("添加评论成功");
	}

	@Override
	public ServerResponse<PageInfo<CommentVO>> queryComments(Integer pageNum, Integer pageSize, Long articleId) {
		PageHelper.startPage(pageNum,pageSize);
	    List<CommentVO> comments = articleCommentDao.queryComments(articleId);
        PageInfo<CommentVO> pageResult = new PageInfo<CommentVO>(comments);
        return ServerResponse.createBySuccess(pageResult);
	}

}

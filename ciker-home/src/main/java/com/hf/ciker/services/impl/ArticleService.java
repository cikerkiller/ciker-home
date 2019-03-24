package com.hf.ciker.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.dao.IArticleDao;
import com.hf.ciker.services.IArticleService;
import com.hf.ciker.vo.ArticleVO;

@Service
public class ArticleService implements IArticleService{
	
	@Autowired
	private IArticleDao articleDao;
	
	@Override
	public ServerResponse<String> saveArticle(ArticleVO articleVO) {
		int status = articleDao.insert(articleVO);
		if(status > 0) {
			return ServerResponse.createBySuccess();
		}
		return ServerResponse.createByError();
	}

	@Override
	public ServerResponse<ArticleVO> queryArticle(Long articleId) {
		ArticleVO articleVO = articleDao.selectArticleById(articleId);
		if(articleVO != null) {
			return ServerResponse.createBySuccess(articleVO);
		}
		return ServerResponse.createByError();
	}

	@Override
	public ServerResponse<String> removeArticle(Long articleId) {
		int status = articleDao.deleteArticle(articleId);
		if(status > 0) {
			return ServerResponse.createBySuccess();
		}
		return ServerResponse.createByError();
	}

	@Override
	public ServerResponse<PageInfo<ArticleVO>> queryArticles(Integer pageNum, Integer pageSize) {
	   PageHelper.startPage(pageNum,pageSize);
	   List<ArticleVO> articles = articleDao.selectArticles();
       PageInfo<ArticleVO> pageResult = new PageInfo<ArticleVO>(articles);
       return ServerResponse.createBySuccess(pageResult);
	}

	@Override
	public ServerResponse<String> updateViewCount(Long articleId) {
		int status = articleDao.updateViewingCount(articleId, articleDao.selectViewingCount(articleId) + 1);
		if(status > 0) {
			return ServerResponse.createBySuccess();
		}
		return ServerResponse.createByError();
	}

	@Override
	public ServerResponse<PageInfo<ArticleVO>> queryArticles(Integer pageNum, Integer pageSize, String match) {
	   PageHelper.startPage(pageNum,pageSize);
	   List<ArticleVO> articles = articleDao.selectArticleByMatch(match);
       PageInfo<ArticleVO> pageResult = new PageInfo<ArticleVO>(articles);
       return ServerResponse.createBySuccess(pageResult);
	}

}

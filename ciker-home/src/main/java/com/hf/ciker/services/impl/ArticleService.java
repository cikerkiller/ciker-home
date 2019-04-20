package com.hf.ciker.services.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.dao.IArticleDao;
import com.hf.ciker.services.IArticleService;
import com.hf.ciker.vo.ArticleVO;
import com.hf.ciker.vo.DetailsArticleVO;
import com.hf.ciker.vo.HotRankListVO;
import com.hf.ciker.vo.HotRankVO;
import com.hf.ciker.vo.RecommendVO;

@Service
public class ArticleService implements IArticleService{
	
	@Autowired
	private IArticleDao articleDao;
	
	@Override
	public ServerResponse<String> saveArticle(ArticleVO articleVO) {
		int status = articleDao.addArticle(articleVO);
		if(status > 0) {
			return ServerResponse.createBySuccess();
		}
		return ServerResponse.createByError();
	}

	@Override
	public ServerResponse<ArticleVO> queryArticleById(Long articleId) {
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
	public ServerResponse<PageInfo<ArticleVO>> commonQueryArticles(Integer pageNum, Integer pageSize) {
	   PageHelper.startPage(pageNum,pageSize);
	   List<ArticleVO> articles = articleDao.commonQueryArticles();
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
	public ServerResponse<PageInfo<ArticleVO>> queryArticlesByMatch(Integer pageNum, Integer pageSize, String match) {
	   PageHelper.startPage(pageNum,pageSize);
	   List<ArticleVO> articles = articleDao.selectArticleByMatch(match);
       PageInfo<ArticleVO> pageResult = new PageInfo<ArticleVO>(articles);
       return ServerResponse.createBySuccess(pageResult);
	}

	@Override
	public ServerResponse<HotRankListVO> queryHotRank() {
		List<HotRankVO> hotRanks = articleDao.queryHotRank();
		HotRankListVO hotRankListVO = new HotRankListVO();
		hotRankListVO.setList(hotRanks);
		return ServerResponse.createBySuccess(hotRankListVO);
	}

	@Override
	public ServerResponse<RecommendVO> queryRecommendArticle() {
		List<ArticleVO> recommendArticles = articleDao.queryRecommendArticle();
		RecommendVO recommendVO = new RecommendVO();
		recommendVO.setList(recommendArticles);
		return ServerResponse.createBySuccess(recommendVO);
	}

	@Override
	public ServerResponse<String> recommendArticle(Long userId,Long articleId,Integer recommend) {
		ArticleVO articleVO = new ArticleVO();
		articleVO.setArticleId(articleId);
		articleVO.setLastUpdateBy(userId);
		articleVO.setRecommend(recommend);
		articleVO.setLastUpdateDate(new Date());
		int status = articleDao.updateArticle(articleVO);
		if(status > 0) {
			return ServerResponse.createBySuccess("更新文章推荐成功");
		}
		return ServerResponse.createByErrorMessage("更新文章推荐失败");
	}

	@Override
	public ServerResponse<PageInfo<DetailsArticleVO>> detailsQueryArticles(Integer pageNum, Integer pageSize) {
		PageHelper.startPage(pageNum,pageSize);
	    List<DetailsArticleVO> articles = articleDao.detailsQueryArticles();
        PageInfo<DetailsArticleVO> pageResult = new PageInfo<DetailsArticleVO>(articles);
        return ServerResponse.createBySuccess(pageResult);
	}

	@Override
	public ServerResponse<String> batchRemove(List<Long> articleIds) {
		int status = articleDao.batchDeleteArticle(articleIds);
		if(status > 0) {
			return ServerResponse.createBySuccess("删除成功");
		}
		return ServerResponse.createByErrorMessage("删除失败");
	}

	@Override
	public ServerResponse<String> changeArticleStatus(Long userId, Long articleId, Integer articleStatus) {
		ArticleVO articleVO = new ArticleVO();
		articleVO.setArticleId(articleId);
		articleVO.setLastUpdateBy(userId);
		articleVO.setStatus(articleStatus);
		articleVO.setLastUpdateDate(new Date());
		int status = articleDao.updateArticle(articleVO);
		if(status > 0) {
			return ServerResponse.createBySuccess("更新文章状态成功");
		}
		return ServerResponse.createByErrorMessage("更新文章状态失败");
	}

	@Override
	public ServerResponse<ArticleVO> selectArticleDetailsById(Long articleId) {
		ArticleVO articleVO = articleDao.selectArticleDetailsById(articleId);
		if(articleVO != null) {
			return ServerResponse.createBySuccess(articleVO);
		}
		return ServerResponse.createByErrorMessage("未找到此文章");
	}

	@Override
	public ServerResponse<String> updateArticle(ArticleVO articleVO) {
		articleVO.setLastUpdateDate(new Date());
		int status = articleDao.updateArticle(articleVO);
		if(status > 0) {
			return ServerResponse.createBySuccess();
		}
		return ServerResponse.createByError();
	}

}

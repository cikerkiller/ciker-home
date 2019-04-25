package com.hf.ciker.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.dao.IBulletinDao;
import com.hf.ciker.services.IBulletinService;
import com.hf.ciker.vo.BulletinVO;

@Service
public class BulletinService implements IBulletinService {

	@Autowired
	private IBulletinDao bulletinDao;

	@Override
	public ServerResponse<BulletinVO> queryBulletin() {
		BulletinVO bulletinVO = bulletinDao.queryBulletin();
		if (bulletinVO != null) {
			return ServerResponse.createBySuccess(bulletinVO);
		}
		return ServerResponse.createByError();
	}

	@Override
	public ServerResponse<PageInfo<BulletinVO>> queryBulletins(Integer pageNum, Integer pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		List<BulletinVO> bulletins = bulletinDao.queryBulletins();
		PageInfo<BulletinVO> pageResult = new PageInfo<BulletinVO>(bulletins);
		return ServerResponse.createBySuccess(pageResult);

	}

	@Override
	public ServerResponse<String> addBulletin(BulletinVO bulletinVO) {
		int status = bulletinDao.addBulletin(bulletinVO);
		if (status > 0) {
			return ServerResponse.createBySuccess("公告成功");
		}
		return ServerResponse.createByErrorMessage("公告失败");
	}

	@Override
	public ServerResponse<String> releaseBulletin(BulletinVO bulletinVO) {
		int status = bulletinDao.releaseBulletin(bulletinVO);
		if (status > 0) {
			return ServerResponse.createBySuccess("公告发布成功");
		}
		return ServerResponse.createByErrorMessage("公告发布失败");
	}

	@Override
	public ServerResponse<String> deleteBulletin(List<Long> bulletinIds) {
		int status = bulletinDao.deleteBulletin(bulletinIds);
		if (status > 0) {
			return ServerResponse.createBySuccess("公告删除成功");
		}
		return ServerResponse.createByErrorMessage("公告删除失败");
	}

}

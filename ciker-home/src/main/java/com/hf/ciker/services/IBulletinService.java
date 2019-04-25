package com.hf.ciker.services;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.vo.BulletinVO;

public interface IBulletinService {
	
	ServerResponse<BulletinVO> queryBulletin();
	
	ServerResponse<PageInfo<BulletinVO>> queryBulletins(Integer pageNum,Integer pageSize);
	
	ServerResponse<String> addBulletin(BulletinVO bulletinVO);
	
	ServerResponse<String> releaseBulletin(BulletinVO bulletinVO);
	
	ServerResponse<String> deleteBulletin(List<Long> bulletinIds);
	
}

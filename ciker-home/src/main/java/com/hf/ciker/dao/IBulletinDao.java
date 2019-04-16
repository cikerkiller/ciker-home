package com.hf.ciker.dao;

import java.util.List;

import com.hf.ciker.vo.BulletinVO;

public interface IBulletinDao {
	
	BulletinVO queryBulletin();
	
	List<BulletinVO> queryBulletins();
	
	int addBulletin(BulletinVO bulletinVO);
	
	int releaseBulletin(Long bulletinId);
}

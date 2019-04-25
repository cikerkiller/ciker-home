package com.hf.ciker.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hf.ciker.vo.BulletinVO;

public interface IBulletinDao {
	
	BulletinVO queryBulletin();
	
	List<BulletinVO> queryBulletins();
	
	int addBulletin(BulletinVO bulletinVO);
	
	int releaseBulletin(BulletinVO bulletinVO);
	
	int deleteBulletin(@Param("bulletinIds") List<Long> bulletinIds);
}

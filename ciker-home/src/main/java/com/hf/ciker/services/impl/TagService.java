package com.hf.ciker.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.dao.ITagDao;
import com.hf.ciker.services.ITagService;
import com.hf.ciker.vo.TagListVO;
import com.hf.ciker.vo.TagVO;

@Service
public class TagService implements ITagService{

	@Autowired
	private ITagDao tagDao;

	@Override
	public ServerResponse<TagListVO> queryTagCloud() {
		List<TagVO> tagCloud = tagDao.queryTagCloud();
		TagListVO tagListVO = new TagListVO();
		tagListVO.setTagList(tagCloud);
		return ServerResponse.createBySuccess(tagListVO);
	}

	@Override
	public void tagParticiple() {
		
		
	}
	
	
	
}

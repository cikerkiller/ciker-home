package com.hf.ciker.services;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.vo.TagListVO;

public interface ITagService {
	
	ServerResponse<TagListVO> queryTagCloud();
	
	void tagParticiple();
}

package com.hf.ciker.services;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.vo.ClassifyListVO;
import com.hf.ciker.vo.ClassifyVO;

public interface IClassifyService {
	
	ServerResponse<ClassifyListVO> queryClassifyList();
	
	ServerResponse<String> addClassifys(ClassifyVO classifyVO);
	
	ServerResponse<String> deleteClassify(Long classifyId);
	
}

package com.hf.ciker.services;

import java.util.List;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.vo.ClassifyVO;

public interface IClassifyService {
	
	ServerResponse<List<ClassifyVO>> queryClassifyByLevelOne();
	
	ServerResponse<List<ClassifyVO>> queryClassifyByLevelSecond(Long parentId);
	
	ServerResponse<String> addClassifys(ClassifyVO classifyVO);
	
	ServerResponse<String> deleteClassify(Long classifyId);
	
}

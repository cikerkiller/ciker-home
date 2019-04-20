package com.hf.ciker.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.dao.IClassifyDao;
import com.hf.ciker.services.IClassifyService;
import com.hf.ciker.vo.ClassifyListVO;
import com.hf.ciker.vo.ClassifyVO;

@Service
public class ClassifyService implements IClassifyService{

	@Autowired
	private IClassifyDao classifyDao;
	

	@Override
	public ServerResponse<String> addClassifys(ClassifyVO classifyVO) {
		if(classifyVO.getParentId() == null) {
			classifyVO.setParentId(Long.valueOf(0));
		}
		int status = classifyDao.addClassify(classifyVO);
		if(status > 0) {
			return ServerResponse.createBySuccess();
		}
		return ServerResponse.createByError();
	}

	@Override
	public ServerResponse<String> deleteClassify(Long classifyId) {
		List<Long> classifyChildIds = classifyDao.queryClassifyChildId(classifyId);
		classifyChildIds.add(classifyId);
		int status = classifyDao.deleteClassify(classifyChildIds);
		if(status > 0) {
			return ServerResponse.createBySuccess();
		}
		return ServerResponse.createByError();
	}

	@Override
	public ServerResponse<ClassifyListVO> queryClassifyList() {
		ClassifyListVO rootRlassifyVO = new ClassifyListVO();
		rootRlassifyVO.setClassifyId(new Long(0));
		rootRlassifyVO.setClassifyName("分类列表");
		queryChildNode(rootRlassifyVO,rootRlassifyVO.getClassifyId());
		return ServerResponse.createBySuccess(rootRlassifyVO);
	}
	
	private void queryChildNode(ClassifyListVO classifyListVO,Long parentId) {
		List<ClassifyVO> topClassifys = classifyDao.queryChildNode(parentId);
		for(ClassifyVO topClassify : topClassifys) {
			ClassifyListVO classifyTreeVO = new ClassifyListVO();
			classifyTreeVO.setClassifyId(topClassify.getClassifyId());
			classifyTreeVO.setClassifyName(topClassify.getClassifyName());
			classifyTreeVO.setParentId(topClassify.getParentId());
			queryChildNode(classifyTreeVO, classifyTreeVO.getClassifyId());
			classifyListVO.addChildClassify(classifyTreeVO);
		}
	}

}

package com.hf.ciker.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hf.ciker.vo.ClassifyVO;

public interface IClassifyDao {
	
	List<ClassifyVO> queryChildNode(Long parentId);
	
	List<ClassifyVO> queryClassify();
	
	int addClassify(ClassifyVO classifyVO);
	
	int deleteClassify(@Param("classifys") List<Long> classifys);
	
	List<Long> queryClassifyChildId(Long parentId);
}

package com.hf.ciker.vo;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.google.common.collect.Lists;

@JsonInclude(Include.NON_NULL)
public class ClassifyListVO implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long classifyId;
	private Long parentId;
	private String classifyName;
	
	private List<ClassifyListVO> childClassifies = Lists.newArrayList();
	
	public void addChildClassify(ClassifyListVO e) {
		childClassifies.add(e);
	}

	public Long getClassifyId() {
		return classifyId;
	}

	public void setClassifyId(Long classifyId) {
		this.classifyId = classifyId;
	}

	public Long getParentId() {
		return parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

	public String getClassifyName() {
		return classifyName;
	}

	public void setClassifyName(String classifyName) {
		this.classifyName = classifyName;
	}

	public List<ClassifyListVO> getChildClassifies() {
		if (childClassifies.isEmpty()) {
			return null;
		}
		return childClassifies;
	}
	
	
}

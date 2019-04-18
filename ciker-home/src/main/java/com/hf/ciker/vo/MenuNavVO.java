package com.hf.ciker.vo;

import java.util.LinkedList;
import java.util.List;

import com.google.common.collect.Lists;

public class MenuNavVO {
	
	private LinkedList<MenuVO> list = Lists.newLinkedList();

	public List<MenuVO> getList() {
		return list;
	}
	
	public void addMenuVO(MenuVO menuVO) {
		list.addFirst(menuVO);
	}
}

package com.hf.ciker.vo;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.google.common.collect.Lists;

@JsonInclude(Include.NON_NULL)
public class MenuTreeVO implements Serializable {

	/**
	* 
	*/
	private static final long serialVersionUID = -889850096775975356L;

	private Long menuId;

	private String menuName;

	private Integer isRelease;
	
	private Long menuParentId;
	
	 private String menuUrl;

	private List<MenuTreeVO> childMenus = Lists.newArrayList();

	public void addChildMenu(MenuTreeVO menuTreeVO) {
		childMenus.add(menuTreeVO);
	}

	public Long getMenuId() {
		return menuId;
	}

	public void setMenuId(Long menuId) {
		this.menuId = menuId;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public Integer getIsRelease() {
		return isRelease;
	}

	public void setIsRelease(Integer isRelease) {
		this.isRelease = isRelease;
	}

	public Long getMenuParentId() {
		return menuParentId;
	}

	public void setMenuParentId(Long menuParentId) {
		this.menuParentId = menuParentId;
	}

	public String getMenuUrl() {
		return menuUrl;
	}

	public void setMenuUrl(String menuUrl) {
		this.menuUrl = menuUrl;
	}

	public List<MenuTreeVO> getChildMenus() {
		if (childMenus.isEmpty()) {
			return null;
		}
		return childMenus;
	}

}

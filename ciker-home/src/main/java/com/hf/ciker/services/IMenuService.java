package com.hf.ciker.services;

import java.util.List;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.vo.MenuNavVO;
import com.hf.ciker.vo.MenuTreeVO;
import com.hf.ciker.vo.MenuVO;

public interface IMenuService {
	ServerResponse<String> batchDeleteMenu(List<Long> menuIds);
	ServerResponse<String> deleteMenu(Long menuId);
	ServerResponse<MenuNavVO> queryNavMenu(Long menuId);
	ServerResponse<String> addMenu(MenuVO menuVO);
	ServerResponse<String> updateMenu(MenuVO menuVO);
	ServerResponse<MenuVO> selectByMenuId(Long menuId);
	
	ServerResponse<MenuVO> selectByNotDeletedMenuId(Long menuId);
	ServerResponse<String> releaseMenu(Long menuId);
	ServerResponse<String> unReleaseMenu(Long menuId);
	ServerResponse<MenuTreeVO> queryMenus();
	ServerResponse<MenuTreeVO> queryChildReleasedMenus();
}

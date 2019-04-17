package com.hf.ciker.services;

import java.util.List;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.vo.MenuTreeVO;
import com.hf.ciker.vo.MenuVO;

public interface IMenuService {
	ServerResponse<String> batchDeleteMenu(List<Long> menuIds);
	ServerResponse<String> addMenu(MenuVO menuVO);
	ServerResponse<String> updateMenu(MenuVO menuVO);
	ServerResponse<MenuVO> selectByMenuId(Long menuId);
	ServerResponse<String> batchReleaseMenu(List<Long> menuIds);
	ServerResponse<String> batchUnReleaseMenu(List<Long> menuIds);
	ServerResponse<MenuTreeVO> queryMenus();
	ServerResponse<MenuTreeVO> queryChildReleasedMenus();
}

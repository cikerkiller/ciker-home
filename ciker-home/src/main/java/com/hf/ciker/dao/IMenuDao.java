package com.hf.ciker.dao;

import java.util.List;

import com.hf.ciker.vo.MenuVO;

public interface IMenuDao {
	
    int deleteMenu(Long menuId);

    int batchDeleteMenu(List<Long> menuIds);
    
    int addMenu(MenuVO menuVO);
    
    int updateMenu(MenuVO menuVO);

    MenuVO selectByMenuId(Long menuId);

	int releaseMenu(Long menuId);
	
	int unReleaseMenu(Long menuId);
	
	int batchReleaseMenu(List<Long> menuIds);
	
	int batchUnReleaseMenu(List<Long> menuIds);
	
	List<MenuVO> queryChildMenus(Long menuParentId);
	
	List<MenuVO> queryChildReleasedMenus(Long menuParentId);
	
	String queryLowestLevel(Long menuParentId);
}
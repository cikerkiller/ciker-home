package com.hf.ciker.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hf.ciker.vo.MenuVO;

public interface IMenuDao {
	
    int deleteMenu(Long menuId);

    int batchDeleteMenu(@Param("menuIds")List<Long> menuIds);
    
    int addMenu(MenuVO menuVO);
    
    int updateMenu(MenuVO menuVO);

    MenuVO selectByMenuId(Long menuId);
    
    MenuVO selectByNotDeletedMenuId(Long menuId);

	int releaseMenu(Long menuId);
	
	int unReleaseMenu(Long menuId);
	
	int batchReleaseMenu(@Param("menuIds")List<Long> menuIds);
	
	int batchUnReleaseMenu(@Param("menuIds")List<Long> menuIds);
	
	List<MenuVO> queryChildMenus(Long menuParentId);
	
	List<MenuVO> queryChildReleasedMenus(Long menuParentId);
	
	String queryLowestLevel(Long menuParentId);
	
	List<Long> queryChildMenuIds(Long menuParentId);
	
	Long queryParentMenuId(Long menuId);
}
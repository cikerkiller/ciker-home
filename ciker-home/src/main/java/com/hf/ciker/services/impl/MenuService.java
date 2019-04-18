package com.hf.ciker.services.impl;

import java.util.LinkedList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.dao.IMenuDao;
import com.hf.ciker.services.IMenuService;
import com.hf.ciker.vo.MenuTreeVO;
import com.hf.ciker.vo.MenuVO;

@Service
public class MenuService implements IMenuService{
	
	@Autowired
	private IMenuDao menuDao;
	
	@Override
	public ServerResponse<String> batchDeleteMenu(List<Long> menuIds) {
		int status = menuDao.batchDeleteMenu(menuIds);
		if (status > 0) {
			return ServerResponse.createBySuccessMessage("批量删除菜单成功");
		}
		return ServerResponse.createByErrorMessage("批量删除菜单失败");
	}

	@Override
	public ServerResponse<String> addMenu(MenuVO menuVO) {
		if(menuVO.getMenuParentId() != null) {
			String menuUrl = menuDao.queryLowestLevel(menuVO.getMenuParentId());
			if(StringUtils.isNotBlank(menuUrl)) {
				return ServerResponse.createByErrorMessage("增加菜单失败,不是目录菜单");
			}
		}
		
		int status = menuDao.addMenu(menuVO);
		if (status > 0) {
			return ServerResponse.createBySuccessMessage("增加菜单成功");
		}
		return ServerResponse.createByErrorMessage("增加菜单失败");
	}

	@Override
	public ServerResponse<String> updateMenu(MenuVO menuVO) {
		List<Long> menuIds = menuDao.queryChildMenuIds(menuVO.getMenuId());
		if(menuIds != null && menuIds.size() != 0) {
			if(StringUtils.isNotBlank(menuVO.getMenuUrl())) {
				return ServerResponse.createByErrorMessage("修改菜单失败,不能给目录菜单添加url地址");
			}
		}
		int status = menuDao.updateMenu(menuVO);
		if (status > 0) {
			return ServerResponse.createBySuccessMessage("修改菜单成功");
		}
		return ServerResponse.createByErrorMessage("修改菜单失败");
	}

	@Override
	public ServerResponse<MenuVO> selectByMenuId(Long menuId) {
		MenuVO menuVO = menuDao.selectByMenuId(menuId);
		if(menuVO != null) {
			return ServerResponse.createBySuccess(menuVO);
		}
		return ServerResponse.createByError();
	}

	@Override
	public ServerResponse<String> releaseMenu(Long menuId) {
		List<Long> menuIds = new LinkedList<>();
		findParentMenuIds(menuIds, menuId);
		menuIds.add(menuId);
		int status = menuDao.batchReleaseMenu(menuIds);
		if (status > 0) {
			return ServerResponse.createBySuccessMessage("菜单发布成功");
		}
		return ServerResponse.createByErrorMessage("菜单发布失败");
	}
	
	private void findParentMenuIds(List<Long> menuIds,Long menuId) {
		Long parentId = menuDao.queryParentMenuId(menuId);
		if(parentId != null) {
			menuIds.add(parentId);
			findParentMenuIds(menuIds, parentId);
		}
	}

	@Override
	public ServerResponse<String> unReleaseMenu(Long menuId) {
		List<Long> menuIds = menuDao.queryChildMenuIds(menuId);
		if(menuIds == null) {
			menuIds = new LinkedList<>();
		}
		menuIds.add(menuId);
		int status = menuDao.batchUnReleaseMenu(menuIds);
		if (status > 0) {
			return ServerResponse.createBySuccessMessage("批量下架菜单成功");
		}
		return ServerResponse.createByErrorMessage("批量下架菜单失败");
	}

	@Override
	public ServerResponse<MenuTreeVO> queryMenus() {
		MenuTreeVO topMenuTreeVO = new MenuTreeVO();
		topMenuTreeVO.setMenuId(new Long(0));
		topMenuTreeVO.setMenuName("菜单列表");
		topMenuTreeVO.setIsRelease(1);
		queryChildNode(topMenuTreeVO, topMenuTreeVO.getMenuId());
		return ServerResponse.createBySuccess(topMenuTreeVO);
	}
	
	private void queryChildNode(MenuTreeVO upperLevelMenuTreeVO,Long parentId) {
		List<MenuVO> topMnus = menuDao.queryChildMenus(parentId);
		for(MenuVO topMnu : topMnus) {
			MenuTreeVO menuTreeVO = new MenuTreeVO();
			menuTreeVO.setMenuId(topMnu.getMenuId());
			menuTreeVO.setMenuName(topMnu.getMenuName());
			menuTreeVO.setMenuParentId(topMnu.getMenuParentId());
			menuTreeVO.setIsRelease(topMnu.getIsRelease());
			queryChildNode(menuTreeVO, menuTreeVO.getMenuId());
			upperLevelMenuTreeVO.addChildMenu(menuTreeVO);
		}
	}
	private void queryChildReleasedNode(MenuTreeVO upperLevelMenuTreeVO,Long parentId) {
		List<MenuVO> topMnus = menuDao.queryChildReleasedMenus(parentId);
		for(MenuVO topMnu : topMnus) {
			MenuTreeVO menuTreeVO = new MenuTreeVO();
			menuTreeVO.setMenuId(topMnu.getMenuId());
			menuTreeVO.setMenuName(topMnu.getMenuName());
			menuTreeVO.setMenuParentId(topMnu.getMenuParentId());
			menuTreeVO.setMenuUrl(topMnu.getMenuUrl());
			queryChildReleasedNode(menuTreeVO, menuTreeVO.getMenuId());
			upperLevelMenuTreeVO.addChildMenu(menuTreeVO);
		}
	}

	@Override
	public ServerResponse<MenuTreeVO> queryChildReleasedMenus() {
		MenuTreeVO topMenuTreeVO = new MenuTreeVO();
		topMenuTreeVO.setMenuId(new Long(0));
		topMenuTreeVO.setMenuName("菜单列表");
		queryChildReleasedNode(topMenuTreeVO, topMenuTreeVO.getMenuId());
		return ServerResponse.createBySuccess(topMenuTreeVO);
	}

	@Override
	public ServerResponse<String> deleteMenu(Long menuId) {
		int status = menuDao.deleteMenu(menuId);
		if (status > 0) {
			return ServerResponse.createBySuccessMessage("删除菜单成功");
		}
		return ServerResponse.createByErrorMessage("删除菜单失败");
	}

	@Override
	public ServerResponse<MenuVO> selectByNotDeletedMenuId(Long menuId) {
		MenuVO menuVO = menuDao.selectByNotDeletedMenuId(menuId);
		if(menuVO != null) {
			return ServerResponse.createBySuccess(menuVO);
		}
		return ServerResponse.createByError();
	}
}

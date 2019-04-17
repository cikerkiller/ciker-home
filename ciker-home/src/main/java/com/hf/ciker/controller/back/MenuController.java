package com.hf.ciker.controller.back;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.services.IMenuService;
import com.hf.ciker.vo.MenuTreeVO;
import com.hf.ciker.vo.MenuVO;

@Controller
@RequestMapping("/it/back/menu/")
public class MenuController {
	
	@Autowired
	private IMenuService menuService;
	
	@RequestMapping(value="addMenu.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> addMenu(MenuVO menuVO) {
		return menuService.addMenu(menuVO);
	}
	
	@RequestMapping(value="batchDeleteMenu.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> batchDeleteMenu(List<Long> menuIds) {
		return menuService.batchDeleteMenu(menuIds);
	}
	
	@RequestMapping(value="updateMenu.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> updateMenu(MenuVO menuVO) {
		return menuService.updateMenu(menuVO);
	}
	
	@RequestMapping(value="selectByMenuId.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<MenuVO> selectByMenuId(Long menuId) {
		return menuService.selectByMenuId(menuId);
	}
	
	@RequestMapping(value="batchReleaseMenu.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> batchReleaseMenu(List<Long> menuIds) {
		return menuService.batchReleaseMenu(menuIds);
	}
	
	@RequestMapping(value="batchUnReleaseMenu.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> batchUnReleaseMenu(List<Long> menuIds) {
		return menuService.batchUnReleaseMenu(menuIds);
	}
	
	@RequestMapping(value="queryMenus.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<MenuTreeVO> queryMenus() {
		return menuService.queryMenus();
	}
	
	@RequestMapping(value="queryChildReleasedMenus.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<MenuTreeVO> queryChildReleasedMenus() {
		return menuService.queryChildReleasedMenus();
	}
	
}

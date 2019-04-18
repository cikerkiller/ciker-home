package com.hf.ciker.controller.back;

import java.util.Date;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hf.ciker.common.CikerConstant;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.services.IMenuService;
import com.hf.ciker.vo.MenuNavVO;
import com.hf.ciker.vo.MenuTreeVO;
import com.hf.ciker.vo.MenuVO;
import com.hf.ciker.vo.UserVO;

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
	
	@RequestMapping(value="updateMenu.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> updateMenu(HttpSession session,MenuVO menuVO) {
		UserVO user = (UserVO) session.getAttribute(CikerConstant.CURRENT_USER);
        if(user != null){
        	menuVO.setLastUpdateBy(user.getUserId());
        }
        menuVO.setLastUpdateDate(new Date());
		return menuService.updateMenu(menuVO);
	}
	
	@RequestMapping(value="selectByNotDeletedMenuId.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<MenuVO> selectByNotDeletedMenuId(Long menuId) {
		return menuService.selectByNotDeletedMenuId(menuId);
	}
	
	@RequestMapping(value="releaseMenu.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> releaseMenu(Long menuId) {
		return menuService.releaseMenu(menuId);
	}
	
	@RequestMapping(value="unReleaseMenu.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> unReleaseMenu(Long menuId) {
		return menuService.unReleaseMenu(menuId);
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
	
	@RequestMapping(value="deleteMenu.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> deleteMenu(Long menuId) {
		return menuService.deleteMenu(menuId);
	}
	
	@RequestMapping(value="queryNavMenu.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<MenuNavVO> queryNavMenu(Long menuId) {
		return menuService.queryNavMenu(menuId);
	}
}

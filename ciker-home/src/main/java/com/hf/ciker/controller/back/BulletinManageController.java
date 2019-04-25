package com.hf.ciker.controller.back;

import java.util.Arrays;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.CikerConstant;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.services.IBulletinService;
import com.hf.ciker.vo.BulletinVO;
import com.hf.ciker.vo.UserVO;

@Controller
@RequestMapping("/it/back/bulletin")
public class BulletinManageController {
	@Autowired
	private IBulletinService  bulletinService; 
	
	@RequestMapping(value="addBulletin.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> addBulletin(HttpSession session,BulletinVO bulletinVO) {
		UserVO user = (UserVO) session.getAttribute(CikerConstant.CURRENT_USER);
		if(user != null){
			bulletinVO.setCreateBy(user.getUserId());
		}
		return bulletinService.addBulletin(bulletinVO);
	}
	
	@RequestMapping(value="releaseBulletin.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> releaseBulletin(BulletinVO bulletinVO) {
		return bulletinService.releaseBulletin(bulletinVO);
	}
	@RequestMapping(value="deleteBulletin.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> deleteBulletin(@RequestParam(value = "bulletinIds[]")Long[] bulletinIds ) {
		return bulletinService.deleteBulletin(Arrays.asList(bulletinIds));
	}
	@RequestMapping(value="queryBulletins.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<PageInfo<BulletinVO>> queryBulletins(@RequestParam(value="pageNum",defaultValue="1") Integer pageNum,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize) {
		return bulletinService.queryBulletins(pageNum,pageSize);
	}
}

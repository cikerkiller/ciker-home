package com.hf.ciker.controller.portal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.services.IBulletinService;
import com.hf.ciker.vo.BulletinVO;

@Controller
@RequestMapping("/it/bulletin")
public class BulletinController {
	@Autowired
	private IBulletinService  bulletinService; 
	
	@RequestMapping(value="queryBulletin.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<BulletinVO> queryBulletin() {
		return bulletinService.queryBulletin();
	}
	
	@RequestMapping(value="addBulletin.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> addBulletin(BulletinVO bulletinVO) {
		return bulletinService.addBulletin(bulletinVO);
	}
	
	@RequestMapping(value="releaseBulletin.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> releaseBulletin(Long bulletinId) {
		return bulletinService.releaseBulletin(bulletinId);
	}
	
	@RequestMapping(value="queryBulletins.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<PageInfo<BulletinVO>> queryBulletins(@RequestParam(value="pageNum",defaultValue="1") Integer pageNum,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize) {
		return bulletinService.queryBulletins(pageNum,pageSize);
	}
}

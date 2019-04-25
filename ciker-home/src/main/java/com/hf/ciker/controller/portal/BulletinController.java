package com.hf.ciker.controller.portal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

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
	
}

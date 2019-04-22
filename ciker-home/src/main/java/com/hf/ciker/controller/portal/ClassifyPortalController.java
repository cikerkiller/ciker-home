package com.hf.ciker.controller.portal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.services.IClassifyService;
import com.hf.ciker.vo.ClassifyListVO;

@Controller
@RequestMapping("/it/classify")
public class ClassifyPortalController {

	@Autowired
	private IClassifyService  classifyService; 
	
	@RequestMapping(value="queryClassify.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<ClassifyListVO> queryClassify(){
		return classifyService.queryClassify();
	}
}

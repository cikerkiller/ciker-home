package com.hf.ciker.controller.back;

import java.util.Arrays;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.services.IClassifyService;
import com.hf.ciker.vo.ClassifyListVO;
import com.hf.ciker.vo.ClassifyVO;

@Controller
@RequestMapping("/it/back/classify")
public class ClassifyController {

	@Autowired
	private IClassifyService  classifyService; 
	
	@RequestMapping(value="addClassify.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> addClassify(ClassifyVO classifyVO ){
		return classifyService.addClassifys(classifyVO);
	}
	
	@RequestMapping(value="queryClassifyList.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<ClassifyListVO> queryClassifyList(){
		return classifyService.queryClassifyList();
	}
	
	@RequestMapping(value="deleteClassify.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<String> deleteClassify(Long classifyId){
		return classifyService.deleteClassify(classifyId);
	}
	
	@RequestMapping(value="batchDeleteClassify.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> batchDeleteClassify(HttpSession session,@RequestParam(value = "classifyIds[]")Long[] classifyIds) {
		return classifyService.batchDeleteClassify(Arrays.asList(classifyIds));
	}
	
	@RequestMapping(value="queryClassifys.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<ClassifyListVO> queryClassifys(HttpSession session,Long classifyId) {
		return classifyService.queryClassifys(classifyId);
	}
	
}

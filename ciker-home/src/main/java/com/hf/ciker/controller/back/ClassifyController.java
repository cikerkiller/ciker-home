package com.hf.ciker.controller.back;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.services.IClassifyService;
import com.hf.ciker.vo.ClassifyVO;

@Controller
@RequestMapping("/it/back")
public class ClassifyController {

	@Autowired
	private IClassifyService  classifyService; 
	
	@RequestMapping(value="addClassify.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> addClassify(ClassifyVO classifyVO ){
		return classifyService.addClassifys(classifyVO);
	}
	
	@RequestMapping(value="searchClassifyOne.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<List<ClassifyVO>> searchClassifyOne(){
		return classifyService.queryClassifyByLevelOne();
	}
	
	@RequestMapping(value="searchClassifySecond.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<List<ClassifyVO>> searchClassifySecond(Long parentId){
		return classifyService.queryClassifyByLevelSecond(parentId);
	}
	
	@RequestMapping(value="deleteClassify.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<String> deleteClassify(Long classifyId){
		return classifyService.deleteClassify(classifyId);
	}
	
}

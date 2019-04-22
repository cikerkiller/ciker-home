package com.hf.ciker.controller.portal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.services.ITagService;
import com.hf.ciker.vo.TagListVO;

@Controller
@RequestMapping("/it/tag")
public class TagController {
	
	@Autowired
	private ITagService tagService; 
	
	@RequestMapping(value="queryTagCloud.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<TagListVO> queryTagCloud() {
		return tagService.queryTagCloud();
	}
}

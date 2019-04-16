package com.hf.ciker.controller.back;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.services.IImageService;
import com.hf.ciker.vo.ImageListVO;
import com.hf.ciker.vo.ImageVO;

@Controller
@RequestMapping("/it/image")
public class IImageController {
	
	@Autowired
	private IImageService imageService;
	
	@RequestMapping(value="saveImage.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> saveImage(ImageVO imageVO) {
		return imageService.saveImage(imageVO);
	}
	
	@RequestMapping(value="releaseImage.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> releaseImage(Long imageId) {
		return imageService.releaseImage(imageId);
	}
	
	@RequestMapping(value="unReleaseImage.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> unReleaseImage(Long imageId) {
		return imageService.unReleaseImage(imageId);
	}
	
	@RequestMapping(value="batchReleaseImage.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String>  batchReleaseImage(List<Long> imageIds) {
		return imageService.batchReleaseImage(imageIds);
	}
	
	@RequestMapping(value="batchUnReleaseImage.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String>  batchUnReleaseImage(List<Long> imageIds) {
		return imageService.batchUnReleaseImage(imageIds);
	}
	
	@RequestMapping(value="queryImages.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<PageInfo<ImageVO>> queryImages(@RequestParam(value="pageNum",defaultValue="1") Integer pageNum,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize)  {
		return imageService.queryImages(pageNum,pageSize);
	}
	
	@RequestMapping(value="queryImageByReleased.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<ImageListVO> queryImageByReleased()  {
		return imageService.queryImageByReleased();
	}
}

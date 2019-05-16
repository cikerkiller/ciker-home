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
import com.hf.ciker.services.IFileService;
import com.hf.ciker.services.IImageService;
import com.hf.ciker.vo.ImageListVO;
import com.hf.ciker.vo.ImageVO;
import com.hf.ciker.vo.UserVO;

@Controller
@RequestMapping("/it/image")
public class IImageController {
	
	@Autowired
	private IImageService imageService;
	
	@Autowired
	private IFileService iFileService;
	
	@RequestMapping(value="saveImage.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> saveImage(HttpSession session,ImageVO imageVO) {
		UserVO user = (UserVO) session.getAttribute(CikerConstant.CURRENT_USER);
		if(user != null){
			imageVO.setCreateBy(user.getUserId());
		}
		return imageService.saveImage(imageVO);
	}
	
	@RequestMapping(value="batchDeleteImage.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> batchDeleteImage(@RequestParam(value = "imageIds[]")Long[] imageIds ) {
		return imageService.batchDeleteImage(Arrays.asList(imageIds));
	}
	
	@RequestMapping(value="releaseImage.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String>  releaseImage(Long imageId) {
		return imageService.releaseImage(imageId);
	}
	
	@RequestMapping(value="unReleaseImage.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String>  unReleaseImage(Long imageId) {
		return imageService.unReleaseImage(imageId);
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
	
	/*@RequestMapping(value="upload.do",method=RequestMethod.POST)
    @ResponseBody
    public ServerResponse upload(HttpSession session,@RequestParam(value = "upload_file",required = false) MultipartFile file,HttpServletRequest request){
        User user = (User)session.getAttribute(CikerConstant.CURRENT_USER);
        if(user == null){
            return ServerResponse.createByErrorCodeMessage(ResponseCode.NEED_LOGIN.getCode(),"用户未登录,请登录管理员");
        }
        String path = request.getSession().getServletContext().getRealPath("upload");
        String targetFileName = iFileService.upload(file,path);
        String url = PropertiesUtil.getProperty("ftp.server.http.prefix")+targetFileName;

        Map fileMap = Maps.newHashMap();
        fileMap.put("uri",targetFileName);
        fileMap.put("url",url);
        return ServerResponse.createBySuccess(fileMap);
    }*/
}

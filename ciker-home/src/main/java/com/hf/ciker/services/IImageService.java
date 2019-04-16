package com.hf.ciker.services;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.vo.ImageListVO;
import com.hf.ciker.vo.ImageVO;

public interface IImageService {
	
	ServerResponse<String> saveImage(ImageVO imageVO);
	
	ServerResponse<String> releaseImage(Long imageId);
	
	ServerResponse<String> unReleaseImage(Long imageId);
	
	ServerResponse<String> batchReleaseImage(List<Long> imageIds);
	
	ServerResponse<String> batchUnReleaseImage(List<Long> imageIds);
	
	ServerResponse<PageInfo<ImageVO>> queryImages(Integer pageNum,Integer pageSize);
	
	ServerResponse<ImageListVO> queryImageByReleased();
}

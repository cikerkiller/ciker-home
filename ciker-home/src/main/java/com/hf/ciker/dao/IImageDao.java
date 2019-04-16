package com.hf.ciker.dao;

import java.util.List;

import com.hf.ciker.vo.ImageVO;

public interface IImageDao {
	
	int saveImage(ImageVO imageVO);
	
	int releaseImage(Long imageId);
	
	int unReleaseImage(Long imageId);
	
	int batchReleaseImage(List<Long> imageIds);
	
	int batchUnReleaseImage(List<Long> imageIds);
	
	List<ImageVO> queryImages();
	
	List<ImageVO> queryImageByReleased();
	
	int queryImageByReleasedCount();
	
}

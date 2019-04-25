package com.hf.ciker.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hf.ciker.vo.ImageVO;

public interface IImageDao {
	
	int saveImage(ImageVO imageVO);
	
	int releaseImage(Long imageId);
	
	int unReleaseImage(Long imageId);
	
	int batchReleaseImage(@Param("imageIds")List<Long> imageIds);
	
	int batchUnReleaseImage(@Param("imageIds")List<Long> imageIds);
	
	int batchDeleteImage(@Param("imageIds") List<Long> imageIds);
	
	List<ImageVO> queryImages();
	
	List<ImageVO> queryImageByReleased();
	
	int queryImageByReleasedCount();
	
}

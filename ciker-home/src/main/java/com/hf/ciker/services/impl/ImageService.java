package com.hf.ciker.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.CikerConstant;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.dao.IImageDao;
import com.hf.ciker.services.IImageService;
import com.hf.ciker.vo.ImageListVO;
import com.hf.ciker.vo.ImageVO;

@Service
public class ImageService implements IImageService{
	
	@Autowired
	private IImageDao imageDao;
	@Override
	public ServerResponse<String> saveImage(ImageVO imageVO) {
		int status = imageDao.saveImage(imageVO);
		if (status > 0) {
			return ServerResponse.createBySuccessMessage("图片保存成功");
		}
		return ServerResponse.createByErrorMessage("图片保存失败");
	}

	@Override
	public ServerResponse<String> releaseImage(Long imageId) {
		int releasedCount = imageDao.queryImageByReleasedCount();
		if(releasedCount == CikerConstant.IMAGE_FULL) {
			return ServerResponse.createByErrorMessage("图片发布失败,已经满了");
		}
		int status = imageDao.releaseImage(imageId);
		if (status > 0) {
			return ServerResponse.createBySuccessMessage("图片发布成功");
		}
		return ServerResponse.createByErrorMessage("图片发布失败");
	}

	@Override
	public ServerResponse<String> unReleaseImage(Long imageId) {
		int status = imageDao.unReleaseImage(imageId);
		if (status > 0) {
			return ServerResponse.createBySuccessMessage("图片下架成功");
		}
		return ServerResponse.createByErrorMessage("图片下架失败");
	}

	@Override
	public ServerResponse<String> batchReleaseImage(List<Long> imageIds) {
		int releasedCount = imageDao.queryImageByReleasedCount();
		if(releasedCount == CikerConstant.IMAGE_FULL) {
			return ServerResponse.createByErrorMessage("图片发布失败,已经满了");
		}else {
			if(releasedCount + imageIds.size() > CikerConstant.IMAGE_FULL) {
				return ServerResponse.createByErrorMessage("图片发布失败,快满了");
			}
		}
		int status = imageDao.batchReleaseImage(imageIds);
		if (status > 0) {
			return ServerResponse.createBySuccessMessage("图片批量发布成功");
		}
		return ServerResponse.createByErrorMessage("图片批量发布失败");
	}

	@Override
	public ServerResponse<String> batchUnReleaseImage(List<Long> imageIds) {
		int status = imageDao.batchUnReleaseImage(imageIds);
		if (status > 0) {
			return ServerResponse.createBySuccessMessage("图片批量下架成功");
		}
		return ServerResponse.createByErrorMessage("图片批量下架失败");
	}

	@Override
	public ServerResponse<PageInfo<ImageVO>> queryImages(Integer pageNum,Integer pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		List<ImageVO> imageVOs = imageDao.queryImages();
		PageInfo<ImageVO> pageResult = new PageInfo<ImageVO>(imageVOs);
		return ServerResponse.createBySuccess(pageResult);
	}

	@Override
	public ServerResponse<ImageListVO> queryImageByReleased() {
		List<ImageVO> imageByReleaseds = imageDao.queryImageByReleased();
		ImageListVO imageListVO = new ImageListVO();
		imageListVO.setList(imageByReleaseds);
		return ServerResponse.createBySuccess(imageListVO);
	}

}

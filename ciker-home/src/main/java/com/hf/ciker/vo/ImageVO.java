package com.hf.ciker.vo;

import java.util.Date;

public class ImageVO {
	
	private Long imageId;
	
	private String imageTitle;
	
	private String imageContent;
	
	private Long createBy;
	
	private Date createDate;
	
	private int isRelease;
	
	private int rowno;
	
	public Long getImageId() {
		return imageId;
	}

	public void setImageId(Long imageId) {
		this.imageId = imageId;
	}

	public String getImageTitle() {
		return imageTitle;
	}

	public void setImageTitle(String imageTitle) {
		this.imageTitle = imageTitle;
	}

	public String getImageContent() {
		return imageContent;
	}

	public void setImageContent(String imageContent) {
		this.imageContent = imageContent;
	}

	public Long getCreateBy() {
		return createBy;
	}

	public void setCreateBy(Long createBy) {
		this.createBy = createBy;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public int getIsRelease() {
		return isRelease;
	}

	public void setIsRelease(int isRelease) {
		this.isRelease = isRelease;
	}

	public int getRowno() {
		return rowno;
	}

	public void setRowno(int rowno) {
		this.rowno = rowno-1;
	}
	
}

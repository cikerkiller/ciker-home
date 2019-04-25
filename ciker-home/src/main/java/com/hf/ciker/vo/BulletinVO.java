package com.hf.ciker.vo;

import java.util.Date;

import org.apache.commons.lang3.time.DateFormatUtils;

public class BulletinVO {
	private Long bulletinId;
	private String bulletinContent;
	private Long createBy;
	private String creator;
	private Date createDate;
	private String creationdate;
	private int isBulletin;
	public Long getBulletinId() {
		return bulletinId;
	}
	public void setBulletinId(Long bulletinId) {
		this.bulletinId = bulletinId;
	}
	public String getBulletinContent() {
		return bulletinContent;
	}
	public void setBulletinContent(String bulletinContent) {
		this.bulletinContent = bulletinContent;
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
	public int getIsBulletin() {
		return isBulletin;
	}
	public void setIsBulletin(int isBulletin) {
		this.isBulletin = isBulletin;
	}
	public String getCreator() {
		return creator;
	}
	public void setCreator(String creator) {
		this.creator = creator;
	}
	public String getCreationdate() {
		return DateFormatUtils.format(createDate==null?new Date():createDate, "yyyy-MM-dd hh:mm:ss");
	}
	public void setCreationdate(String creationdate) {
		this.creationdate =  creationdate;
	}
	
}

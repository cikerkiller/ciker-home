package com.hf.ciker.vo;

import java.io.Serializable;
import java.util.Date;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.DateFormatUtils;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class DetailsArticleVO implements Serializable {

	/**
	* 
	*/
	private static final long serialVersionUID = 8422245355386833226L;

	private Long articleId;

	private String classifyName;

	private String articleTitle;

	private String content;

	private String creationDate;

	private String creatior;

	private String lastUpdateDate;

	private String lastUpdator;

	private Integer status;

	private Integer viewingCount;

	private Integer likeNumber;

	private Integer commentNumber;

	private Integer recommend;
	
	public Long getArticleId() {
		return articleId;
	}

	public void setArticleId(Long articleId) {
		this.articleId = articleId;
	}

	public String getArticleTitle() {
		return articleTitle;
	}

	public void setArticleTitle(String articleTitle) {
		this.articleTitle = articleTitle;
	}

	public String getContent() {
		return content;
	}

	public Integer getRecommend() {
		return recommend;
	}

	public void setRecommend(Integer recommend) {
		this.recommend = recommend;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = DateFormatUtils.format(creationDate, "yyyy-MM-dd hh:mm:ss");
	}

	public String getLastUpdateDate() {
		return lastUpdateDate;
	}

	public void setLastUpdateDate(Date lastUpdateDate) {
		this.lastUpdateDate = DateFormatUtils.format(lastUpdateDate, "yyyy-MM-dd hh:mm:ss");
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getLikeNumber() {
		return likeNumber == null ? 0 : likeNumber;
	}

	public void setLikeNumber(Integer likeNumber) {
		this.likeNumber = likeNumber;
	}

	public Integer getCommentNumber() {
		return commentNumber == null ? 0 : commentNumber;
	}

	public void setCommentNumber(Integer commentNumber) {
		this.commentNumber = commentNumber;
	}

	public String getClassifyName() {
		return classifyName;
	}

	public void setClassifyName(String classifyName) {
		this.classifyName = classifyName;
	}

	public String getCreatior() {
		return StringUtils.isBlank(creatior) ? "佚名":creatior;
	}

	public void setCreatior(String creatior) {
		this.creatior = creatior;
	}

	public String getLastUpdator() {
		return StringUtils.isBlank(lastUpdator) ? "佚名":lastUpdator;
	}

	public void setLastUpdator(String lastUpdator) {
		this.lastUpdator = lastUpdator;
	}

	public Integer getViewingCount() {
		return viewingCount;
	}

	public void setViewingCount(Integer viewingCount) {
		this.viewingCount = viewingCount;
	}

}

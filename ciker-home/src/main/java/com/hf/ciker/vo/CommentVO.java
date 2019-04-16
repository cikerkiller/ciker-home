package com.hf.ciker.vo;

import java.util.Date;

import org.apache.commons.lang3.time.DateFormatUtils;

public class CommentVO {
	
	private Long commentId;
	
	private String commentContent;
	
	private Long commentator;
	
	private String commentatorIp;
	
	private Long articleId;
	
	private String commentDate;

	public Long getCommentId() {
		return commentId;
	}

	public void setCommentId(Long commentId) {
		this.commentId = commentId;
	}

	public String getCommentContent() {
		return commentContent;
	}

	public void setCommentContent(String commentContent) {
		this.commentContent = commentContent;
	}

	public Long getCommentator() {
		return commentator;
	}

	public void setCommentator(Long commentator) {
		this.commentator = commentator;
	}

	public String getCommentatorIp() {
		return commentatorIp;
	}

	public void setCommentatorIp(String commentatorIp) {
		this.commentatorIp = commentatorIp;
	}

	public Long getArticleId() {
		return articleId;
	}

	public void setArticleId(Long articleId) {
		this.articleId = articleId;
	}

	public String getCommentDate() {
		return commentDate;
	}

	public void setCommentDate(Date commentDate) {
		this.commentDate = DateFormatUtils.format(commentDate, "yyyy-MM-dd hh:mm:ss");
	}
	
}

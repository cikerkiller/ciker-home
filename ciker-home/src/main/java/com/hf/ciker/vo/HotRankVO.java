package com.hf.ciker.vo;

public class HotRankVO {
	
	private int rank;
	
	private Long articleId;
	
	private String articleTitle;
	
	private Long viewingCount;
	
	private Integer likeNumber;

	public int getRank() {
		return rank;
	}

	public void setRank(int rank) {
		this.rank = rank;
	}

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

	public Long getViewingCount() {
		return viewingCount;
	}

	public void setViewingCount(Long viewingCount) {
		this.viewingCount = viewingCount;
	}

	public Integer getLikeNumber() {
		return likeNumber;
	}

	public void setLikeNumber(Integer likeNumber) {
		this.likeNumber = likeNumber;
	}
	
}

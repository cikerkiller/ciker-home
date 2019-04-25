package com.hf.ciker.vo;

import java.util.Date;

public class ArticleLikeVO {
    private Long articleLikeId;

    private Long articleId;

    private Long likePeopleId;

    private Date likeDate;

    public ArticleLikeVO(Long articleLikeId, Long articleId, Long likePeopleId, Date likeDate) {
        this.articleLikeId = articleLikeId;
        this.articleId = articleId;
        this.likePeopleId = likePeopleId;
        this.likeDate = likeDate;
    }

    public ArticleLikeVO() {
        super();
    }

    public Long getArticleLikeId() {
        return articleLikeId;
    }

    public void setArticleLikeId(Long articleLikeId) {
        this.articleLikeId = articleLikeId;
    }

    public Long getArticleId() {
        return articleId;
    }

    public void setArticleId(Long articleId) {
        this.articleId = articleId;
    }

    public Long getLikePeopleId() {
        return likePeopleId;
    }

    public void setLikePeopleId(Long likePeopleId) {
        this.likePeopleId = likePeopleId;
    }

    public Date getLikeDate() {
        return likeDate;
    }

    public void setLikeDate(Date likeDate) {
        this.likeDate = likeDate;
    }
}
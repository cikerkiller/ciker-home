package com.hf.ciker.vo;

public class TagVO {
	
    private Long tagId;

    private String tagName;

    private Long tagNumber;

    public Long getTagId() {
        return tagId;
    }

    public void setTagId(Long tagId) {
        this.tagId = tagId;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName == null ? null : tagName.trim();
    }

    public Long getTagNumber() {
        return tagNumber;
    }

    public void setTagNumber(Long tagNumber) {
        this.tagNumber = tagNumber;
    }
}
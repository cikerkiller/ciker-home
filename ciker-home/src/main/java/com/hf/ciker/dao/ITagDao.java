package com.hf.ciker.dao;

import java.util.List;

import com.hf.ciker.vo.TagVO;

public interface ITagDao {
	
    int deleteByPrimaryKey(Long tagId);

    int insert(TagVO record);

    int insertSelective(TagVO record);

    TagVO selectByPrimaryKey(Long tagId);

    int updateByPrimaryKeySelective(TagVO record);

    int updateByPrimaryKey(TagVO record);
    
    List<TagVO> queryTagCloud();
}
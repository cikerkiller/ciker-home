package com.hf.ciker.dao;

import org.apache.ibatis.annotations.Param;

import com.hf.ciker.vo.User;

public interface IUserDao {
	User selectUser(@Param("username")String username,@Param("password")String password);
}

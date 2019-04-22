package com.hf.ciker.dao;

import org.apache.ibatis.annotations.Param;

import com.hf.ciker.vo.User;
import com.hf.ciker.vo.UserVO;

public interface IUserDao {
	User selectUser(@Param("username")String username,@Param("password")String password);
	UserVO queryUserInfo(Long userId);
}

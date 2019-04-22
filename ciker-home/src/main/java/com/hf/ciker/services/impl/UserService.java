package com.hf.ciker.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.dao.IUserDao;
import com.hf.ciker.services.IUserService;
import com.hf.ciker.vo.User;
import com.hf.ciker.vo.UserVO;

@Service
public class UserService implements IUserService {

	@Autowired
	private IUserDao userDao;
	
	@Override
	public ServerResponse<UserVO> login(String username, String password) {
		User user = userDao.selectUser(username, password);
		if(user != null) {
			UserVO userInfo = userDao.queryUserInfo(user.getUserId());
			userInfo.setUsername(user.getUsername());
			return ServerResponse.createBySuccess(userInfo);
		}
		return ServerResponse.createByError();
	}

}

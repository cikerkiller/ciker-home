package com.hf.ciker.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.dao.IUserDao;
import com.hf.ciker.services.IUserService;
import com.hf.ciker.vo.User;

@Service
public class UserService implements IUserService {

	@Autowired
	private IUserDao userDao;
	
	@Override
	public ServerResponse<User> login(String username, String password) {
		User user = userDao.selectUser(username, password);
		if(user != null) {
			user.setPassword("");
			return ServerResponse.createBySuccess(user);
		}
		return ServerResponse.createByError();
	}

}

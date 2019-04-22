package com.hf.ciker.services;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.vo.User;

public interface IUserService {
    ServerResponse<User> login(String username, String password);
}

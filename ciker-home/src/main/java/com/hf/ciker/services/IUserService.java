package com.hf.ciker.services;

import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.vo.UserVO;

public interface IUserService {
    ServerResponse<UserVO> login(String username, String password);
}

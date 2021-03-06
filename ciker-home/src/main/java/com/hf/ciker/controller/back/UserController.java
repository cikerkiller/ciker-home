package com.hf.ciker.controller.back;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hf.ciker.common.CikerConstant;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.services.IUserService;
import com.hf.ciker.vo.UserVO;

@Controller
@RequestMapping("/user/back")
public class UserController {
	
	 @Autowired
	 private IUserService iUserService;
	
	@RequestMapping(value="login.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<String> login(String username, String password, HttpSession session) {
		 ServerResponse<UserVO> response = iUserService.login(username,password);
        if(response.isSuccess()){
            session.setAttribute(CikerConstant.CURRENT_USER,response.getData());
            return ServerResponse.createBySuccess(response.getData().getUsername());
        }
         return ServerResponse.createByError();
	}
	@RequestMapping(value="logout.do",method = RequestMethod.GET)
	@ResponseBody
	public ServerResponse<String> logout(HttpSession session) {
		session.removeAttribute(CikerConstant.CURRENT_USER);
		return ServerResponse.createBySuccess();
	}
	
}

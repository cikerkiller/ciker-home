package com.hf.ciker.controller.back;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/user")
public class LoginController {
	
	@RequestMapping(value="login.do",method = RequestMethod.POST)
	public void login(String username, String password, HttpSession session) {
		
	}
	
}

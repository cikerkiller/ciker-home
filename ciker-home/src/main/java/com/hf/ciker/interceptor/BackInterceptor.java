package com.hf.ciker.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.hf.ciker.common.CikerConstant;
import com.hf.ciker.vo.UserVO;

public class BackInterceptor extends HandlerInterceptorAdapter {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		if(StringUtils.contains(request.getRequestURI(), "back")) {
			if(StringUtils.contains(request.getRequestURI(), "user")) {
				return true;
			}
			HttpSession session = request.getSession();
			UserVO user = (UserVO) session.getAttribute(CikerConstant.CURRENT_USER);
			if(user != null){
				return true;
			}else {
				response.sendRedirect("../../../jsp/back/login.jsp");
//				request.getRequestDispatcher("../../../jsp/back/login.jsp").forward(request,response);
				return false;
			}
		}else {
			return true;
		}
		
	}

}

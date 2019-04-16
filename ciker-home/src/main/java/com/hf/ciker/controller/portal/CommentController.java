package com.hf.ciker.controller.portal;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.hf.ciker.common.CikerConstant;
import com.hf.ciker.common.ServerResponse;
import com.hf.ciker.services.ICommentService;
import com.hf.ciker.utils.NetWorkUtil;
import com.hf.ciker.vo.CommentVO;
import com.hf.ciker.vo.UserVO;

@Controller
@RequestMapping("/it/comment")
public class CommentController {
	
	@Autowired
	private ICommentService commentService;
	
	@RequestMapping(value="add.do",method = RequestMethod.POST)
	@ResponseBody
	public  ServerResponse<String> addComment(HttpServletRequest servletRequest,HttpSession session,CommentVO commentVO){
		 UserVO user = (UserVO) session.getAttribute(CikerConstant.CURRENT_USER);
         if(user != null){
        	 commentVO.setCommentator(user.getUserId());
         }else {
        	 commentVO.setCommentator(new Long(000000));
         }
		String commentIp = NetWorkUtil.getIpAddr(servletRequest);
		commentVO.setCommentatorIp(commentIp);
		return commentService.addComment(commentVO);
	} 
	
	@RequestMapping(value="queryByPage.do",method = RequestMethod.POST)
	@ResponseBody
	public ServerResponse<PageInfo<CommentVO>> queryByPage(@RequestParam(value="pageNum",defaultValue="1") Integer pageNum,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,Long articleId) {
		return commentService.queryComments(pageNum,pageSize,articleId);
	}
}

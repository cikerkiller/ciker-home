package com.hf.ciker.vo;

import java.util.Date;

public class UserVO {

	private Long userId;
	
	private String username;

	private String userNameZhCn;

	private String userNameEnUs;

	private String gender;

	private Integer age;

	private String address;

	private String email;

	private String phoneNunber;

	private Date creationDate;

	private Date lastUpdateDate;

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUserNameZhCn() {
		return userNameZhCn;
	}

	public void setUserNameZhCn(String userNameZhCn) {
		this.userNameZhCn = userNameZhCn;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUserNameEnUs() {
		return userNameEnUs;
	}

	public void setUserNameEnUs(String userNameEnUs) {
		this.userNameEnUs = userNameEnUs;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNunber() {
		return phoneNunber;
	}

	public void setPhoneNunber(String phoneNunber) {
		this.phoneNunber = phoneNunber;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public Date getLastUpdateDate() {
		return lastUpdateDate;
	}

	public void setLastUpdateDate(Date lastUpdateDate) {
		this.lastUpdateDate = lastUpdateDate;
	}

}

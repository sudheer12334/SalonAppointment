package com.abc.salonapp.Entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table
public class Admin extends User {

	private String email;

//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}

	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin(String email) {
		super();
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}

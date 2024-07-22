package com.abc.salonapp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.abc.salonapp.Entity.Admin;
import com.abc.salonapp.Service.AdminLoginService;

@Controller
@RequestMapping("/admin")
public class AdminLoginController {
		
		@Autowired
		public AdminLoginService adminservice;
		
@PostMapping("/login")
@CrossOrigin(origins = "http://localhost:3000")
public ResponseEntity<String> loginAdmin(@RequestBody Admin admin){
			String ans= adminservice.loginAdmin(admin);
		 return new ResponseEntity<>(ans, HttpStatus.OK);
}	




@PostMapping("/Save")
@CrossOrigin(origins = "http://localhost:3000")
public ResponseEntity<Admin> AddAdmin(@RequestBody Admin admin){
			Admin ans= adminservice.addAdmin(admin);
		 return new ResponseEntity<>(ans, HttpStatus.OK);
}	

}



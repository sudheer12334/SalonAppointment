package com.abc.salonapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abc.salonapp.Entity.Admin;
import com.abc.salonapp.Repositories.AdminLogin;
@Service
public class AdminLoginService {
	
	@Autowired
	public AdminLogin adminrepo;
	
	public String loginAdmin(Admin admin)
	{
		Admin boss = (Admin) (adminrepo.findByuserIdAndUserType(admin.getUserId(),"admin"));
		
		if(boss.getEmail().equals(admin.getEmail()) && boss.getUserPassword().equals(admin.getUserPassword()))
		{
			return "True";
		}
		else {
			throw new IllegalArgumentException("Invalid Login Details");
			
		}
	}
	
	public Admin addAdmin(Admin admin)
	{
			if (admin==null)
			{
				throw new IllegalArgumentException("invalid Details");
			}
			else {
			Admin newadmin =	adminrepo.save(admin);	
			return newadmin;
			}

	}
}	

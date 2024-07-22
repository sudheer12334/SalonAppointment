package com.abc.salonapp.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abc.salonapp.Entity.Admin;
@Repository
public interface AdminLogin extends JpaRepository<Admin,Long>{

	Object findByuserIdAndUserType(Long id  , String string);
	
}

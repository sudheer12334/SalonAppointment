package com.abc.salonapp.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.abc.salonapp.Entity.Customer;

//@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Long> {
	@Query("select c from Customer c where c.userName = :uname and c.userPassword = :pwd")
    public Optional<Customer> doLogin(@Param("uname") String userName, @Param("pwd") String userPassword);
}


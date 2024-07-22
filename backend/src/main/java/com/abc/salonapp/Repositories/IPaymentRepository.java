package com.abc.salonapp.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abc.salonapp.Entity.Payment;


@Repository
public interface IPaymentRepository extends JpaRepository<Payment,Long>{
	
}

package com.abc.salonapp.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abc.salonapp.Entity.SalonService;




//This class provides the mechanism for storage,retrieval,search,update and delete operation
@Repository
public interface ISalonRepository extends JpaRepository<SalonService, Long> {

	public List<SalonService> findByPrice(double price);

	public List<SalonService> findByDuration(String duration);

}

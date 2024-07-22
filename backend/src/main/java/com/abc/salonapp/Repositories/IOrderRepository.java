package com.abc.salonapp.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.abc.salonapp.Entity.Order;







@Repository
public interface IOrderRepository extends JpaRepository<Order,Long> {

}

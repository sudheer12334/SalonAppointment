package com.abc.salonapp.Service;
import java.util.List;

import org.hibernate.boot.registry.classloading.internal.ClassLoaderServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abc.salonapp.Entity.Order;
import com.abc.salonapp.Exception.OrderNotFoundException;
import com.abc.salonapp.Repositories.IOrderRepository;



@Service
public class IOrderServiceImpl implements IOrderService {

	// Dependency injection for CRUD operations
	@Autowired
	public IOrderRepository orderrepo;

	public static final Logger LOGGER = LoggerFactory.getLogger(ClassLoaderServiceImpl.class);

	// fetching all order details



	@Override
	public List<Order> getAllOrders() {
		LOGGER.info("OrderService getAllOrders() started");
		List<Order> orders = orderrepo.findAll();
		LOGGER.info("OrderService getAllOrders() ended");
		return orders;
	}

	// fetching specific order details
	@Override
	public Order getOrderDetails(long id) {
		LOGGER.info("OrderService getOrderDetails() started");
		Order order = orderrepo.findById(id).orElse(null);
		if (order == null) {
			throw new OrderNotFoundException("Order Details Not Present");
		}
		LOGGER.info("OrderService getOrderDetails() ended");
		return order;
	}

	// adding order

	@Override
	public Order addOrder(Order order) {
		LOGGER.info("OrderService addOrder() started");
		if (!order.getPayment().getType().equalsIgnoreCase("card")
				&& !order.getPayment().getType().equalsIgnoreCase("upi")
				&& !order.getPayment().getType().equalsIgnoreCase("cod")) {
			throw new IllegalArgumentException("preffered payment types are : card , cod , upi");
		}
		Order neworder = orderrepo.save(order);
		LOGGER.info("OrderService addOrder() ended");
		return neworder;
	}

	// removing specific order

	@Override
	public Order removeOrder(long id) {
		LOGGER.info("OrderService removeOrder() started");
		Order order = orderrepo.findById(id).orElse(null);
		if (order == null) {
			throw new OrderNotFoundException("Order Details Not Present");
		}
		orderrepo.deleteById(id);
		LOGGER.info("OrderService removeOrder() ended");
		return order;
	}

	// updating certain order

	@Override
	public Order updateOrder(long id, Order order) {
		LOGGER.info("OrderService updateOrder() started");
		Order neworder = orderrepo.findById(id).orElse(null);
		if (neworder == null) {
			throw new OrderNotFoundException("Order Details Not Present");
		}
		neworder.setAmount(order.getAmount());
		neworder.setBillingDate(order.getBillingDate());
		neworder.setOrderId(id);
		neworder.setPayment(order.getPayment());
		LOGGER.info("OrderService updateOrder() ended");
		return neworder;
	}

}

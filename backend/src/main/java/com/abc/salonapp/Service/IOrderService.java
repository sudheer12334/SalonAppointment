package com.abc.salonapp.Service;

import java.util.List;

import com.abc.salonapp.Entity.Order;




public interface IOrderService {
	public Order addOrder(Order order);

	public Order removeOrder(long id);

	public Order updateOrder(long id, Order order);

	public Order getOrderDetails(long id);

	public List<Order> getAllOrders();

}

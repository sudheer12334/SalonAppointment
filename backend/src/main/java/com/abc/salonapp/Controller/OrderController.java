package com.abc.salonapp.Controller;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.abc.salonapp.Entity.Order;
import com.abc.salonapp.Service.IOrderServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/order")
public class OrderController {

	@Autowired
	public IOrderServiceImpl orderservice;

	public static final Logger LOGGER = LoggerFactory.getLogger(OrderController.class);

	/** GET request to return all Orders **/

	@GetMapping("/all")
	public ResponseEntity<List<Order>> getallOrder() {
		LOGGER.info("Order getallOrder() started");
		List<Order> orders = orderservice.getAllOrders();
		LOGGER.info("Order getallOrder() ended");
		return new ResponseEntity<>(orders, HttpStatus.OK);
	}

	/** GET request to return specific Order using its id **/

	@GetMapping("/{id}")
	public ResponseEntity<Order> getOrderById(@PathVariable long id) {
		LOGGER.info("Order getOrderById() started");
		Order order = orderservice.getOrderDetails(id);
		LOGGER.info("Order getOrderById() ended");
		return new ResponseEntity<>(order, HttpStatus.OK);
	}

	/** POST request to add new Order **/

	@PostMapping("/save")
	public ResponseEntity<Order> saveOrder(@RequestBody @Validated Order order) {
		LOGGER.info("Order saveOrder() started");
		Order neworder = orderservice.addOrder(order);
		LOGGER.info("Order saveOrder() ended");
		return new ResponseEntity<>(neworder, HttpStatus.CREATED);
	}

	/** PUT request to update Order **/

	@PutMapping("/update/{id}")
	public ResponseEntity<Order> UpdateOrderDetails(@PathVariable Long id, @RequestBody Order order) {
		LOGGER.info("Order UpdateOrderDetails() started");
		orderservice.updateOrder(id, order);
		LOGGER.info("Order UpdateOrderDetails() ended");
		return new ResponseEntity<>(order, HttpStatus.OK);
	}

	/** DELETE request to delete specific Order **/

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Order> deleteOrder(@PathVariable Long id) {
		LOGGER.info("Order deleteOrder() started");
		Order order = orderservice.removeOrder(id);
		LOGGER.info("Order deleteOrder() ended");
		return new ResponseEntity<>(order, HttpStatus.OK);
	}

}

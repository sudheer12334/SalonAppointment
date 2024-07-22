package com.abc.salonappdemo.test;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.abc.salonapp.Entity.Order;
import com.abc.salonapp.Exception.OrderNotFoundException;
import com.abc.salonapp.Repositories.IOrderRepository;
import com.abc.salonapp.Service.IOrderServiceImpl;


@SpringBootTest
public class OrderServiceTest {

	@Mock
	private IOrderRepository orderrepository;
	@InjectMocks
	private IOrderServiceImpl orderserviceimpl;

	@Test
	public void testGetOrder() {
		Order order = new Order();
		order.setOrderId(1);
		order.setAmount(5000);
		order.setBillingDate(LocalDate.of(1999, 03, 11));
		Optional<Order> optionalService = Optional.of(order);
		when(orderrepository.findById((long) 1)).thenReturn(optionalService);
		Order eService = orderserviceimpl.getOrderDetails(1);
		assertEquals(order.getAmount(), eService.getAmount());
		//assertEquals(order.getBillingDate(), eService.getBillingDate());
	}

	@Test
	public void testGetServiceThrowsException() {
		when(orderrepository.findById((long) 1)).thenThrow(OrderNotFoundException.class);
	assertThrows(OrderNotFoundException.class, () -> orderserviceimpl.getOrderDetails(1));
	}
}

package com.abc.salonappdemo.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.abc.salonapp.Entity.Payment;
import com.abc.salonapp.Exception.PaymentNotFoundException;
import com.abc.salonapp.Repositories.IPaymentRepository;
import com.abc.salonapp.Service.IPaymentServiceImpl;


@SpringBootTest
public class PaymentServiceTest {

	@Mock
	private IPaymentRepository  paymentrepository;

	@InjectMocks
	private IPaymentServiceImpl paymentserviceimpl;

	@Test
	public void testGetPayment() {
		Payment payment = new Payment();
		payment.setType("card");
		payment.setStatus("confirmed");
		payment.setPaymentId(1);
	
		Optional<Payment> optionalService = Optional.of(payment);

		when(paymentrepository.findById((long) 1)).thenReturn(optionalService);
		Payment eService = paymentserviceimpl.getPaymentDetails(1);
		assertEquals(payment.getStatus(), eService.getStatus());
		assertEquals(payment.getType(), eService.getType());
		
	}
	

@Test
	public void testGetServiceThrowsException() {
		when(paymentrepository.findById((long) 1)).thenThrow(PaymentNotFoundException.class);
	assertThrows(PaymentNotFoundException.class, () -> paymentserviceimpl.getPaymentDetails(1));
	}
}
	
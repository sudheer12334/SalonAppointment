package com.abc.salonapp.Controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abc.salonapp.Entity.Payment;
import com.abc.salonapp.Service.IPaymentServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/payment")
public class PaymentController {

	@Autowired
	public IPaymentServiceImpl paymentservice;

	public static final Logger LOGGER = LoggerFactory.getLogger(PaymentController.class);

	/** GET request to return all Payments **/
	@GetMapping("/all")
	public ResponseEntity<List<Payment>> getAllPayments() {
		LOGGER.info("Payment getAllPayments() started");
		List<Payment> payments = paymentservice.getAllPaymentDetails();
		LOGGER.info("Payment getAllPayments() ended");
		return new ResponseEntity<>(payments, HttpStatus.OK);
	}

	/** GET request to return specific Payment using its id **/

	@GetMapping("/{id}")
	public ResponseEntity<Payment> getPaymentDetailsById(@PathVariable long id) {
		LOGGER.info("Payment getPaymentDetailsById() started");
		Payment payment = paymentservice.getPaymentDetails(id);
		LOGGER.info("Payment getPaymentDetailsById() ended");
		return new ResponseEntity<>(payment, HttpStatus.OK);
	}

	/** POST request to add new Payment **/

	@PostMapping("/save")
	public ResponseEntity<Payment> savePaymentDetails(@RequestBody  Payment payment) {
		LOGGER.info("Payment savePaymentDetails() started");
		paymentservice.addPayment(payment);
		LOGGER.info("Payment savePaymentDetails() ended");
		return new ResponseEntity<>(payment, HttpStatus.CREATED);
	}

	/** PUT request to update Payment **/

	@PutMapping("/update/{id}")
	public ResponseEntity<Payment> UpdatePaymentDetails(@PathVariable Long id, @RequestBody Payment payment) {
		LOGGER.info("Payment UpdatePaymentDetails() started");
		Payment newpayment = paymentservice.updatePayment(id, payment);
		LOGGER.info("Payment UpdatePaymentDetails() ended");
		return new ResponseEntity<>(newpayment, HttpStatus.OK);
	}

	/** DELETE request to delete specific Payment **/

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Payment> deletePaymentbyId(@PathVariable Long id) {
		LOGGER.info("Payment deletePaymentbyId() started");
		Payment payment = paymentservice.removePayment(id);
		LOGGER.info("Payment deletePaymentbyId() ended");

		return new ResponseEntity<>(payment, HttpStatus.OK);
	}

}

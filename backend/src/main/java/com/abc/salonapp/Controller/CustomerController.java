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
import com.abc.salonapp.Entity.Customer;
import com.abc.salonapp.Payload.LoginReqPayload;
import com.abc.salonapp.Payload.LoginResponse;
import com.abc.salonapp.Service.AuthenticationService;
import com.abc.salonapp.Service.ICustomerService;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

	@Autowired
	private ICustomerService iCustomerService;
	@Autowired
	private AuthenticationService authenticationService;
	public static final Logger LOGGER = LoggerFactory.getLogger(CustomerController.class);

	@PostMapping("/save")
	public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
		LOGGER.info("Customer createCustomer() started");
		Customer cust = iCustomerService.addCustomer(customer);
		ResponseEntity<Customer> responseEntity = new ResponseEntity<>(cust, HttpStatus.CREATED);
		LOGGER.info("Customer createCustomer() ended");
		return responseEntity;
	}

	@GetMapping("/all")
	public ResponseEntity<List<Customer>> allCustomer() {
		LOGGER.info("Customer allCustomer() started");
		List<Customer> listCustomers = iCustomerService.getAllCustomers();
		ResponseEntity<List<Customer>> responseEntity = new ResponseEntity<>(listCustomers, HttpStatus.ACCEPTED);
		LOGGER.info("Customer allCustomer() ended");
		return responseEntity;
	}

	@DeleteMapping("/delete/{userId}")
	public ResponseEntity<String> delCustomer(@PathVariable("userId") long userId) {
		LOGGER.info("Customer delCustomer() started");
		iCustomerService.removeCustomer(userId);
		ResponseEntity<String> responseEntity = new ResponseEntity<>("Customer deleted successfully", HttpStatus.OK);
		LOGGER.info("Customer delCustomer() ended");
		return responseEntity;
	}

	@GetMapping("/{userId}")
	public ResponseEntity<Customer> knowById(@PathVariable("userId") long userId) {
		LOGGER.info("Customer knowById() started");
		Customer knowCustomer = iCustomerService.getCustomer(userId);
		ResponseEntity<Customer> responseEntity = new ResponseEntity<>(knowCustomer, HttpStatus.OK);
		LOGGER.info("Customer knowById() ended");
		return responseEntity;
	}

	@PutMapping("/update/{userId}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable long userId, @RequestBody Customer customer) {
		LOGGER.info("Customer updateCust() started");
		Customer upCust = iCustomerService.updateCustomer(userId, customer);
		ResponseEntity<Customer> responseEntity = new ResponseEntity<>(upCust, HttpStatus.OK);
		LOGGER.info("Customer updateCust() ended");
		return responseEntity;
	
	}
	@PostMapping("/login")
    public ResponseEntity<LoginResponse> doLogin(@RequestBody LoginReqPayload loginPayload) {
        LoginResponse loginResponse = authenticationService.login(loginPayload.getUserName(), loginPayload.getUserPassword());
        return new ResponseEntity<>(loginResponse,HttpStatus.OK);
    }
}

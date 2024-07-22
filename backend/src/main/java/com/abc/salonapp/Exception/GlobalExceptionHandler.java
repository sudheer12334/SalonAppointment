package com.abc.salonapp.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
	
	//Exception handler to handle any general exception 
	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> handleGlobalException(Exception e){
		return new ResponseEntity<>("Some unKnown error occured ",HttpStatus.NOT_FOUND);
	}
	
 
	@ExceptionHandler(OrderNotFoundException.class)
	public ResponseEntity<String> handleOrderNotFoundException(Exception e){
		return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(PaymentNotFoundException.class)
	public ResponseEntity<String> handlePaymentNotFoundException(Exception e){
		return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(NoCustomerFoundException.class)
	public ResponseEntity<String> handleNoCustomerFoundException(Exception e){
		return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
	}
	
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<String> handleResourceNotFoundException(Exception e){
		return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
	}
	@ExceptionHandler(DuplicateCustomerException.class)
	public ResponseEntity<String> handleDuplicateCustomerException(Exception e){
		return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
	}
	@ExceptionHandler(CustomerServiceException.class)
	public ResponseEntity<String> handleCustomerServiceException(Exception e){
		return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
	}
	@ExceptionHandler(AuthenticationFailureException.class)
	public ResponseEntity<String> handleAuthenticationFailureException(Exception e){
		return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
	}
	

	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<String> handleUserNotFoundException(Exception e){
		return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(SalonServiceException.class)
	public ResponseEntity<String> IllegalArgumentException(Exception e) {
	ResponseEntity<String> responseEntity = new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
	return responseEntity;
	}

	@ExceptionHandler(UpdateAndRemoveException.class)
	public ResponseEntity<String> NoSuchElementException(Exception e) {
	ResponseEntity<String> responseEntity = new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
	return responseEntity;
	}
}
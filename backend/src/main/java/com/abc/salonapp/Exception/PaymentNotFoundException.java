package com.abc.salonapp.Exception;

public class PaymentNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4233939520066148685L;

	public PaymentNotFoundException(String message) {
		super(message);
	}	
}

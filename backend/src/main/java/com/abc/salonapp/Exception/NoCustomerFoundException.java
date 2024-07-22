package com.abc.salonapp.Exception;

public class NoCustomerFoundException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public NoCustomerFoundException (String message) {
		super(message);
	}
}

package com.abc.salonapp.Exception;

public class CustomerServiceException extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CustomerServiceException (String message) {
		super(message);
	}
}

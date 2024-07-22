package com.abc.salonapp.Exception;

public class OrderNotFoundException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5713544874126663681L;

	public OrderNotFoundException(String message) {
		super(message);
	}	

}

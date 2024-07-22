package com.abc.salonapp.Exception;

public class AuthenticationFailureException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public AuthenticationFailureException(String message) {
		super(message);
	}
}

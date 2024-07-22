package com.abc.salonapp.Service;

import com.abc.salonapp.Payload.LoginResponse;

public interface AuthenticationService {

	public LoginResponse login(String userName, String password);
}


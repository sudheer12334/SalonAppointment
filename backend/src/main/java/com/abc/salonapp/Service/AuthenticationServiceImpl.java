package com.abc.salonapp.Service;

import java.util.Optional;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abc.salonapp.Repositories.ICustomerRepository;
import com.abc.salonapp.Entity.Customer;
import com.abc.salonapp.Exception.AuthenticationFailureException;
import com.abc.salonapp.Payload.LoginResponse;
 
@Service
public class AuthenticationServiceImpl implements AuthenticationService {
 
    @Autowired
    private ICustomerRepository customerRepository;

    @Override
    public LoginResponse login(String userName, String userPassword) {

        Optional<Customer> optionalCustomer = customerRepository.doLogin(userName, userPassword);
        if(optionalCustomer.isEmpty()) {
            throw new AuthenticationFailureException("Username or Password Wrong!");
        }

        Customer customer = optionalCustomer.get();

        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setCustomerId(customer.getUserId());
        loginResponse.setCustomerName(customer.getUserName());

        return loginResponse;
    }

}

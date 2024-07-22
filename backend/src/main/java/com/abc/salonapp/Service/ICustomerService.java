package com.abc.salonapp.Service;

import java.util.List;
import com.abc.salonapp.Entity.Customer;
import com.abc.salonapp.Payload.LoginResponse;

public interface ICustomerService {

	public Customer addCustomer(Customer customer);

	public void removeCustomer(long userId);

	public Customer updateCustomer(long userId, Customer customer);

	public Customer getCustomer(long userId);

	public List<Customer> getAllCustomers();
	
	public LoginResponse login(String userName, String password);

}

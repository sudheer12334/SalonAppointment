package com.abc.salonapp.Service;

import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abc.salonapp.Entity.Customer;
import com.abc.salonapp.Exception.AuthenticationFailureException;
import com.abc.salonapp.Exception.DuplicateCustomerException;
import com.abc.salonapp.Exception.NoCustomerFoundException;
import com.abc.salonapp.Exception.ResourceNotFoundException;
import com.abc.salonapp.Exception.UserNotFoundException;
import com.abc.salonapp.Payload.LoginResponse;
import com.abc.salonapp.Repositories.ICustomerRepository;

@Service // compulsory - business logic
public class ICustomerServiceImpl implements ICustomerService {

	@Autowired
	private ICustomerRepository iCustomerRepository;
	//Dependency injection for CRUD operations

	public static final Logger LOGGER = LoggerFactory.getLogger(ICustomerServiceImpl.class);

	@Override
	public Customer addCustomer(Customer customer) throws DuplicateCustomerException {
		LOGGER.info("CustomerService addCustomer() started");
		Optional<Customer> customer1 = iCustomerRepository.findById(customer.getUserId());
		if (customer1.isPresent()) {
			LOGGER.info("Customer is already present in our DataBase");
			throw new DuplicateCustomerException(
					"Customer is already available in Database , please change userId " + customer.getUserId());
		}
		LOGGER.info("Customer is succesfully saved in DataBase");
		Customer newCustomer = iCustomerRepository.save(customer);
		LOGGER.info("CustomerService addCustomer() ended");
		return newCustomer;
	}

	@Override
	public void removeCustomer(long userId) throws NoCustomerFoundException {
		LOGGER.info("CustomerService removeCustomer started");
		Optional<Customer> optionalCustomer = iCustomerRepository.findById(userId);
		if (optionalCustomer.isPresent()) {
			LOGGER.info("Customer is Removed succesfully from DataBase");

			iCustomerRepository.deleteById(userId);

		} else {
			LOGGER.info("CustomerService removeCustomer() ended");
			throw new NoCustomerFoundException("This Customer is Does Not exists" + userId);

		}
	}

	@Override
	public Customer updateCustomer(long userId, Customer customer) throws NoCustomerFoundException {
		LOGGER.info("CustomerService updateCustomer() started");
		Optional<Customer> customerUpdate = iCustomerRepository.findById(userId);
		Customer result = customerUpdate.orElse(null);
		if (customerUpdate.isEmpty()) {
			throw new NoCustomerFoundException("No such Customer is present in our records" + customer.getUserId());
		}
		
		Customer newCustomer = iCustomerRepository.save(customer);
		LOGGER.info("CustomerService updateCustomer() ended");
		return iCustomerRepository.save(result);

	}

	@Override
	public Customer getCustomer(long userId) {
		LOGGER.info("CustomerService getCustomer() started");
		Optional<Customer> optional = iCustomerRepository.findById(userId);
		if (optional.isEmpty()) {
			throw new ResourceNotFoundException("Customer not exisiting with id : " + userId);
		}
		Customer customer = optional.get();
		LOGGER.info("CustomerService getCustomer() ended");
		return customer;
	}

	@Override
	public List<Customer> getAllCustomers() throws NoCustomerFoundException {
		LOGGER.info("CustomerService getallCustomer() started");
		List<Customer> listCustomer = iCustomerRepository.findAll();
		if (listCustomer.isEmpty()) {
			throw new NoCustomerFoundException("No Customer List Present In DataBase");
		}
		LOGGER.info("CustomerService getallCustomer() ended");
		return iCustomerRepository.findAll();
	}
	
	@Override
    public LoginResponse login(String userName, String password) {
        Optional<Customer> optionalCustomer = iCustomerRepository.doLogin(userName, password);
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

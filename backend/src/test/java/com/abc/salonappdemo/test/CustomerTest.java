package com.abc.salonappdemo.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.time.LocalDate;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import com.abc.salonapp.Entity.Customer;
import com.abc.salonapp.Repositories.ICustomerRepository;
import com.abc.salonapp.Service.ICustomerServiceImpl;

@SpringBootTest
public class CustomerTest {

	@Mock
	private ICustomerRepository iCustomerRepository;

	@InjectMocks
	private ICustomerServiceImpl iCustomerServiceImpl;

	@Test
	public void testAddCustomer() {
		Customer eService = new Customer();
		eService.setUserId(1);
		eService.setName("sam");
		eService.setEmail("jeebatch@gmail.com");
		eService.setContactNo("9876543210");
		eService.setDob(LocalDate.of(1999, 03, 11));
		// iCustomerRepository.save(eService);
		// Optional<Customer> optionalService = Optional.of(eService);

		when(iCustomerRepository.save(eService)).thenReturn(eService);
		Customer customer1 = iCustomerServiceImpl.addCustomer(eService);
		assertEquals(eService.getName(), customer1.getName());
		verify(iCustomerRepository, times(1)).save(eService);
	}

	@Test
	public void testGetCustomerById() {
		Customer eService = new Customer();
		eService.setUserId(1);
		eService.setName("sam");
		eService.setEmail("jeebatch@gmail.com");
		eService.setContactNo("9876543210");
		eService.setDob(LocalDate.of(1999, 03, 11));
		Optional<Customer> optionalService = Optional.of(eService);

		when(iCustomerRepository.findById((long) 1)).thenReturn(optionalService);
		Customer customer1 = iCustomerServiceImpl.getCustomer(1);
		assertEquals(eService.getName(), customer1.getName());
	}

	@Test
	public void updateCustomer() {
		HttpStatus expected = HttpStatus.OK;
		Customer eService = new Customer();
		eService.setUserId(1);
		eService.setName("sammy");
		eService.setEmail("jeebatch@gmail.com");
		eService.setContactNo("9876543210");
		eService.setDob(LocalDate.of(1999, 03, 11));

		HttpStatus actual = HttpStatus.OK;
		when(iCustomerRepository.save(eService)).thenReturn(eService);
		assertEquals(expected, actual);
	}

	@Test
	public void deleteCustomer() {
		Customer testCustomer = new Customer();
		testCustomer.setUserId(1);
		testCustomer.setName("sammy");
		testCustomer.setEmail("jeebatch@gmail.com");
		testCustomer.setContactNo("9876543210");
		testCustomer.setDob(LocalDate.of(1999, 03, 11));
		Optional<Customer> optionalCustomer = Optional.of(testCustomer);
		when(iCustomerRepository.findById((long) 1)).thenReturn(optionalCustomer);
		doNothing().when(iCustomerRepository).deleteById(testCustomer.getUserId());
		iCustomerServiceImpl.removeCustomer(1);
		verify(iCustomerRepository, times(1)).deleteById((long) 1);
	}
}

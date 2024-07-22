package com.abc.salonappdemo.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;

import com.abc.salonapp.Entity.SalonService;
import com.abc.salonapp.Repositories.ISalonRepository;
import com.abc.salonapp.Service.SalonServiceImpl;



//useful when we need to bootstrap the entire container,can be used as an alternative to 
//the started spring-test
@SpringBootTest
public class SalonServiceTest {
	
	//it is used to mock the objects that helps in minimizing the repetitive mock objects
	@Mock
	private ISalonRepository salonRepository;
	
	//allow us to inject mocked dependencies in the annotated class mocked object
	@InjectMocks
	private SalonServiceImpl salonServiceImpl;
	//Testing get Service
	@Test
	public void testGetService() {

		SalonService service = new SalonService();
		service.setServiceId(242);
		service.setServiceName("pedicure");
		service.setPrice(1000);
		service.setDuration("2.5");
		service.setDiscount(789);
		Optional<SalonService> optionalService = Optional.of(service);

		when(salonRepository.findById((long) 242)).thenReturn(optionalService);

		SalonService eService = salonServiceImpl.getService(242);

		assertEquals(service.getServiceName(), eService.getServiceName());

	}

	//Testing Add Service
	@Test
	public void testAddService() {

		SalonService service = new SalonService();
		service.setServiceId(242);
		service.setServiceName("pedicure");
		service.setPrice(1000);
		service.setDuration("2.5");
		service.setDiscount(789);
		Optional<SalonService> optionalService = Optional.of(service);

		when(salonRepository.findById((long) 242)).thenReturn(optionalService);
		SalonService eService = salonServiceImpl.getService(242);
		assertEquals(service.getServiceName(), eService.getServiceName());

	}
	//Testing Remove Service
	@Test
	public void removeService() {

		SalonService service = new SalonService();
		service.setServiceId(242);
		service.setServiceName("pedicure");
		service.setPrice(1000);
		service.setDuration("2.5");
		service.setDiscount(789);
		salonRepository.delete(service);
		Optional<SalonService> optionalService = Optional.of(service);
		when(salonRepository.findById((long) 242)).thenReturn(optionalService);
		doNothing().when(salonRepository).deleteById(service.getServiceId());
		salonServiceImpl.removeService(242);

	}
	//Testing Update Service
	@Test
	public void updateService() {
		HttpStatus expected = HttpStatus.OK;
		SalonService service = new SalonService();
		service.setServiceId(242);
		service.setServiceName("pedicure");
		service.setPrice(1000);
		service.setDuration("2.5");
		service.setDiscount(789);

		HttpStatus actual = HttpStatus.OK;
		when(salonRepository.save(service)).thenReturn(service);
		assertEquals(expected, actual);
	}

}

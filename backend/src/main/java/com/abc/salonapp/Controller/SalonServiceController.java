package com.abc.salonapp.Controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abc.salonapp.Entity.SalonService;
import com.abc.salonapp.Exception.SalonServiceException;
import com.abc.salonapp.Service.ISalonService;
import com.abc.salonapp.Service.SalonServiceImpl;


//is a specialized version of the controller. It includes the @Controller and @ResponseBody annotations
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/SalonService")
public class SalonServiceController {
	// annotation provides more fine-grained control over where and how autowiring
	// should be accomplished.
	// automatic injection of beans.
	@Autowired
	public ISalonService salonService;
	public static final Logger LOGGER = LoggerFactory.getLogger(SalonServiceImpl.class);

	// Getting all services which are available
	@GetMapping("/getAllServices")
	public ResponseEntity<List<SalonService>> getAllServices() {
		LOGGER.info("SalonService getAllServices() started");
		List<SalonService> list = salonService.getAllServices();
		LOGGER.info("SalonService getAllServices() ended");
		if (list.isEmpty()) {
			throw new SalonServiceException("No services are present ");

		} else {
			return new ResponseEntity<List<SalonService>>(list, HttpStatus.OK);
		}
	}

	// Get service by service id
	@GetMapping("/getService/{service_id}")

	public ResponseEntity<SalonService> getService(@PathVariable("service_id") long Id) {
		LOGGER.info("SalonService getService() started");
		SalonService service = salonService.getService(Id);
		LOGGER.info("SalonService getService() ended");

		return new ResponseEntity<SalonService>(service, HttpStatus.OK);
	}

	// Get Service by Price
	@GetMapping("/getServiceByPrice/{price}")
	public ResponseEntity<List<SalonService>> getServiceByPrice(@PathVariable double price) {
		LOGGER.info("SalonService findByPrice() started");
		List<SalonService> service = salonService.getServiceByPrice(price);
		LOGGER.info("SalonService findByPrice() ended");
		return new ResponseEntity<List<SalonService>>(service, HttpStatus.OK);
	}

	// Add service to the list
	@PostMapping("/addService")
	public ResponseEntity<SalonService> addService(@RequestBody SalonService salonService) {
		LOGGER.info("SalonService addService() started");
		SalonService service = this.salonService.addService(salonService);
		LOGGER.info("SalonService addService() ended");
		return new ResponseEntity<SalonService>(service, HttpStatus.CREATED);
	}

	// Update service for a particular Id
	@PutMapping("/updateService/{Id}")
	public ResponseEntity<SalonService> updateService(@RequestBody SalonService salonService, @PathVariable Long Id) {
		LOGGER.info("SalonService updateService() started");
		SalonService service = this.salonService.updateService(Id, salonService);
		LOGGER.info("SalonService updateService() ended");
		return new ResponseEntity<SalonService>(service, HttpStatus.OK);
	}

	// Remove a service from the list
	@DeleteMapping(path = "/removeService/{Id}")
	public ResponseEntity<SalonService> removeService(@PathVariable long Id) {
		LOGGER.info("SalonService removeService() started");
		SalonService service = salonService.removeService(Id);
		LOGGER.info("SalonService removeService() ended");
		return new ResponseEntity<SalonService>(service, HttpStatus.OK);
	}

	// Get all services for a particular duration
	@GetMapping(path = "/getServiceByDuration/{duration}")
	public ResponseEntity<List<SalonService>> getServiceByDuration(@PathVariable String duration) {
		LOGGER.info("SalonService getServiceByDuration() started");
		List<SalonService> service = salonService.getServiceByDuration(duration);
		LOGGER.info("SalonService getServiceByDuration() ended");
		return new ResponseEntity<List<SalonService>>(service, HttpStatus.OK);
	}
}

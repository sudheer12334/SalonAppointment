package com.abc.salonapp.Service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abc.salonapp.Entity.SalonService;
import com.abc.salonapp.Exception.SalonServiceException;
import com.abc.salonapp.Exception.UpdateAndRemoveException;
import com.abc.salonapp.Repositories.ISalonRepository;


@Service
public class SalonServiceImpl implements ISalonService {

	@Autowired
	public ISalonRepository salonRepository;
	public static final Logger LOGGER = LoggerFactory.getLogger(SalonServiceImpl.class);

	@Override
	// method to add service to the list
	public SalonService addService(SalonService salonService) {

		LOGGER.info("SalonService addService() started");
		Optional<SalonService> salon = salonRepository.findById(salonService.getServiceId());
		LOGGER.info("SalonService addService() ended");
		if (salon.isEmpty()) {
			salonRepository.save(salonService);
			return salonService;
		} else {
			throw new SalonServiceException("Service with this ID is present already,Try Entering new service ID");
		}
	}

	@Override
	// Method to remove a service from the list
	public SalonService removeService(long id) {
		LOGGER.info("SalonService removeService() started");
		Optional<SalonService> salon = salonRepository.findById(id);

		SalonService salonservice = salon.orElse(null);
		if (salonservice != null) {
			salonRepository.deleteById(id);
		} else {
			throw new UpdateAndRemoveException("No services found to remove");
		}
		LOGGER.info("SalonService removeService() ended");
		return salonservice;

	}

	// method to update a particular Service based on ID
	@Override

	public SalonService updateService(long id, SalonService salonService) {
		LOGGER.info("SalonService updateService() started");
		Optional<SalonService> s = salonRepository.findById(id);
		SalonService result = s.orElse(null);
		if (result == null) {
			LOGGER.info("SalonService getAllService() ended");

			throw new UpdateAndRemoveException("We cannot update,Because no service found with this service ID ");
		}
		result.setServiceId(salonService.getServiceId());
		result.setServiceName(salonService.getServiceName());
		result.setPrice(salonService.getPrice());
		result.setDiscount(salonService.getDiscount());
		result.setDuration(salonService.getDuration());
		result.setImage(salonService.getImage());
		return salonRepository.save(result);

	}

	// method to getService by ID
	@Override
	public SalonService getService(long id) {
		LOGGER.info("SalonService getService() started");
		Optional<SalonService> salon = salonRepository.findById(id);
		LOGGER.info("SalonService getService() ended");
		if (salon.isPresent()) {
			return salon.get();
		} else {
			throw new SalonServiceException("No services found");
		}

	}

	// method to get all services available
	@Override
	public List<SalonService> getAllServices() {
		LOGGER.info("SalonService getAllServices() started");
		List<SalonService> list = salonRepository.findAll();
		LOGGER.info("SalonService getAllServices() ended");
		if (list.isEmpty()) {
			throw new SalonServiceException("Service List is Empty");
		}
		return list;

	}

	// Method to get all Service by Price
	@Override

	public List<SalonService> getServiceByPrice(double price) {
		LOGGER.info("SalonService getServiceByPrice() started");
		List<SalonService> list = salonRepository.findByPrice(price);
		LOGGER.info("SalonService getServiceByPrice() ended");

		if (list.isEmpty()) {
			throw new SalonServiceException("No Services Found");
		} else {
			return list;
		}
	}

	// method to get the services of a particular duration
	@Override
	public List<SalonService> getServiceByDuration(String duration) {
		LOGGER.info("SalonService getServiceByDuration() started");
		List<SalonService> list = salonRepository.findByDuration(duration);
		LOGGER.info("SalonService getServiceByDuration() ended");
		if (list.isEmpty()) {
			throw new SalonServiceException("No Services Found");
		}
		return list;

	}
}
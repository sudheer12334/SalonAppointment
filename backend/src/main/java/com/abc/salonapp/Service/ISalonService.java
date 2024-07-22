package com.abc.salonapp.Service;

import java.util.List;

import com.abc.salonapp.Entity.SalonService;


public interface ISalonService {
	public SalonService addService(SalonService salonService);

	public SalonService removeService(long id);

	public SalonService updateService(long id, SalonService salonService);

	public SalonService getService(long id);

	public List<SalonService> getAllServices();

	public List<SalonService> getServiceByPrice(double price);

	public List<SalonService> getServiceByDuration(String duration);

}

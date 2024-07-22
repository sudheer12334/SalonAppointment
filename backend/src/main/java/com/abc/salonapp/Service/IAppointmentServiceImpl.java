package com.abc.salonapp.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.abc.salonapp.Entity.Appointment;
import com.abc.salonapp.Exception.DuplicateCustomerException;
import com.abc.salonapp.Exception.NoCustomerFoundException;
import com.abc.salonapp.Exception.ResourceNotFoundException;
import com.abc.salonapp.Repositories.IAppointmentRepository;

@Service
public class IAppointmentServiceImpl implements IAppointmentService {

	@Autowired
	private IAppointmentRepository appointmentRepository;

	// add Appointment
	@Override
	public Appointment addAppointment(Appointment appointment) {
		Optional<Appointment> appo = appointmentRepository.findById(appointment.getAppointmentId());

		if (appo.isEmpty()) {
			appointmentRepository.save(appointment);
		} else {
			throw new DuplicateCustomerException("no appointment");
		}

		return appointment;
	}

//Remove Appointment
	@Override
	public void removeAppointment(long id) {
		if (id != 0) {
			appointmentRepository.deleteById((long) id);

		} else {
			throw new NoCustomerFoundException("Appointment is not there in database");
		}
	}

	@Override
	public Appointment updateAppointment(Appointment appointment, long id) {
		Optional<Appointment> s = appointmentRepository.findById(id);
		Appointment result = s.orElse(null);
		if (result == null) {
			throw new NoCustomerFoundException ("We cannot update,Because no service found with this service ID ");
		}
		result.setAppointmentId(appointment.getAppointmentId());
		result.setLocation(appointment.getLocation());
		//result.setVisitType(appointment.getVisitType());
		result.setPreferredService(appointment.getPreferredService());
		result.setPreferredDate(appointment.getPreferredDate());
		result.setPreferredTime(appointment.getPreferredTime());
		return appointmentRepository.save(result);

	}

//get Appointment by Id
	@Override
	public Appointment getAppointment(long id) throws ResourceNotFoundException {
		Optional<Appointment> optionalAppointment = appointmentRepository.findById(id);
		if (optionalAppointment.isEmpty()) {

			throw new ResourceNotFoundException("Appointment not existing with id:" + id);

		}

		Appointment appointment = optionalAppointment.get();

		return appointment;
	}

	// get all appointments
	@Override
	public List<Appointment> getAllAppointments() {
		List<Appointment> appointment = appointmentRepository.findAll();
		return appointment;
	}

}

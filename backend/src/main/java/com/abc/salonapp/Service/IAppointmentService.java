package com.abc.salonapp.Service;
import java.util.List;

import com.abc.salonapp.Entity.Appointment;
//@Service
public interface IAppointmentService {

	public Appointment addAppointment(Appointment appointment);

	public void removeAppointment(long id);

	public Appointment updateAppointment(Appointment appointment, long id);

	public Appointment getAppointment(long id);

	List<Appointment> getAllAppointments();
}

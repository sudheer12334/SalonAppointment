package com.abc.salonapp.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abc.salonapp.Entity.Appointment;

public interface IAppointmentRepository extends JpaRepository<Appointment, Long> {

}


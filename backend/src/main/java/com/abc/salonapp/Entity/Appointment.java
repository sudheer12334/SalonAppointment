package com.abc.salonapp.Entity;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="appointment_tbl")
public class Appointment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name="appointment_id")
	private long appointmentId;
	
	@Column(name="location")
	private String location;
	
//	@Column(name="visit_type")
//	private String visitType;
//	
	@Column(name="preferred_services")
	private String preferredService;
	
	@Column(name="preferred_date")
	private LocalDate preferredDate;
	
	@Column(name="preferred_time")
	private LocalTime preferredTime;
	

	
	@ManyToOne
	@JoinColumn(name="cust_id")
	@JsonIgnore
	private Customer customer;
	
	@OneToOne
	private Payment payment;
	
	@OneToOne
	private SalonService salonService;

	public long getAppointmentId() {
		return appointmentId;
	}

	public void setAppointmentId(long appointmentId) {
		this.appointmentId = appointmentId;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

//	public String getVisitType() {
//		return visitType;
//	}
//
//	public void setVisitType(String visitType) {
//		this.visitType = visitType;
	//}

	public String getPreferredService() {
		return preferredService;
	}

	public void setPreferredService(String preferredService) {
		this.preferredService = preferredService;
	}

	public LocalDate getPreferredDate() {
		return preferredDate;
	}

	public void setPreferredDate(LocalDate preferredDate) {
		this.preferredDate = preferredDate;
	}

	public LocalTime getPreferredTime() {
		return preferredTime;
	}

	public void setPreferredTime(LocalTime preferredTime) {
		this.preferredTime = preferredTime;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	public SalonService getSalonService() {
		return salonService;
	}

	public void setSalonService(SalonService salonService) {
		this.salonService = salonService;
	}
		
}

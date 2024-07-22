package com.abc.salonapp.Entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "service_tbl")
public class SalonService {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "service_id")
	private long serviceId;
	@NotNull(message="Service name is must")
	@Column(name = "service_name")
	private String serviceName;
	@Column(name = "price")
	private double price;
	@Column(name = "discount")
	private int discount;
	@Column(name = "duration")
	private String duration;
	
	private String image;

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	@OneToOne(mappedBy="salonService")
	private Appointment appointment;
	
	public long getServiceId() {
		return serviceId;
	}

	public String getServiceName() {
		return serviceName;
	}

	public double getPrice() {
		return price;
	}

	public int getDiscount() {
		return discount;
	}
    
	public String getDuration() {
		return duration;
	}

	public Appointment getAppointment() {
		return appointment;
	}
	public void setServiceId(long serviceId) {
		this.serviceId = serviceId;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}
	public void setAppointment(Appointment appointment) {
		this.appointment = appointment;
	}
}

package com.abc.salonapp.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity //class is mapped to a table
@Table(name = "address_tbl")
public class Address {

	@Id // primary key definition
	@GeneratedValue(strategy = GenerationType.IDENTITY) //primary key generation
	@NotNull(message = "Address ID must be filled")
	@Column(name = "address_id")
	private long id;

	@NotNull(message = "Door Number must be filled")
	@Column(name = "door_no")
	private String doorNo;

	@NotNull(message = "Street Name must be filled")
	@Column(name = "street")
	private String street;

	@NotNull(message = "Area Name must be filled")
	@Column(name = "area")
	private String area;

	@NotNull(message = "City Name must be filled")
	@Column(name = "city")
	private String city;

	@NotNull(message = "State Name must be filled")
	@Column(name = "state")
	private String state;

	@NotNull(message = "Pincode must be filled")
	@Column(name = "pincode")
	private int pincode;

	@JsonIgnore
	@OneToOne(mappedBy = "address")
	private Customer customer;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDoorNo() {
		return doorNo;
	}

	public void setDoorNo(String doorNo) {
		this.doorNo = doorNo;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	

}

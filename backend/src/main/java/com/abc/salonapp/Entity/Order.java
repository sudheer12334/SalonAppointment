package com.abc.salonapp.Entity;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
//import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Order_Id")
	private long orderId;
	
	@NotNull(message = "Amount must not be Empty")
	private double amount;
	
	@NotNull(message = "Date  must not be Empty")
	private LocalDate billingDate;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Payment payment;

	@ManyToOne
	@JoinColumn(name="cust_id")
	@JsonIgnore
	private Customer customer;

	public Order() {
		super();
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Order(long orderId, double amount, LocalDate billingDate, String paymentMethod,Payment payment
			,Customer customer)
	{
		super();
		this.orderId = orderId;
		this.amount = amount;
		this.billingDate = billingDate;
	
		this.payment = payment;
		this.customer = customer;
	}
	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	public long getOrderId() {
		return orderId;
	}

	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public LocalDate getBillingDate() {
		return billingDate;
	}

	public void setBillingDate(LocalDate billingDate) {
		this.billingDate = billingDate;
	}
}

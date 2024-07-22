package com.abc.salonapp.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Payment")
public class Payment {
	@Id
	@Column(name = "Payment_Id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long paymentId;
	
	@NotNull(message = "Type must not be Empty")
	private String type;
	@NotNull(message = "Status must not be Empty")
	private String status;

	public long getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(long paymentId) {
		this.paymentId = paymentId;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Payment() {
		super();
	}

	public Payment(long paymentId, String type, String status) {
		super();
		this.paymentId = paymentId;
		this.type = type;
		this.status = status;

	}
}

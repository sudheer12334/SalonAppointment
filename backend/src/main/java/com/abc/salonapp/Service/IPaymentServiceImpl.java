package com.abc.salonapp.Service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abc.salonapp.Entity.Payment;
import com.abc.salonapp.Exception.PaymentNotFoundException;
import com.abc.salonapp.Repositories.IPaymentRepository;

@Service
public class IPaymentServiceImpl implements IPaymentService {

	// Dependency injection for CRUD operations
	@Autowired
	private IPaymentRepository paymentrepo;

	public static final Logger LOGGER = LoggerFactory.getLogger(IPaymentServiceImpl.class);

	// adding new Payment

	@Override
	public Payment addPayment(Payment payment) {
		LOGGER.info("PaymentService addPayment() started");
		if (!payment.getType().equalsIgnoreCase("card") && !payment.getType().equalsIgnoreCase("upi")
				&& !payment.getType().equalsIgnoreCase("cod")) {
			throw new IllegalArgumentException("preffered payment types are : card , cod , upi");
		}
		paymentrepo.save(payment);
		LOGGER.info("PaymentService getPaymentDetails() ended");
		return payment;
	}

	// fetching specific payment by id

	@Override
	public Payment getPaymentDetails(long id) {
		LOGGER.info("PaymentService getPaymentDetails() started");
		Payment payment = paymentrepo.findById(id).orElse(null);
		if (payment == null) {
			throw new PaymentNotFoundException("Payment Details Not Found");
		}
		LOGGER.info("PaymentService getPaymentDetails() ended");
		return payment;

	}

	// fetching all payments

	@Override
	public List<Payment> getAllPaymentDetails() {
		LOGGER.info("PaymentService getAllPaymentDetails() started");
		List<Payment> payments = paymentrepo.findAll();
		LOGGER.info("PaymentService getAllPaymentDetails() ended");
		return payments;
	}

	// removing specific payment

	@Override
	public Payment removePayment(long id) {
		LOGGER.info("PaymentService removePayment() started");
		Payment payment = paymentrepo.findById(id).orElse(null);
		if (payment == null) {
			throw new PaymentNotFoundException("Payment Details Not Found");
		}
		paymentrepo.deleteById(id);
		LOGGER.info("PaymentService removePayment() ended");
		return payment;

	}

	// updating specific payment
	@Override
	public Payment updatePayment(long id, Payment payment) {
		LOGGER.info("PaymentService updatePayment() started");
		Payment newpayment = paymentrepo.findById(id).orElse(null);
		if (payment == null) {
			throw new PaymentNotFoundException("Payment Details Not Found");
		}
		newpayment.setPaymentId(payment.getPaymentId());
		newpayment.setStatus(payment.getStatus());
		newpayment.setType(payment.getType());
		LOGGER.info("PaymentService updatePayment() ended");
		return newpayment;
	}

}

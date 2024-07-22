package com.abc.salonapp.Entity;

import java.time.LocalDate;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "customer_tbl")
public class Customer extends User {

// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// @Column(name = "cust_id")
// private long custId;

 @Column(name = "name")
private String name;

 @Column(name = "email")
private String email;

 @Column(name = "contact_no")
private String contactNo;

 @Column(name = "dob")
private LocalDate dob;

 @OneToMany(mappedBy = "customer")
private List<Order> orders;

 @OneToOne(cascade = CascadeType.ALL)
private Address address;

 @OneToMany(mappedBy = "customer")
private List<Appointment> appointments;

 public String getName() {
return name;
}

 public void setName(String name) {
this.name = name;
}

 public String getEmail() {
return email;
}

 public void setEmail(String email) {
this.email = email;
}

 public String getContactNo() {
return contactNo;
}

 public void setContactNo(String contactNo) {
this.contactNo = contactNo;
}

 public LocalDate getDob() {
return dob;
}

 public void setDob(LocalDate dob) {
this.dob = dob;
}

 public List<Order> getOrders() {
return orders;
}

 public void setOrders(List<Order> orders) {
this.orders = orders;
}

 public Address getAddress() {
return address;
}

 public void setAddress(Address address) {
this.address = address;
}

 public List<Appointment> getAppointments() {
return appointments;
}

 public void setAppointments(List<Appointment> appointments) {
this.appointments = appointments;
}

}
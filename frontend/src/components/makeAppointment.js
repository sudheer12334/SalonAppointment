import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import * as Validations from './Validations';
import styled from 'styled-components';
function Makeappointment() {
    const { userId } = useParams();
    const { serviceId } = useParams();
    const navigate=useNavigate();
    const [appointment, setAppointment] = useState({
        appointmentId: '',
        location: '',
        preferredService: '',
        preferredDate: '',
        preferredTime: ''
    });
    const [service, setService] = useState({
        serviceId: '',
        serviceName: '',
        price: '',
        discount: '',
        duration: '',
        imageName: ''
    });
    const [customer, setCustomer] = useState({
        userId: '',
        name: '',
        email: '',
        contactNo: '',
        dob: '',
        userName: '',
        userPassword: '',
        userType: '',

        id: '',
        doorNo: '',
        street: '',
        area: '',
        city: '',
        state: '',
        pincode: ''
    });
    const [payment, setPayment] = useState({
        paymentId: '',
        type: '',
        status: ''
    });
    useEffect(() => {
        loadUser();
    }, []);
    const handleChange = (event) => {
        setAppointment(appointment => ({ ...appointment, [event.target.name]: event.target.value }));
    }
    const handlePaymentChange = (event) => {
        setPayment(payment => ({ ...payment, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let Appointmentpayload = {
            //serviceId: service.serviceId,    
            //serviceName: appointment.serviceName,
            location: appointment.location,
            preferredService: service.serviceName,
            preferredDate: appointment.preferredDate,
            preferredTime: appointment.preferredTime,

        }
        let Paymentpayload = {
            paymentId: payment.paymentId,
            type: payment.type,
            status: "approved",

        }
        // const validationErrors = Validations.validateAppointment(appointment);
        // const noErrors = Object.keys(validationErrors).length === 0;
        // setFormErrors(validationErrors);
        // if (noErrors) {
            {
            axios.post("http://localhost:8082/appointment/save", Appointmentpayload)
            axios.post("http://localhost:8082/payment/save", Paymentpayload);
            navigate(`/dashboard/${userId}`,{replace:true});
        }

    }
    const loadUser = async () => {
        const resultCustomer = await axios.get(`http://localhost:8082/customer/${userId}`);
        const resultService = await axios.get(`http://localhost:8082/SalonService/getService/${serviceId}`);
        setCustomer(resultCustomer.data);
        setService(resultService.data);
    }
    //const [formErrors, setFormErrors] = useState({});
    return (
        <Container>
            <Title>
                <h5> BOOK YOUR APPOINTMENT WITH GROOM AND BOOM </h5>
            </Title>
            <Form>
                <FormGroup>
                    <Label className="mb-1">Full Name</Label>
                    <Input type="text" name="name" id="name" value={customer.name} />
                </FormGroup>
                <FormGroup>
                    <Label className="mb-1">Phone Number</Label>
                    <Input type="text" name="contactNo" id="contactNo" value={customer.contactNo} />
                </FormGroup>
                <FormGroup>
                    <Label className="mb-1">Preferred Service</Label>
                    <Input type="text" name="preferredService" id="preferredService" value={service.serviceName} />
                </FormGroup>
                <FormGroup>
                    <Label className="mb-1">Preferred Date</Label>
                    <Input type="date" name="preferredDate" id="preferredDate" onChange={handleChange} value={appointment.preferredDate} />
                    {/* {
                        formErrors.dateErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.dateErr}</div>
                    } */}
                </FormGroup>
                <FormGroup>
                    <Label className="mb-1">Preferred Time</Label>
                    <Input type="time" name="preferredTime" id="preferredTime" onChange={handleChange} value={appointment.preferredTime} />
                    {/* {
                        formErrors.timeErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.timeErr}</div>
                    } */}
                </FormGroup>
                <FormGroup>
                    <Label className="mb-1">Location</Label>
                    <Input type="text" name="location" id="location" onChange={handleChange} value={appointment.location} />
                    {/* {
                        formErrors.locationErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.locationErr}</div>
                    } */}
                </FormGroup>
                <FormGroup>
                    <Label className="mb-1">PaymentType(Upi,Card,COD)</Label>
                    <Input type="text" name="type" id="type" onChange={handlePaymentChange} value={payment.type} />
                </FormGroup>

                <button type="button" onClick={handleSubmit} className="btn btn-primary shadow w-100" >Place Order</button>
            </Form>
        </Container>

    );

}
const Container = styled.main`
    display: block;
	width: 80%;
	margin: 30px auto;
`;
const Title = styled.main`
    text-align : center;
    color: whitesmoke;
    display: block;
    font - size : 13 px;
    letter-spacing : 1.42px;
`;
const Form = styled.div`
`;
const FormGroup = styled.div`
color: palevioletred;
    display: block;

`;
const Label = styled.label`
margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;
const Input = styled.input`
padding: 0.5em;
color: palevioletred;
background: papayawhip;
border: none;
border-radius: 3px;
width: 100%;
margin-bottom: 0.5em;
`;
export default Makeappointment;
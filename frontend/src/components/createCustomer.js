import React, { useState } from 'react';
import axios from 'axios';
import * as CustValid from './CustValid';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
function CreateCustomer() {
    const navigate = useNavigate();
    const [customerErrors, setCustomerErrors] = useState({});
    const [customer, setCustomer] = useState({
        userId: '',
        name: '',
        email: '',
        contactNo: '',
        dob: '',
        userName: '',
        userPassword: '',

        id: '',
        doorNo: '',
        street: '',
        area: '',
        city: '',
        state: '',
        pincode: ''

    });
    const handleChange = (event) => {
        setCustomer(customer => ({ ...customer, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let payload = {
            userId: customer.userId,
            name: customer.name,
            email: customer.email,
            contactNo: customer.contactNo,
            dob: customer.dob,
            userName: customer.userName,
            userPassword: customer.userPassword,
            address: {
                id: customer.id,
                doorNo: customer.doorNo,
                street: customer.street,
                area: customer.area,
                city: customer.city,
                state: customer.state,
                pincode: customer.pincode
            }
        }

        const validationErrors = CustValid.validate(customer);
        const noErrors = Object.keys(validationErrors).length === 0;
        setCustomerErrors(validationErrors);

        if (noErrors) {
            axios.post("http://localhost:8082/customer/save", payload).then(resp =>{
                navigate(`/dashboard/${resp.data.userId}`,{replace:true});
                alert('Customer saved with id: ' + resp.data.userId);
        });
        }
    }

    return (
        <Container>
            <Title>
                <h3>Enter Customer Details to Sign-Up</h3>
            </Title>

            <Form>
                <FormGroup>
                    <hr />
                    <p style={{ color: "red" }} >{customerErrors.nameErr}</p>
                    <FormGroup>
                        <Label className="mb-1">Name : <span class="text-danger"> *</span> </Label>
                        <Input type="text" className="form-control" name="name" id="name" onChange={handleChange} value={customer.name} placeholder={" Full Name"} />
                    </FormGroup>
                    <hr />

                    <p style={{ color: "red" }} >{customerErrors.email}</p>
                    <FormGroup>
                        <Label className="mb-1">Email : <span class="text-danger"> *</span></Label>
                        <Input type="text" className="form-control" name="email" id="email" onChange={handleChange} value={customer.email} placeholder={" Valid email address"} />
                    </FormGroup>
                    <hr />

                    <p style={{ color: "red" }} >{customerErrors.userName}</p>
                    <FormGroup>
                        <Label className="mb-1">User Name : <span class="text-danger"> *</span></Label>
                        <Input type="text" className="form-control" name="userName" id="userName" onChange={handleChange} value={customer.userName} placeholder={"User Name"} />
                    </FormGroup>
                    <hr />

                    <p style={{ color: "red" }} >{customerErrors.userPassword}</p>
                    <FormGroup>
                        <Label className="mb-1">User Password : <span class="text-danger"> *</span></Label>
                        <Input type="password" className="form-control" name="userPassword" id="userPassword" onChange={handleChange} value={customer.userPassword} placeholder={"User Password"} />
                    </FormGroup>
                    <hr />

                    <p style={{ color: "red" }} >{customerErrors.contactNo}</p>
                    <FormGroup>
                        <Label className="mb-1">Contact Number : <span class="text-danger"> *</span></Label>
                        <Input type="text" className="form-control" name="contactNo" id="contactNo" onChange={handleChange} value={customer.contactNo} placeholder={" Contact Number"} />
                    </FormGroup>
                    <hr />

                    <p style={{ color: "red" }} >{customerErrors.dob}</p>
                    <FormGroup>
                        <Label className="mb-1">DOB : <span class="text-danger"> *</span> </Label>
                        <Input type="date" className="form-control" name="dob" id="dob" onChange={handleChange} value={customer.dob} placeholder={" YYYY-MM-DD"} />
                    </FormGroup>
                    <hr />

                    <p style={{ color: "red" }} >{customerErrors.doorNo}</p>
                    <FormGroup>
                        <Label className="mb-1">Door Number : <span class="text-danger"> *</span></Label>
                        <Input type="text" className="form-control" name="doorNo" id="doorNo" onChange={handleChange} value={customer.doorNo} placeholder={" Door No."} />
                    </FormGroup>
                    <hr />

                    <p style={{ color: "red" }} >{customerErrors.street}</p>
                    <FormGroup>
                        <Label className="mb-1">Street : <span class="text-danger"> *</span> </Label>
                        <Input type="text" className="form-control" name="street" id="street" onChange={handleChange} value={customer.street} placeholder={" Street Name"} />
                    </FormGroup>
                    <hr />

                    <p style={{ color: "red" }} >{customerErrors.area}</p>
                    <FormGroup>
                        <Label className="mb-1">Area : <span class="text-danger"> *</span></Label>
                        <Input type="text" className="form-control" name="area" id="area" onChange={handleChange} value={customer.area} placeholder={" Area"} />
                    </FormGroup>
                    <hr />

                    <p style={{ color: "red" }} >{customerErrors.city}</p>
                    <FormGroup>
                        <Label className="mb-1">City : <span class="text-danger"> *</span></Label>
                        <Input type="text" className="form-control" name="city" id="city" onChange={handleChange} value={customer.city} placeholder={" City"} />
                    </FormGroup>
                    <hr />

                    <p style={{ color: "red" }} >{customerErrors.state}</p>
                    <FormGroup>
                        <Label className="mb-1">State : <span class="text-danger"> *</span></Label>
                        <Input type="text" className="form-control" name="state" id="state" onChange={handleChange} value={customer.state} placeholder={" State"} />
                    </FormGroup>
                    <hr />

                    <p style={{ color: "red" }} >{customerErrors.pincode}</p>
                    <FormGroup>
                        <Label className="mb-1">Pincode : <span class="text-danger"> *</span></Label>
                        <Input type="text" className="form-control" name="pincode" id="pincode" onChange={handleChange} value={customer.pincode} placeholder={" Pincode"} />
                    </FormGroup>

                    <hr />
                    <button type="submit" class="btn btn-success" onClick={handleSubmit}>Submit</button>
                </FormGroup>
            </Form>
        </Container >
    )
}
const Container = styled.main`
    display: block;
	width: 80%;
	margin: 30px auto;
`;
const Title = styled.main`
    text-align : center;
    color: whitwsmoke;
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
export default CreateCustomer;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams } from "react-router-dom";
import * as Validations from './Validations';
import {Button} from 'reactstrap';
import styled from 'styled-components';
function UpdateService() {
    const {serviceId} = useParams();
    const [service, setService] = useState({
        serviceId: '',
        serviceName: '',
        price: '',
        discount: '',
        duration: '',
        image:''
        
    });

    useEffect(() => {
        axios.get("http://localhost:8082/SalonService/getService/" + serviceId).then(resp => setService({    
        serviceId: resp.data.serviceId,
        serviceName: resp.data.serviceName,
        price: resp.data.price,
        discount: resp.data.discount,
        duration: resp.data.duration,
        image: resp.data.image
    }));
    }, []);

    const handleChange = (event) => {
        setService(service => ({ ...service, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let payload={
        serviceId: service.serviceId,
        serviceName: service.serviceName,
        price: service.price,
        discount: service.discount,
        duration: service.duration,
        image: service.image

        }
        const validationErrors = Validations.validateAddService(service);
        const noErrors = Object.keys(validationErrors).length === 0;
        setFormErrors(validationErrors);
        if(noErrors){
        axios.put("http://localhost:8082/SalonService/updateService/"+payload.serviceId, payload).then(resp =>
            alert('Service updated with id: ' + resp.data.serviceId));
        }
    }
    const [formErrors,setFormErrors]= useState({});
    return (
        <Container>
                <Title>
                            <h3>Enter the details to be updated</h3>
                </Title>                   
                        
                            <Form>        
                                    <FormGroup>
                                        <Label className="mb-1">Service Name : </Label>
                                        <Input type="text" className="form-control" name="serviceName" id="serviceName" onChange={handleChange} value={service.serviceName} placeholder="Service Name" />
                                        {
                                                formErrors.serviceNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.serviceNameErr}</div>
                                        }
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="mb-1">Price : </Label>
                                        <Input type="text" className="form-control" name="price" id="price" onChange={handleChange} value={service.price} placeholder="Price" />
                                        {
                                                formErrors.priceErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.priceErr}</div>
                                        }
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="mb-1">Discount : </Label>
                                        <Input type="text" className="form-control" name="discount" id="discount" onChange={handleChange} value={service.discount} placeholder="Discount" />
                                        {
                                                formErrors.discountErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.discountErr}</div>
                                        }
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="mb-1">Duration : </Label>
                                        <Input type="text" className="form-control" name="duration" id="duration" onChange={handleChange} value={service.duration} placeholder="Duration" />
                                        {
                                                formErrors.durationErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.durationErr}</div>
                                        }
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="mb-1">Service Image : </Label>
                                        <Input type="text" className="form-control" name="image" id="image" onChange={handleChange} value={service.image} placeholder="Service Image" />
                                        {
                                            formErrors.durationErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.durationErr}</div>
                                        }
                                    </FormGroup>
                                    <Button onClick={handleSubmit}>Save changes</Button>
                                   
                            </Form>
     </Container>
    )
}
const Container = styled.main `
    display: block;
	width: 80%;
	margin: 30px auto;
`;
const Title = styled.main `
    text-align : center;
    color: whitwsmoke;
    display: block;
    font - size : 13 px;
    letter-spacing : 1.42px;
`;
const Form = styled.div `
`;
const FormGroup = styled.div `
color: palevioletred;
    display: block;

`;
const Label = styled.label `
margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;
const Input = styled.input `
padding: 0.5em;
color: palevioletred;
background: papayawhip;
border: none;
border-radius: 3px;
width: 100%;
margin-bottom: 0.5em;
`;
export default UpdateService;
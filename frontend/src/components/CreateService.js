import React, {useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from 'reactstrap'; 
import * as Validations from './AdminValid';
function CreateService() {
    const [service, setService] = useState({
        serviceId: '',
        serviceName: '',
        price: '',
        discount: '',
        duration: '',
        image: ''
    });
    const handleChange = (event) => {
        setService(service => ({ ...service, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
       let payload = {
        //serviceId: service.serviceId,    
        serviceName: service.serviceName,
        price: service.price,
        discount:service.discount,
        duration: service.duration,
        image: service.image     
            
       }
        const validationErrors = Validations.validateAddService(service);
        const noErrors = Object.keys(validationErrors).length === 0;
        setFormErrors(validationErrors);
        if(noErrors){
       axios.post("http://localhost:8082/SalonService/addService",payload).then(resp=>
       alert('Service saved with id: '+resp.data.serviceId));
        }
    }
    const [formErrors,setFormErrors]= useState({});
    return (

        <Container>
            <Title>

            <h3>Enter Customer Details to Sign-Up</h3>

            </Title>
            <Form>
            <FormGroup>
                <Label>Enter Service Name</Label>
                <Input type="text" name="serviceName" id="serviceName" onChange={handleChange} value={service.serviceName} />
                {
                        formErrors.serviceNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.serviceNameErr}</div>
                }
            </FormGroup>
            <FormGroup>
                <Label>Enter Service Price</Label>
                <Input type="text" name="price" id="price" onChange={handleChange} value={service.price} />
                {
                        formErrors.priceErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.priceErr}</div>
                }
                </FormGroup>
                <FormGroup>
                <Label>Enter Service Discount</Label>
                <Input type="text" name="discount" id="discount" onChange={handleChange} value={service.code} />
                {
                        formErrors.discountErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.discountErr}</div>
                }
            </FormGroup>
            <FormGroup>
                <Label>Enter Service Duration</Label>
                <Input type="text" name="duration" id="duration" onChange={handleChange} value={service.code} />
                {
                        formErrors.durationErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.durationErr}</div>
                }
                </FormGroup>
                <FormGroup>
                <Label>Enter Service Image</Label>
                <Input type="text" name="image" id="image" onChange={handleChange} value={service.image} />
                {
                        formErrors.imageErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.imageErr}</div>
                }
            </FormGroup>
            </Form>
            <Button onClick={handleSubmit}>Save</Button>
        
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
export default CreateService;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// function CreateService() {
//     const navigate = useNavigate();
//     const [service, setService] = useState({
//         serviceId: '',
//         serviceName: '',
//         price: '',
//         discount: '',
//         duration: '',
//         imageName: ''
//     });
//     const handleChange = (event) => {
//         setService(service => ({ ...service, [event.target.name]: event.target.value }));
//     }
//     const handleSubmit = (event) => {
//         event.preventDefault();
//        let payload = {
//         //serviceId: service.serviceId,    
//         serviceName: service.serviceName,
//         price: service.price,
//         discount:service.discount,
//         duration: service.duration,
//         imageName: service.imageName     
            
//        }
//        axios.post("http://localhost:8082/SalonService/addService",payload).then((resp)=>{
//         navigate("/view-services",{replace:true});
//        alert('Service saved with id: '+resp.data.serviceId);
//     });
//     }
//     return (
//         <Form>
//             <FormGroup>
//                 <Label>Enter Service Name</Label>
//                 <Input type="text" name="serviceName" id="serviceName" onChange={handleChange} value={service.serviceName} />
//             </FormGroup>
//             <div>
//                 <label>Enter Service Price</label>
//                 <input type="text" name="price" id="price" onChange={handleChange} value={service.price} />
//             </div>
//             <div>
//                 <label>Enter Service Discount</label>
//                 <input type="text" name="discount" id="discount" onChange={handleChange} value={service.code} />
//             </div>
//             <div>
//                 <label>Enter Service Duration</label>
//                 <input type="text" name="duration" id="duration" onChange={handleChange} value={service.code} />
//             </div>
//             <div>
//                 <label>Enter Service ImageName</label>
//                 <input type="text" name="imageName" id="imageName" onChange={handleChange} value={service.imageName} />
//             </div>
//             <button onClick={handleSubmit}>Save</button>
//        </Form>
//     )
// }

// const Form = styled.main `
//     display: block;
// 	width: 80%;
// 	margin: 30px auto;
// `;
// const Title = styled.main `
//     text-align : center;
//     color: whitwsmoke;
//     display: block;
//     font - size : 13 px;
//     letter-spacing : 1.42px;
// `;

// const FormGroup = styled.div `
// color: palevioletred;
//     display: block;

// `;
// const Label = styled.label `
// margin-bottom: 0.5em;
// 	color: palevioletred;
//     display: block;
// `;
// const Input = styled.input `
// padding: 0.5em;
// color: palevioletred;
// background: papayawhip;
// border: none;
// border-radius: 3px;
// width: 100%;
// margin-bottom: 0.5em;
// `;
// export default CreateService;
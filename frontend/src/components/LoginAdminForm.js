import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Background from '../assets/images/'

import { useNavigate } from "react-router-dom";
const LoginAdmin=()=>
{   const navigate = useNavigate();

    const [admin, loginAdmin] = useState({
        userId: '',
        userName: '',
        userPassword: '',
        userType: '',
        email: '',
      
    });
    const handleChange = (event) => {
        loginAdmin(admin => ({ ...admin, [event.target.name]: event.target.value ,[event.target.password]: event.target.value}));
    }
    const handleAuth =(event) => 

    {
        event.preventDefault();
        
       let payload = {
        userId: '3',    
        userName:"sammy",
        userPassword: admin.userPassword,
        email:admin.email,
        userType: "admin",
        
    }

    axios.post("http://localhost:8082/admin/login",payload).then((resp)=>{

        navigate("/admin",{replace:true});
      
    },
    (error)=>
    {
        console.log(error);
    }
    );
}

    return (
        <Container>
                  <Title>
                <h3>Enter Admin Details to Sign-In</h3>
            </Title>
            <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" onChange={handleChange} value={admin.email}/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="userPassword" id="password" onChange={handleChange} value={admin.userPassword} />
        </FormGroup>
      
            <button onClick={handleAuth}>Login</button>
      
        </Form>
        
</Container>

    );
};

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


export default LoginAdmin;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Validations from './Validations';
import styled from 'styled-components';

function LoginCustomer() {
    const [loginInput, setLoginInput] = useState({
        userName: '',
        userPassword: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isLoginSuccess, setIsLoginSuccess] = useState('');
    const navigate = useNavigate();
    const handleInputChange = (event) => {
        setLoginInput(loginInput => ({ ...loginInput, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let payload = {
            userName: loginInput.userName,
            userPassword: loginInput.userPassword
        }

        const validationErrors = Validations.validateLoginForm(loginInput);
        const noErrors = Object.keys(validationErrors).length === 0;
        setFormErrors(validationErrors);

        if (noErrors) {
            axios.post("http://localhost:8082/auth/login/", payload).then(resp => {
                if (resp.status === 200) {
                    setIsLoginSuccess("true");
                    localStorage.setItem("userData", JSON.stringify(resp.data));
                    //navigate(`/services/${resp.data.customerId}`,{replace:true});
                    navigate(`/dashboard/${resp.data.userId}`,{replace:true});
                }
            }).catch(error => {
                if (error.response.status === 401) {
                    setIsLoginSuccess("false");
                }
            })
        }
    }
    

    return (
        <Container>
            <Title>
                <h3>Login</h3>
            </Title>

                <Form>
                <FormGroup>
                            {
                                isLoginSuccess === 'false' && <h4>Username or Password Wrong</h4>
                            }
                            <FormGroup>
                                <Label htmlFor="userName" className="userName"><b>Enter Usename </b><span class="text-danger"> *</span></Label>
                                <Input type="text" className="form-control" name="userName" required id="userName" placeholder="Enter UserName" onChange={handleInputChange} value={loginInput.userName} />
                                {
                                    formErrors.usernameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.usernameErr}</div>
                                }
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="userPassword" className="userPassword"><b>Enter Password </b><span class="text-danger"> *</span></Label>
                                <Input type="password" className="form-control" name="userPassword" id="userPassword" placeholder="Enter password" onChange={handleInputChange} value={loginInput.userPassword} />
                                {
                                    formErrors.passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.passwordErr}</div>
                                }
                            </FormGroup>
                            <hr/>
                            <button type="submit" class="btn btn-success" onClick={handleSubmit}>Login</button>
                        {
                            isLoginSuccess === 'false' && <h4 >**Enter Valid UserName and UserPassword*</h4>
                        }
                        <FormGroup>
                            <a href="http://localhost:3000/customer/save">Create Account?</a>
                    	</FormGroup>
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

export default LoginCustomer;


import styled from "styled-components";
import CustomerHeader from "./CustomerHeader";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CustomerDashboard() {
    const {userId} = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const [customer, setCustomer] = useState({
        userId: '',
        userName:''
    });
    const loadUser = async () => {
        const resultCustomer = await axios.get(`http://localhost:8082/customer/${userId}`);
        setCustomer(resultCustomer.data);
    };
    
    return (
        <Container>
            <CustomerHeader />
            <Background>
                <img
                    alt="saad sitting on table"
                    src={require("../assets/images/logo3.png")}
                ></img>
            </Background>

            <Content>


                <Customer>


                    <Text>
                        {/* <h1>Welcome {loggedInUser.userName},
                        </h1> */}
                        <h1>Welcome {customer.userName} </h1>
                        <h4>Need to look Fabulous,</h4><br/>
                        Get the look you always wanted to have in Groom & Boom.
                        
                    </Text>
                    
            </Customer>
                <Cont>

                    <Text>
                        Why are you Waiting lets Discover something new
                 
                    </Text>
                </Cont>
                <a href={`/services/${userId}`}>
              <Services>
            Explore Our Services
            </Services></a>

            </Content>
        </Container>
    );
};
const Container = styled.div`

`;
const Content = styled.div`
text-align:center;
margin-top:7%;
display:flex;
flex-direction:column;
justify-content:space-between;
`;
const Text = styled.div`

`;
const Value = styled.div`

`;
const Background = styled.div`
  left: 0px;
  opacity: 0.5;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    margin-left:45%;
    width: 50vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const Customer = styled.div`
margin-right:50%;
margin-top:30px;
z-index:1;
color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
@media (max-width: 768px) {
  font-size: 12px;
}
`;
const Cont = styled.div`
margin-right:50%;
margin-top:30px;
z-index:1;
color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
@media (max-width: 768px) {
  font-size: 12px;
}
`;
const Services = styled.button`
padding : 8px 12px;
margin-top:8px;
margin-right:50%;
font-size:15px;
font-family:Copperplate;
font-weight: bold;
letter-spacing:1.2px;
border : 1px solid white;
border-radius : 4px;
transition : all 0.2s ease 0s;
background-color:#6b0a43;
color:white;
@media(max-width : 768px){
    margin-bottom:10px;
}
&:hover{
    background-color:white;
    color:black;
    border-color:transparent;
}`;

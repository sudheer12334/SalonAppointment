import React from "react";
import styled from "styled-components";
import AdminHeader from "./AdminHeader";
import { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {

  useEffect(() => {
    document.title = "Welcome Admin";
    getAllPaymentsFromServer();
    getAllCustomersFromServer();
  }, [])

  // function to  call server:
  const [payments, setPayments] = useState([])
  const getAllPaymentsFromServer = () => {
    axios.get(`http://localhost:8082/order/all`).then(
      (response) => {

        console.log(response.data);

        setPayments(response.data)
      }
      // (error) => {
      //     //for error
      //     console.log(error);
      //     toast.error("Something Went wrong", { position: "bottom-center" })
      // }
    );
  };
  const [customers, setCustomers] = useState([])
  const getAllCustomersFromServer = () => {
    axios.get("http://localhost:8082/customer/all").then(
      (response) => {
        //success
        console.log(response.data);

        setCustomers(response.data)
      }
      // (error)=> {
      //     //for error
      //     console.log(error);
      //     toast.error("Something Went wrong",{position:"bottom-center"})
      // }
    );
  };

  return (
   
    <Container>
       <AdminHeader />
       <Background>
          <img
            alt="saad sitting on table"
            src={require("../assets/images/logo3.png")}
          ></img>
        </Background>

      <Content>
       

        <Customers>

       
                <Text>
                <h1>Customers We Successfully Served Till Now</h1>
                </Text>
                <Value>
                <h1>{customers.length}</h1>
                </Value>
              
            

       

        </Customers>
        <Payments>
          
        <Text>
                <h1>Orders We Recieved Till Now</h1>
                </Text>
                <Value>
                <h1>{payments.length}</h1>
                </Value>
              

        </Payments>



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
const Customers = styled.div`
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
const Payments = styled.div`
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
export default Admin;
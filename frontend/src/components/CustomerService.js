import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Contact from "../containers/contact/Contact";
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import CustomerHeader from './CustomerHeader';
function CustomerService() {
    const {userId} = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8082/SalonService/getAllServices").then(resp => setServices(resp.data));
    }, [])
    return (
        <Container>
            <CustomerHeader/>
        <Content>
         {services.map(p =>
        <Card>
        <Img  ><img src={p.image} alt="Hair Spa image" /></Img>
        <CardBody>
          <Title>{p.serviceName}</Title>
          <CardText>
          <span>  Price(INR):{p.price}   </span>
              <span>   Duration:{p.duration}</span>
               <span>    Discount:{p.discount}</span>
              </CardText>
          <a href={`/appointment/${userId}/${p.serviceId}`}>
              <Book>
            Book Appointment
            </Book></a>
        </CardBody>

      </Card>
     
  
         )}
         </Content>

         <Contact/>

    </Container>

  
    )
}

const Container = styled.div`
width:100%;
`;
const Card = styled.div`
display:block;
padding:10px 5px 10px 5px;
// border:1px solid white;
text-align:center;
display:flex;

flex-direction:column;
align-items:center;
// justify-content:space-between;
&: hover {
    opacity : 1;
    transition : opacity 0.2s ease 0s;
    padding :0;
    border: 4px solid  white ;
    transition-duration : 300ms;
}
@media (max-width:768px)
{   display:flex;

    width:100%;
}
`;
const CardText = styled.div`
margin-top:8px;
`;
const CardBody = styled.div`
color : rgb ( 249, 249 , 249 );
font - size : 10 px;
letter-spacing : 1.02px;
line-height:1.08;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
span{
    padding:0 0 0 5px;
}
`;
const Title = styled.div`
margin-top:5px;
`;
const Img = styled.div`
    // width:250px;
    // height:250px;
    img{
        // width:250px;
        height:250px;
        position:relative;
        width:400px;
    }

`;
const Content =styled.div`
margin-top:25px;
// margin-left:20px;
// margin-right:10px;
display:grid;
gap:5px;
width:100%;
grid-template-columns:repeat(3,minmax(0,1fr));
@media (max-width:768px)
{  
    grid-template-columns:repeat(1,minmax(0,1fr));
    width:100%;
}
`;

const Book = styled.button`
padding : 8px 12px;
margin-top:8px;
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
export default CustomerService;
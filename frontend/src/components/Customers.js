import { useEffect,useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";
import CustomerHeader from "./CustomerHeader";
import AdminHeader from "./AdminHeader";

const Customers = () =>
{        const [customers,setCustomers]= useState([])
    useEffect(()=>
    {
        document.title="Customer Details";
        getAllCustomersFromServer();
    },[])
    
    //function to  call server:

    const getAllCustomersFromServer = ()=>{
      axios.get("http://localhost:8082/customer/all").then(
            (response)=>
            {
            //success
            console.log(response.data);
            toast.success("Customers has been Loaded",
            {position:"bottom-center"})
            setCustomers(response.data)
            },
            (error)=> {
                //for error
                console.log(error);
                toast.error("Something Went wrong",{position:"bottom-center"})
            }
        );
    };
  
  
    return (
      
      <Container>
          <AdminHeader/>
            <Content>
        <Title><h2>Customers List</h2></Title>
        {customers.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>DOB</th>
  
               
                <th>Address</th>
                
                <th>State</th>
                <th>Pincode</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr>
                  <td>{c.userId}</td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.contactNo}</td>
                  <td>{c.dob}</td>
  
                
                  <td>{c.address.doorNo},
                  {c.address.street},
                  {c.address.area},
                  {c.address.city}</td>
                  <td>{c.address.state}</td>
                  <td>{c.address.pincode}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h3>Loading.....</h3>
        )}
  </Content>
      </Container>
     
    );
}


const Content = styled.div`
margin-top:20px;
 width:100%;
position:relative;

`;
const Container = styled.div`

`;
const Addnew = styled.div`

margin-top:10px;
text-align:center;
Button{
    padding : 8px 12px;
    border : 1px solid white;
    border-radius : 4px;
    transition : all 0.2s ease 0s;
    &:hover{
            background-color:#006b80;
            color:black;
            border-color:transparent;
}

`;
const Title = styled.div`
text-align:center;
`;
const Table = styled.table`
display:table;
width:100%;
border: 2px solid white;
border-spacing:2px;

border-collapse:collapse;
text-indent:initial;


thead{
    tr{
        border:none;
        background-color:#006b80;
        }
        th {
            border:solid white;
            padding: 5px 10px;
        }
}


tbody{
    tr{
    
        // :nth-of-type(odd) {
        //     background-color: grey;
        //   }
        //   :nth-of-type(even) {
        //     background-color:   #757575b8;
        //   }
          :hover {
            background-color: #89c1c5;
          }
        }
        td {
            border : solid white;
            padding: 5px 10px;

           
               span{ 
                   color:blue;
                
                    &:hover{
                        color:red;
                    }
                }

        }
}


`;
export default Customers;
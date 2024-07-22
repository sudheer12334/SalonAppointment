import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";
import React from "react";
import AdminHeader from "./AdminHeader";
const PaymentDetails = () => {
    useEffect(() => {
        document.title = "PaymentDetails";
        getAllPaymentsFromServer();
    }, [])

    // function to  call server:
    const [payments, setPayments] = useState([])
    const getAllPaymentsFromServer = () => {
        axios.get(`http://localhost:8082/order/all`).then(
            (response) => {
                //success
                console.log(response.data);
                toast.success("Payments has been Loaded",
                    { position: "bottom-center" })
                setPayments(response.data)
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("Something Went wrong", { position: "bottom-center" })
            }
        );
    };






    return (
        <Container>
            <AdminHeader/>
            <Content>
            <Title>  <h1>All Payments</h1></Title>
            {
                payments.length > 0 ?
                    <Table>
                        <thead>
                            <tr>
                            <th>PaymentId</th>
                                <th>CustomerName</th>
                                <th>PaymentAmount</th>
                                <th>PaymentMethod</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map(p =>
                                <tr>
                                    <td>{p.orderId}</td>
                                    <td>{p.customer.name}</td> 
                                    <td>{p.amount}</td>
                                    <td>{p.payment.type}</td>
                                    <td>{p.billingDate}</td>

                                </tr>
                            )}
                        </tbody>
                    </Table> : "No Services To Show"
            }
             </Content>
        </Container>

    )
}

const Container = styled.div`
// margin-top:20px;
//  width:100%;
// position:relative;

`;
const Content = styled.div`
margin-top:20px;
 width:100%;
position:relative;

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
export default PaymentDetails;
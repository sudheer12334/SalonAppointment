import { useEffect,useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Button } from 'reactstrap';
import axios from "axios";
import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import React from "react";


const AppointmentDetails = () =>
{      
    const [appointments, setAppointments] = useState([]);
    useEffect(()=>
        {
             document.title="Appointment_Details";
             getAllAppointmentFromServer();
         },[])

   const getAllAppointmentFromServer=() => {

        axios.get("http://localhost:8082/appointment/getAll").then(
            (response) => {setAppointments(response.data);
                console.log(response.data);
               toast.success("Services Loaded Succesfully",{position:"bottom-center"});
            },

            (error)=>{
                console.log(error);
                toast.error("Something went wrong",{position:"bottom-center"});
                console.log(error);
            }
        );
    };



    return (
        <Container>
            <AdminHeader/>
            <Content>            <Title>
            <h2>All Appointments</h2>
            </Title>
            {
            appointments.length > 0 ?
            <Table>
                <thead>
                <tr>
                            <th>Id</th>
                            <th>Location</th>
                            <th>visitType</th>
                         
                            <th>preferredService</th>
                            <th>preferredDate</th>
                            <th>preferredTime</th>
                            
                </tr>
                </thead>
                <tbody>
                {appointments.map(p =>
                            <tr>
                                <td>{p.appointmentId}</td>
                                <td>{p.location}</td>
                                <td>{p.visitType}</td>
                                <td>{p.preferredService}</td>
                                <td>{p.preferredDate}</td>
                                <td>{p.preferredTime}</td> 
                            </tr>
                        )}
                    </tbody>
                  
                         
                    
            </Table>:"No Appointments To Show"
            
                }
              </Content>

        </Container>
    )

}


const Container = styled.div`

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
export default AppointmentDetails;
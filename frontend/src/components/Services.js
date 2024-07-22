import { useEffect,useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Button } from 'reactstrap';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import AdminHeader from "./AdminHeader";


const ServiceDetails = () =>
{ 
    const [services, setServices] = useState([]);
    useEffect(()=>
        {
             document.title="Serrvice_Details";
             getAllServicesFromServer();
         },[])

   const getAllServicesFromServer=() => {

        axios.get("http://localhost:8082/SalonService/getAllServices").then(
            (response) => {setServices(response.data);
                console.log(response.data);
               toast.success("Services Loaded Succesfully",{position:"bottom-center"});
            },

            (error)=>{
                console.log(error);
                toast.error("No Services Found",{position:"bottom-center"});
                console.log(error);
            }
        );
    };

  const  DeleteService = (item) => {
    // event.preventDefault();
        axios.delete("http://localhost:8082/SalonService/removeService/" + item).then((resp) => {
            alert("Service deleted Successfully");
        window.location.reload(false); 
    });
       

    }

    return (
        <Container>
             <AdminHeader/>
             <Content>
            <Title>
            <h2>All Services</h2>
            </Title>
            {
            services.length > 0 ?
            <Table>
                <thead>
                <tr>
                            <th>ServiceId</th>
                            <th>ServiceName</th>
                            <th>Price(INR)</th>
                            <th>Discount(%)</th>
                            <th>Duration</th>
                            <th>Update</th>
                            <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {services.map(p =>
                            <tr>
                                <td>{p.serviceId}</td>
                                <td>{p.serviceName}</td>
                                <td>{p.price}</td>
                                <td>{p.discount}</td>
                                <td>{p.duration}</td>
                               
                                <td><a href={`/update-services/${p.serviceId}`}><span>Update</span></a></td>
                               
                                <td> <a onClick={() => DeleteService(p.serviceId)}><span>Delete</span></a></td>
                            </tr>
                        )}
                    </tbody>
                  
                         
                    
            </Table>:"No Services To Show"
            
                }
                <Addnew>
                    <Link to="/create-services">
                    <Button     outline color="success">
                      
                     Add Service
                    </Button>
                    </Link>
                </Addnew>
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

export default ServiceDetails;
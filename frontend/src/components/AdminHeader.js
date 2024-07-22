import styled from "styled-components";
import React from "react";
import { greeting } from "../portfolio";
const AdminHeader = () => {
    return (
        <Nav>
            <a href="/">
                <Logo>
                    <span>&lt;</span>
                    <span>{greeting.username}</span>
                    <span>/&gt;</span>
                </Logo>
            </a>

            
         
            <Dropdown>
                    <a href="/view-appointments">
                      <span> Appointments</span>
                     </a>
                    <a href="/view-services">
                      <span> Services</span>
                    </a>
                    <a href="/view-payments">
                      <span> Payments</span>
                    </a>
                    <a href="/view-customers">
                      <span> Customers</span>
                    </a>
                </Dropdown>
              <Navmenu>
                  <a href="/view-appointments">
                      <span> Appointments</span>
                  </a>
                  <a href="/view-services">
                      <span> Services</span>
                  </a>
                  <a href="/view-payments">
                      <span> Payments</span>
                  </a>
                  <a href="/view-customers">
                      <span> Customers</span>
                  </a>
                
               
                </Navmenu>
                <a href="/"> 
              <SignOut>
                 
                 <span>SignOut</span>
                
              </SignOut>
              </a>
              </Nav>
    );
};

const Nav = styled.div`
    height:70px;
    width:100%;
    position :relative;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding : 0 10px;
    letter-spacing:6px;
    z-index:3;
    background-color:#6b0a43;
    color:white;
    top:0;
    left:0;
    right:0;

`;

const Logo = styled.div`
padding : 0;
width : 100%;
margin-top:4px;
display:inline-block;
font-family: "Agustina Regular";
font-weight: bold;
font-variant-ligatures: no-common-ligatures;
-webkit-font-variant-ligatures: no-common-ligatures;
padding: 0 10px;
font-size:20px;
display: block;
float: left;
text-decoration: none;
line-height: normal;
@media(max-width : 768px){
    margin-bottom:10px;
}
 `;

const Dropdown = styled.div`
 padding : 0 0 10px 2px;

width : 100%;
display:flex ;
margin-top:70px;
background-color:#6b0a43;
position:absolute;
align-items:center;
justify-content:space-between;
right:0;
left:0;

a{
    display : flex;
    align-items:center;
    padding : 0 20px;

}
span{
    color : rgb ( 249, 249 , 249 );
    font - size : 10 px;
    letter-spacing : 1.02px;
    line-height:1.08;
    padding: 2px 0px ;
    white -space : nowrap ;
     position : relative;


&: before{
    background-color: rgb(249,249,249);
    border-radius : 0px 0px 4px 4px;
    bottom : -6px;
    content : "";
    height: 2px;
    left:0px;
    opacity:0;
    position : absolute;
    right : 0px;
    transform-origin : left-center;
    transform : scaleX(0);
    transition : all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
    visibility : hidden;
    width : auto;

}

}
@media(min-width : 769px){
    display:none;
}
&:hover{
    span:before{
        transform : scaleX(1);
        visibility : visible ;
        opacity : 1 !important;
    }

}
`;


const SignOut = styled.div`
padding : 8px 12px;
font-size:10px;
letter-spacing:1.5px;
border : 1px solid white;
border-radius : 4px;
transition : all 0.2s ease 0s;

@media(max-width : 768px){
    margin-bottom:10px;
}
&:hover{
    background-color:white;
    color:black;
    border-color:transparent;
}
`;
const Navmenu = styled.div`
    align-items center;
    display:flex;
    flex-flow: row nowrap;
    height:100%;
    justify-content: flex-end;
    margin:0px;
    margin-right:auto;
    margin-left:300px;
    position:absolute;
    a{
        display : flex;
        align-items:center;
        padding : 0 20px;

    }



    span{
        color : rgb ( 249, 249 , 249 );
        font - size : 13 px;
        letter-spacing : 1.42px;
        line-height:1.08;
        padding: 2px 0px ;
        white -space : nowrap ;
         position : relative;


    &: before{
        background-color: rgb(249,249,249);
        border-radius : 0px 0px 4px 4px;
        bottom : -6px;
        content : "";
        height: 2px;
        left:0px;
        opacity:0;
        position : absolute;
        right : 0px;
        transform-origin : left-center;
        transform : scaleX(0);
        transition : all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
        visibility : hidden;
        width : auto;

    }
}

&:hover{
    span:before{
        transform : scaleX(1);
        visibility : visible ;
        opacity : 1 !important;
    }

}
    @media(max-width : 768px){
        display:none;
    }

`;

export default AdminHeader;
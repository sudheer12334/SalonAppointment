import styled from "styled-components";
import Achievement from "../containers/achievement/Achievement";
import Footer from "../containers/footer/Footer";
import Greeting from "../containers/greeting/Greeting";
import StackProgress from "../containers/skillProgress/skillProgress";
import Skills from "../containers/skills/Skills";
import Header from "./Header";
import Contact from "../containers/contact/Contact";

const LandingPage = () =>

{

    return (
           <Container>
               <Header/>
               <Content>
               <Greeting />
               <Skills />
               <StackProgress />
                <Achievement />
                <Contact/>
                <Footer />
                </Content>
           </Container>
    );


};
const Container = styled.div`
    // margin-top:0px;
    // background-color: #171c28;
    // color: white;
    // transition: "0.1s";
    ;`
  
    const Content = styled.div`
    margin-top:0px;
    background-color: #171c28;
    color: white;
    transition: "0.1s";
    ;`
export default LandingPage;
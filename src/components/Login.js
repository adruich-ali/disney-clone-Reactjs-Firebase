import styled from 'styled-components';
import background from '../imgs/login-background.jpg';
import ctaicons from "../imgs/cta-logo-one.svg";
import logo2 from "../imgs/cta-logo-two.png";
const Login = (props)=> {
    return (
    <Container>
        <Content>
            <CTA>
                <CTAlogoOne src={ctaicons} alt='logo' />
                <SignUp>GET ALL THERE</SignUp>
                <Description>This Disney clone Build By Ali Adruich a Web Developer from casablanca Morocco to get in touch just contact me in www.adruich.com</Description>
                <CTALogoTwo src={logo2} alt="logo" />
            </CTA>
            <BgImage />
        </Content>
    </Container>
    )
};
export default Login;

const Container = styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;
`;
const Content = styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height: 100%;
`;
const BgImage = styled.div`
width:100%;
height:100%; 
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image:url(${background});
position: absolute;
top:0;
right:0;
z-index: -100;
`;
const CTA = styled.div`
max-width:650px;
width:100%;
display:flex;
flex-direction:column;
`;
const CTAlogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
`;
const SignUp = styled.a`
font-weight:bold;
color:white;
background-color:#0063e5; 
margin-bottom:12px;
width:100%;
letter-spacing:1.2px;
font-size:18px;
padding:16.5px 0;
border: 1px solid transparent;
border-radius:4px;
&:hover{
    background-color:#0483ee;
    cursor: pointer;
}
`;

const Description = styled.p`
color:hsla(0,0%,95.3%, 1);
font-size:12px;
margin:0 0 24px;
line-height:1.5;
letter-spacing:1.5px;
 `;
const CTALogoTwo = styled.img`
max-width:600px;
margin-bottom:20px;
display:inline-block;
vertical-align:bottom;
width:100%;
`;
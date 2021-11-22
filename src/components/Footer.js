import styled from 'styled-components';

const Footer = (props)=>{
    return(
        <Container>
            <h3>all rights reserved © Adruich</h3>
            </Container>
    )
};
export default Footer;
const Container = styled.footer`
display:flex;
height:50px;
background-color: #090b13; 
justify-content:center;
align-items:center;
letter-spacing:1.6px;
z-index:3;
font-size:12px;

`;
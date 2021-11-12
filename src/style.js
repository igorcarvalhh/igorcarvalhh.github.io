import styled from "styled-components";
import Typewriter from 'typewriter-effect';

export const Container = styled.div`
    margin: 16px 24px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

export const Home = styled.div`
    
    
    h3 { 
        font-size: 24px;
        font-weight: normal;
    }

    div {
        
        height: 140px;
        margin-top : 36px;
    }

    

    ${Typewriter} { 
        font-size: 4rem;
        font-weight: 900;
    }

    h2 {
        color: #05F324;
        font-size: 1.5rem;
        font-weight: normal;
        letter-spacing: 5px;
        margin-top: 40px;
    }

    p {
        font-size: 14px;
        width: 600px;
        margin-top: 30px;
        font-weight:  normal;
    }

    button {
        background-color: #FFD700;
        border: none;
        padding: 20px 40px;
        border-radius: 5px;
        font-weight: 800;
        font-size: 18px;
        font-family: "JetBrainsMono NF";
        margin-top: 40px;
    }
`

export const ContactMe = styled.section`
    display: flex;
    flex-direction: column;

`;

export const H1 = styled.h1`

`;
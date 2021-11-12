import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 522px;
    
  }
`;

export const H1 = styled.h1`
    font-size: 33px;
    margin-bottom: 16px;
`;

export const P  = styled.p`
    color: rgba(255, 255, 255, 0.44);
    font-size: 13px;
    margin-bottom: 32px;
`;

export const Contact = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
    padding-left: 16px;
`;


export const Icon = styled.div`
    height: 37px;
    width: 37px;
    background-color: rgba(5, 243, 36, 0.05);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        color: #05F324;
    }
`;

export const Value = styled.p`
    font-size: 12px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    input {
        border: none;
        background-color: #1E1E1E; 
        height: 50px;
        border-radius: 8px;
        border: 0.5px solid #1E1E1E;
        padding: 0 16px;
        color: white;
    }

    input:focus {
        outline: none;
        border: 0.5px solid #05F324;
        box-shadow: 0px 0px 1px 1.5px rgba(5, 243, 36, 0.17);
    }
`;

export const NameInput = styled.input`
    margin-top: 16px;
`;

export const EmailInput = styled.input`

`;

export const MessageInput = styled.input`
     
`;

export const SubmitBtn = styled.button`
    background-color: #FFD700;
    color: #111111;
    border: none;
    border-radius: 54px;
    height: 50px;
    font-family: "JetBrainsMono NF";
    font-weight: 900;
    font-size: 14px;
`;



import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 522px;
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

export const MessageInput = styled.textarea`
    border: none;
    background-color: #1E1E1E; 
    height: 150px;
    border-radius: 8px;
    border: 0.5px solid #1E1E1E;
    padding: 16px 16px;
    color: white;
    font-size: 14px;
    resize: none;

    &:focus {
        outline: none;
        border: 0.5px solid #05F324;
        box-shadow: 0px 0px 1px 1.5px rgba(5, 243, 36, 0.17);
    }
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

export const SuccessfulMessage = styled.div`
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #05F324;
    padding: 14px 24px;
    border-radius: 8px;
    display: ${props => props.suceful ? "flex" :  "none"};
    gap: 16px;
    min-width: 300px;
    top: 32px;
    z-index: 3;
    .success-text {
        display: flex;
        flex-direction: column;
    }
    p {
        display: inline;
        
    }
    span {  
        font-weight: bold;
        
    }
    svg {
        background-color: #00cb1a;
        border-radius: 100%;
        box-sizing: content-box;
        padding: 4px;
    }
`;

export const Close = styled.div`
    display: flex;
    align-items: center;
`;


export const Blur = styled.div`
    display: ${props => props.suceful ? "inline" :  "none"};
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: #00000045;
    backdrop-filter: blur(2px);
    z-index: 2;
    left: 0;
    top: 0;
`;


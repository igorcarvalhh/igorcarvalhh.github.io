import { 
    Container,
    H1,
    P,
    Contact,
    Icon,
    Value,
    Form,
    NameInput,
    EmailInput,
    MessageInput,
    SubmitBtn,
    SuccessfulMessage
} from "./style";

import { 
    MdOutlinePushPin,
    MdOutlinePhone,
    MdOutlineEmail,
    MdClose
} from "react-icons/md";

import { useState } from "react";

import emailjs from 'emailjs-com';

function ContactMe() {

    const [templateParams, setTemplateParams] = useState({});
    const [suceful, setSuceful] = useState(false);    

    function handleChange(key,value) {
        setTemplateParams({...templateParams,[key]: value});
    } 

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(templateParams)
        if (templateParams.message && templateParams.name && templateParams.email) {
            emailjs.send("service_vbg52th","template_ll8clkq", templateParams, "user_vzvduYqHHVyINS1w4Folm")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            setSuceful(true)
        }
      };
      
    return(

        <Container>
            <SuccessfulMessage suceful={suceful}>
                <p><span>Success!</span> Your message was send.</p> 
                <MdClose onClick={() => setSuceful(!suceful)}/>
            </SuccessfulMessage>
            <H1>Contact Me</H1>

            <P>Fill up the form and I will get back to you within 24 hours</P>
                
            <Contact>
                <Icon>
                    <MdOutlinePhone />
                </Icon>
                <Value>+55 21 98815-0626</Value>
            </Contact>
            <Contact>
                <Icon>
                    <MdOutlinePushPin />
                </Icon>
                <Value>Rua Pedro de Carvalho, 230</Value>
            </Contact>
            <Contact>
                <Icon>
                    <MdOutlineEmail />
                </Icon>
                <Value>igorcarvalhh@gmail.com</Value>
            </Contact>
            
            <Form onSubmit={sendEmail}>
                <NameInput 
                    placeholder="Name" 
                    onChange={e => handleChange("name",e.target.value)}
                ></NameInput>
                <EmailInput 
                    placeholder="Email"
                    onChange={e => handleChange("email",e.target.value)}
                ></EmailInput>
                <MessageInput 
                    type="message" 
                    placeholder="Message"
                    onChange={e => handleChange("message",e.target.value)}
                />
                <SubmitBtn type="submit">SEND MESSAGE</SubmitBtn>
            </Form>
        </Container>
    );
}

export default ContactMe;
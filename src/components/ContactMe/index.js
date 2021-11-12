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
    SubmitBtn
} from "./style";

import { 
    MdOutlinePushPin,
    MdOutlinePhone,
    MdOutlineEmail
} from "react-icons/md";

function ContactMe() {
    return(

        <Container>
            <H1>Contact</H1>

            <P>Fill up the form and our team will get back to you within 24 hours</P>
                
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
            
            <Form>
                <NameInput placeholder="Name"></NameInput>
                <EmailInput placeholder="Email"></EmailInput>
                <MessageInput placeholder="Message"/>
                <SubmitBtn>SEND MESSAGE</SubmitBtn>
            </Form>
        </Container>
    );
}

export default ContactMe;
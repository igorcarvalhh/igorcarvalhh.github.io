import { ContentWrapper, FooterContainer } from "./styled";
import Profile from "../../assets/profile.png";
import { ProfilePhotoWrapper } from "../Header/styled";

export const Footer = (props) => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <div className="content">
          <p className="subtitle">Entrar em contato</p>
          <h1 className="title">Vamos trabalhar juntos</h1>
          <p className="msg">
            If you have a website or mobile app idea in mind or you need some
            advice about product design, feel free to contact me. Currently my
            time books quickly, so the sooner you write, the better it is for
            both of us.
          </p>
          <ProfilePhotoWrapper>
            <img src={Profile} />
            <p className="name">
              <span>Reply time:</span> within 1-2 working days
            </p>
          </ProfilePhotoWrapper>
          <a className="button primary">igorcarvalhh@gmail.com</a>
          <div className="social-icons"></div>
          <p className="copywrite">
            © 2022 All rights reserved. –{" "}
            <span>Designed & Coded by Daniel Korpai</span>
          </p>
        </div>
      </ContentWrapper>
    </FooterContainer>
  );
};

import {
  ContentWrapper,
  HeaderContainer,
  ProfilePhotoWrapper,
  PrimaryBtn,
} from "./styled";
import { ReactComponent as ReactLogo } from "../../assets/header_img.svg";
import Profile from "../../assets/profile.png";

export const Header = (props) => {
  return (
    <>
      <HeaderContainer>
        <div className="container">
          <ContentWrapper>
            <h1>
              impulsione seu negócio através da <span>tecnologia</span>
            </h1>
            <p>
              Precisa realizar uma tranformação digital no seu negócio? Descubra
              a solução personalizada ideal para você!
            </p>
            <PrimaryBtn>Get started</PrimaryBtn>
            <ProfilePhotoWrapper>
              <img src={Profile} />
              <p>
                <span>Reply time:</span> within 1-2 working days
              </p>
            </ProfilePhotoWrapper>
          </ContentWrapper>
          <ReactLogo />
        </div>
      </HeaderContainer>
      <hr></hr>
    </>
  );
};

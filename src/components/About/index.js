import { ProfilePhotoWrapper } from "../Header/styled";
import { AboutContainer, ContentWrapper } from "./styled";
import Profile from "../../assets/profile.png";
import { ReactComponent as GithubLogo } from "../../assets/Icons-1.svg";
import { ReactComponent as TwitterLogo } from "../../assets/Icons-2.svg";
import { ReactComponent as InstagramLogo } from "../../assets/Icons-3.svg";
import { ReactComponent as LinkedinLogo } from "../../assets/Icons-4.svg";
import { ReactComponent as CodepenLogo } from "../../assets/Icons-5.svg";
import { ReactComponent as DribbbleLogo } from "../../assets/Icons-6.svg";
import { ReactComponent as FigmaLogo } from "../../assets/Icons.svg";

export const About = (props) => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <div className="about-description-container">
          <p className="subtitle">Prazer em conhecer</p>
          <h2 className="title">Olá, meu nome é Igor👋</h2>
          <p className="intro">
            My name is Daniel Korpai. I work as a User Interface & User
            Experience designer traveling around Europe.
          </p>
          <p className="description">
            Currently, I m designing the next generation of note taking
            experience at Craft with an incredible team. Previously, I was a
            Product Designer at InVision.
          </p>
          <p className="description">
            Outside of my full-time commitments, I work with a select freelance
            client base to create amazing products and solutions.
          </p>
          <p className="description">
            I m passionate about building & designing delightful experiences
            with the combination of business, marketing and UX/UI design to make
            customers and users satisfied when they re using products and
            services online.
          </p>
          <ProfilePhotoWrapper>
            <img src={Profile} />
            <p className="name">Igor Carvalho</p>
          </ProfilePhotoWrapper>
        </div>
        <div className="social-links-container">
          <h2>Fique por dentro</h2>
          <p className="tip">
            <span>Dica:</span> Me acompanhe nas redes sociais para mais
            novidades!
          </p>
          <ul className="social-ntw-list">
            <li>
              <InstagramLogo />
              <p className="name">Instagram</p>
            </li>
            <li>
              <LinkedinLogo />
              <p className="name">Instagram</p>
            </li>
            <li>
              <TwitterLogo />
              <p className="name">Instagram</p>
            </li>
            <li>
              <GithubLogo />
              <p className="name">Instagram</p>
            </li>
            <li>
              <CodepenLogo />
              <p className="name">Instagram</p>
            </li>
            <li>
              <DribbbleLogo />
              <p className="name">Instagram</p>
            </li>
            <li>
              <FigmaLogo />
              <p className="name">Instagram</p>
            </li>
          </ul>
        </div>
      </ContentWrapper>
    </AboutContainer>
  );
};

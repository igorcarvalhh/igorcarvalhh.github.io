import { ContentWrapper, WorksContainer } from "./styled";

export const Works = (props) => {
  return (
    <>
      <WorksContainer>
        <ContentWrapper>
          <p className="subtitle">TRABALHOS RECENTES</p>

          <ul className="services-details">
            <li className="item">
              <img src="https://cdn.dribbble.com/users/606683/screenshots/5865168/media/0fd864fa2657c27ae7947d0a11cded8d.jpg?compress=1&resize=768x576&vertical=top" />
            </li>
            <li className="item">
              <img src="https://cdn.dribbble.com/users/606683/screenshots/4420134/attachments/1013936/skillshare-project-landing-page-full.png?compress=1&resize=768x576&vertical=top" />
            </li>
            <li className="item">
              <img src="https://cdn.dribbble.com/users/606683/screenshots/4804084/danielkorpai-portfolio.png?compress=1&resize=768x576&vertical=top" />
            </li>
            <li className="item">
              <img src="https://cdn.dribbble.com/users/606683/screenshots/5307291/attachments/1151220/digital-products-page.png?compress=1&resize=768x576&vertical=top" />
            </li>
            <li className="item">
              <img src="https://cdn.dribbble.com/users/606683/screenshots/4420134/attachments/1004528/landing-page-template-full.png?compress=1&resize=768x576&vertical=top" />
            </li>
            <li className="item">
              <img src="https://cdn.dribbble.com/users/606683/screenshots/5650994/invision-studio-breathe-app-source-files_4x.png?compress=1&resize=768x576&vertical=top" />
            </li>
          </ul>
        </ContentWrapper>
      </WorksContainer>
      <hr></hr>
    </>
  );
};

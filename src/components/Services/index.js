import { ContentWrapper, ServicesContainer } from "./styled";

export const Services = (props) => {
  return (
    <>
      <ServicesContainer>
        <ContentWrapper>
          <div className="services-intro">
            <div className="content">
              <p className="subtitle">Nossos serviços</p>
              <h1 className="title">Principais soluções</h1>
              <p className="description">
                Estas são nossas principais soluções. Qual delas mais se encaixa
                no seu negócio? Entre em contato para mais informações.
              </p>
            </div>
            <div className="buttons">
              <a className="primary">Start a project</a>
              <a className="secondary">Learn more</a>
            </div>
          </div>
          <ul className="services-details">
            <li className="item">
              <h2 className="title">FrontEnd</h2>
              <p className="description">
                Ask first. Before jumping into designing I always make sure that
                we’re asking the right questions and trying to accomplish the
                right challenges. This stage includes market research,
                competitive analyses, consulting and exploring possible
                solutions.
              </p>
            </li>
            <li className="item">
              <h2 className="title">UX/UI Design</h2>
              <p className="description">
                Problem solving. At the end of this phase you’ll have a pixel
                perfect design for your app or website. During the transition
                from wireframes into the final design I create prototypes
                simulating final end results before development.
              </p>
            </li>
            <li className="item">
              <h2 className="title">BackEnd</h2>
              <p className="description">
                Bringing designs to life. Since I’m a designer who can code too,
                I can easily work in close collaboration with developers up
                until the finish line and beyond. In case of web projects I also
                do front-end development.
              </p>
            </li>
            <li className="item">
              <h2 className="title">Ciência de Dados</h2>
              <p className="description">
                Transparent process. Complete overview of my design process
                through regular meetings. After the initial design versions I’m
                happy to do user testing with your customers to ensure the best
                possible solutions for their needs.
              </p>
            </li>
          </ul>
        </ContentWrapper>
      </ServicesContainer>
      <hr></hr>
    </>
  );
};

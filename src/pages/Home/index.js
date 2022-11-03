import { About } from "../../components/About";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Services } from "../../components/Services";
import { Works } from "../../components/Works";
import { Container } from "./styled";

export const Home = (props) => {
  return (
    <Container>
      {/* <Header></Header> */}
      {/* <Services></Services> */}
      {/* <Works></Works> */}
      <About></About>
      {/* <Footer></Footer> */}
    </Container>
  );
};

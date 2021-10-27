import { Home, Container } from './style';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <Container>
      <Home>
        <h3>HI THERE👋,I’M IGOR</h3>
        <div>
        <Typewriter
          options={{
            strings: ['Turn your ideas into Reallity.'],
            autoStart: true,
            loop: true,
          }}
        />
        </div>
        <h2>DESIGNER + DEVELOPER👨‍💻</h2>  
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on 
          building accessible, human-centered products at Upstatement.
        </p>
        <button>CONTACT ME</button>
      </Home>
    </Container>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Education from "./components/Education";
import Socials from "./components/Socials";

function App() {
  return ( 
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero />
          </div>
          <About/>
          <Experience/>
          <Education/>
          <Tech/>
          <Works/>
         
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>
          <Socials/>
        </div>
      </BrowserRouter>
  )
}

export default App

import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Landing from './Components/Landing';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Projects from './Components/Projects';


function App() {
  return (
    <div className='app'>
      <Landing/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

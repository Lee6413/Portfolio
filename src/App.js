import { useContext } from 'react'
import { ThemeContext } from './context/theme'
import Info from './components/Info/info';
import Header from './components/Header/header'
import Skills from './components/Skills/skills'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import Scroll from './components/Scroll/scroll'
import Projects from './components/Projects/projects'
import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>

      <Header />

      <main>
        <Info />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Scroll />
      <Footer />
    </div>
  );
}

export default App;

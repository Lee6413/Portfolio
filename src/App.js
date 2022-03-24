import { useContext } from 'react'
import { ThemeContext } from './context/theme'
import Info from './components/Info/info';
import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>

      <main>
        <Info />
      </main>
    // </div>
  );
}

export default App;

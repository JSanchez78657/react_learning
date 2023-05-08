import logo from './JLLogo.png';
import './App.css';
import Info from './components/Info'
import PasswordClicker from './components/PasswordClicker'
import {useState} from "react";

function App() {

    const [dark, setDark] = useState(true)

    const THEME = {
        LIGHT: 'App-header-light',
        DARK: 'App-header-dark'
    }

    const theme = {
        className: dark ? THEME.DARK : THEME.LIGHT
    }

  return (
    <div className="App">
        <header className={theme.className}>
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
            <img src={logo} className="App-logo" alt="logo"/>
            <Info alias={"Superman"} power={"Super Strength"} weakness={"Kryptonite"} secretIdentity={"Clark Kent"} publicHero={false}/>
            <Info alias={"Martian Manhunter"} power={"Super Strength"} weakness={"Fire"} secretIdentity={"J'onn J'onzz"} publicHero={true}/>
            <PasswordClicker/>
        </header>
    </div>
  );
}

export default App;

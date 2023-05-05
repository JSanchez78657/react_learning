import logo from './JLLogo.png';
import './App.css';
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Info alias={"Superman"} power={"Super Strength"} weakness={"Kryptonite"} secretIdentity={"Clark Kent"} publicHero={false}/>
        <Info alias={"Martian Manhunter"} power={"Super Strength"} weakness={"Fire"} secretIdentity={"J'onn J'onzz"} publicHero={true}/>
      </header>
    </div>
  );
}

export default App;

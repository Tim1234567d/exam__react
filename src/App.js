import './App.css';
import Logic from './Logic/Logic';
import Logo  from "./assets/Logo.png";

function App() {
    return (
        <div className="App">
            <img src={Logo} alt="logo"/>
            <Logic/>
        </div>
    );
}

export default App;

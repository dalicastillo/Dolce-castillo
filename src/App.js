import './App.css';
import NavBar from './components/NavBar';
import './components/NavBar.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home"
import ContadorDeUnidades from './components/Contados';



function App() {
  return ( 
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/cards" component={Home} />
      <Route exact path="/contadorDeUnidades" component={ContadorDeUnidades} />
      </Switch>
      <h1>Bienvenidos!</h1>
        <h2>Dolce Tempo</h2>
        <p>
          Celebrá dulzura
        </p>
        
        
     <header className="App-header">
       <img src="https://image.flaticon.com/icons/png/512/4139/4139679.png"className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://dolce-tempo.000webhostapp.com/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita nuestro sitio
        </a>
      </header>
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;




import './App.css';
import Contador from './components/Contados';
import NavBar from './components/NavBar';
import './components/NavBar.css';
import '../src/components/Contados';
import Cards from './components/cards';


function App() {
  return ( 
  
    <div className="App">
      <NavBar />
      <h1>Bienvenidos!</h1>
        <h2>Dolce Tempo</h2>
        <p>
          Celebrá dulzura
        </p>
        
        <Cards />
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
    
  );
}

export default App;





import './App.css';
import NavBar from './components/NavBar';
import './components/NavBar.css';


function App() {
  return ( 
  
    <div className="App">
      <NavBar />
      <header className="App-header">
      <img src="https://image.flaticon.com/icons/png/512/4139/4139679.png"className="App-logo" alt="logo" />
        <h1>Bienvenidos!</h1>
        <h2>Dolce Tempo</h2>
        <p>
          Celebrá dulzura
        </p>
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




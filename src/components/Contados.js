import * as React from "react";
import * as ReactBootStrap from "react-bootstrap";
import './style.css';


const useCounter = () => {
    const [counter, setCounter] = React.useState(0);


    const increase = () => setCounter(counter+1) 
    const decrement = () => setCounter (counter -1)
    const reset = () => setCounter(0)
    
    return {
        counter,
        increase,
        decrement,
        reset,
    };
     
    };

    export default function App() {
        const {counter,
             increase,
              decrement, 
              reset
            } = useCounter()
    
    return (
  
      <div className="contador">
         <p>Unidades: {counter}</p>
        <ReactBootStrap.Button  variant="outline-info" onClick={decrement}>-</ReactBootStrap.Button>
        <ReactBootStrap.Button  variant="outline-info"onClick={increase}>+</ReactBootStrap.Button>
        <ReactBootStrap.Button  variant="outline-info" onClick={reset}>Reset</ReactBootStrap.Button>
        <h1>
        <ReactBootStrap.Button  variant="outline-info">Agregar al carrito</ReactBootStrap.Button>{' '}
        </h1>
    
      </div>
      
    
    );
  };
  
  


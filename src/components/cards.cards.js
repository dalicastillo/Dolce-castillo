import * as React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardContainers = ({3}) => {
    const[items, setItems] = React.useState([]);

    React.useEffect(() => {
        getProducts().then((result) => setItems(result));
}, []);

const comprarProducto = (product) => {
    console.log('Has comprado el producto: ${product}');
};

const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (productos);
        }, 3000);
    });
};

return (
    <div style={{ display:"flex", justifyContent: "space-evenly"}}>
        {items.map((producto) => {
        return (
          <Card
            key={producto.id}
            title={producto.title}
            description={producto.description}
            image={producto.image}
            comprar={comprarProducto}
            /> 
        ); 

        

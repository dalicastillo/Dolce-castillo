import * as React from "react";
import * as ReactBootStrap from "react-bootstrap";

function Cards() {
    return (
  <div style={{display: "flex",justifyContent:"space-evenly"}} className='cards'> 

    <ReactBootStrap.Card border="secondary" style={{ width: '18rem' }}>
      <ReactBootStrap.Card.Img variant="top" src="https://scontent.feze13-1.fna.fbcdn.net/v/t1.6435-9/241956365_1464058273965633_4097221478472715677_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=a26aad&_nc_ohc=2DUjTCp8fL8AX9YvtLv&_nc_ht=scontent.feze13-1.fna&oh=6d759bbc5016520677275b323c6813ec&oe=61672F87" />
       <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>Torta y galletas</ReactBootStrap.Card.Title>
       <ReactBootStrap.Card.Text>
      Incluye torta, galletas y cupcake personalizado con sabores a elección
    </ReactBootStrap.Card.Text>
     <ReactBootStrap.Button variant="info">Consultar</ReactBootStrap.Button>
       </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">Disponible en stock</small>
    </ReactBootStrap.Card.Footer>
    </ReactBootStrap.Card>
    <ReactBootStrap.Card border="secondary" style={{ width: '18rem' }}>
       <ReactBootStrap.Card.Img variant="top" src="https://scontent.feze13-1.fna.fbcdn.net/v/t1.6435-9/241279034_1460809327623861_9020599761311698941_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=fpwRrKjR74QAX_GXx3I&_nc_ht=scontent.feze13-1.fna&oh=4153be8d8fd43b2144ccc08b89a52e2c&oe=6168B717" />
       <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>Torta desayuno</ReactBootStrap.Card.Title>
       <ReactBootStrap.Card.Text>
       Incluye torta y taza personalizadas + sandwiches, medialunas de JyQ, icepop, conos de ddl y alfajores de maicena
    </ReactBootStrap.Card.Text>
     <ReactBootStrap.Button variant="info">Consultar</ReactBootStrap.Button>
       </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">Disponible en stock</small>
    </ReactBootStrap.Card.Footer>
    </ReactBootStrap.Card>
    <ReactBootStrap.Card border="secondary" style={{ width: '18rem' }}>
       <ReactBootStrap.Card.Img variant="top" src="https://scontent.feze13-1.fna.fbcdn.net/v/t1.6435-9/241520436_1459713754400085_6626014556035934234_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=a26aad&_nc_ohc=V81urXA10PMAX9RutQ9&_nc_ht=scontent.feze13-1.fna&oh=c86aaaa8b982dff10faba81557e7cdad&oe=61685F1A" />
       <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>Box dulce</ReactBootStrap.Card.Title>
       <ReactBootStrap.Card.Text>
     Incluye icepop, bombones de chocolate, galletas, oreos bañadas en chocolate y mini tabletas de chocolate. Tematica a elección
    </ReactBootStrap.Card.Text>
     <ReactBootStrap.Button variant="info">Consultar</ReactBootStrap.Button>
       </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">Consultar disponibilidad de stock</small>
    </ReactBootStrap.Card.Footer>
    </ReactBootStrap.Card>


    </div>
        
        );
    }


export default Cards;
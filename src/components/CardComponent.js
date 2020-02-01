import React from 'react';

import { Button, Card, Navbar, Form, Nav, InputGroup, FormControl } from 'react-bootstrap';

function CardComponent(props) {
    // const {title, description, img} = props.characteristics;
    return (
  
      <div style={{ padding: '10px' }}>
        <Card style={{ width: '21rem', }}>
          <Card.Img variant="top" src={props.characteristics.img} style={{ height: '180px' }} />
          <Card.Body>
            <Card.Title>{props.characteristics.title}</Card.Title>
            <Card.Text>
              {props.characteristics.description}
            </Card.Text>
            <Button variant="primary">click to order</Button>
          </Card.Body>
        </Card>
      </div>
  
  
    )
  }
  export default CardComponent;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import mylogo from './component/mylogo.png';
import walnut from './component/walnut.jpg';
import dryDate from './component/dryDate.jpg';
import apricot from './component/apri.jpg';

import fruit from './component/mix1.jpg';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Navbar, Form, Nav, InputGroup, FormControl } from 'react-bootstrap';

function Container() {
  return (
    <div style={{ width: '200px', height: '230px', border: '1px solid black', backgroundColor: '#fff' }}>
      <img src={logo} style={{ width: '200px' }} />
      <h3 style={{ border: '1px solid grey' }}></h3>
    </div>
  )
}
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
function Navig() {
  return (
    <Navbar bg="secondary" variant="dark">
      <Navbar.Brand href="#home">About us</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  )
}
function Footer(){
  return(
  <footer className="page-footer font-small blue pt-4">

  <div className="container-fluid text-center text-md-left">

    <div className="row">

      <div className="col-md-6 mt-md-0 mt-3">

        <h5 className="text-uppercase">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>

      </div>

      <hr className="clearfix w-100 d-md-none pb-3" />

        <div className="col-md-3 mb-md-0 mb-3">

          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>

        </div>

        <div className="col-md-3 mb-md-0 mb-3">

          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>

        </div>

</div>

    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
<a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
    </div>

</footer>
  )

}
function App() {
  const cardTypes = [
    {
      title: 'Walnut',
      description: 'A walnut is the nut of any tree of the genus Juglans, particularly the Persian or English walnut, Juglans regia. A walnut is the edible seed of a drupe, and thus not a true botanical nut. It is commonly consumed as a nu',
      img: walnut,
    },
    {
      title: 'Apricot',
      description: 'Dried apricots are a type of traditional dried fruit. When treated with sulfur dioxide, the color is vivid orange. Organic fruit not treated with sulfur vapor is darker in color and has a coarser texture. ',
      img: apricot,
    },
    {
      title: 'Dry Date',
      description: 'Dried fruit is fruit from which the majority of the original water content has been removed either naturally, through sun drying, or through the use of specialized dryers or dehydrators. must eat dry fruit',
      img: dryDate,
    },
    {
      title: 'Dry fruit',
      description: 'Dried fruit is fruit from which the majority of the original water content has been removed either naturally, through sun drying, or through the use of specialized dryers or dehydrators. must eat dry fruit',
      img: fruit,
    },
    {
      title: 'Walnut',
      description: 'A walnut is the nut of any tree of the genus Juglans, particularly the Persian or English walnut, Juglans regia. A walnut is the edible seed of a drupe, and thus not a true botanical nut. It is commonly consumed as a nu',
      img: walnut,
    },
    {
      title: 'Apricot',
      description: 'Dried apricots are a type of traditional dried fruit. When treated with sulfur dioxide, the color is vivid orange. Organic fruit not treated with sulfur vapor is darker in color and has a coarser texture. ',
      img: apricot,
    },
    {
      title: 'Dry Date',
      description: 'Dried fruit is fruit from which the majority of the original water content has been removed either naturally, through sun drying, or through the use of specialized dryers or dehydrators. must eat dry fruit',
      img: dryDate,
    },
    {
      title: 'Dry fruit',
      description: 'Dried fruit is fruit from which the majority of the original water content has been removed either naturally, through sun drying, or through the use of specialized dryers or dehydrators. must eat dry fruit',
      img: fruit,
    },
  ];
  console.log(cardTypes);
  return (
    <div >
      <div className="App">
        <header >
          <div>
            <img src={mylogo} className="pic" />
          </div>

          <Navig />
        </header>

      </div>
      <div className="mainBody">
        {cardTypes.map((val, i) => {
          return <CardComponent characteristics={val} key={i} />
        })}
      </div>
        <Footer />
     
    
    </div>
      );
    }
    
    export default App;

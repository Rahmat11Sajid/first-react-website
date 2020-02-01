import React from 'react';
import logo from '../images/mylogo.png';
function Container() {
    return (
      <div style={{ width: '200px', height: '230px', border: '1px solid black', backgroundColor: '#fff' }}>
        <img src={logo} style={{ width: '200px' }} />
        <h3 style={{ border: '1px solid grey' }}></h3>
      </div>
    )
  }
  export default Container;
import React from 'react';

import mylogo from '../images/mylogo.png';
import walnut from '../images/walnut.jpg';
import dryDate from '../images/dryDate.jpg';
import apricot from '../images/apri.jpg';
import CardComponent from './CardComponent';
import fruit from '../images/mix1.jpg'
import { Button, Card} from 'react-bootstrap';


function Home() {
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
  
          </header>
  
        </div>
        <div className="mainBody">
          {cardTypes.map((val, i) => {
            return <CardComponent characteristics={val} key={i} />
          })}
        </div>
       
      
      </div>
        );
      }
      
      export default Home;
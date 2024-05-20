

import Carousel from 'react-bootstrap/Carousel';
import "./Carousal.css"
import Image, { Image1, Image2 } from './Images';


function Carousells() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
       
        <Image/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
          <Image1/>       
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
        <Image2/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousells;
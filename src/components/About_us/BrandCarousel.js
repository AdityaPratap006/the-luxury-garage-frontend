import React , { Component } from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import './BrandCarousel.css';
import audi from './logos/Audi.png';
import bentley from './logos/Bentley.png';
import bmw from './logos/BMW.png';
import ferrari from './logos/Ferrari.png';
import jaguar from './logos/Jaguar.png';
import lamborghini from './logos/Lamborghini.png';
import landrover from './logos/Land-Rover.png';
import maserati from './logos/Maserati.png';
import mercedes from './logos/Mercedes-Benz.png';
import porsche from './logos/Porsche.png';
import rollsroyce from './logos/Rolls-Royce.png';
import bugatti from './logos/Bugatti.png';
const BrandCarousel = () => (
	
	<InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ]}
    animationDuration={1200}
    autoCycle={true}
    cycleInterval={3000}
    arrows={true}
    dots={false}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={3}
    slidesToShow={3}
    scrollOnDevice={false}
  >
    <div>
      <img
        alt=''
        src={audi}
      />
    </div>
    <div>
      <img
        alt=''
        src={bentley}
      />
    </div>
    <div>
      <img
        alt=''
        src={bmw}
      />
    </div>
    <div>
      <img
        alt=''
        src={bugatti}
      />
    </div>
    <div>
      <img
        alt=''
        src={ferrari}
      />
    </div>
    <div>
      <img
        alt=''
        src={jaguar}
      />
    </div>
    <div>
      <img
        alt=''
        src={lamborghini}
      />
    </div>
    <div>
      <img
        alt=''
        src={landrover}
      />
    </div>
    <div>
      <img
        alt=''
        src={maserati}
      />
    </div>
    <div>
      <img
        alt=''
        src={mercedes}
      />
    </div>
    <div>
      <img
        alt=''
        src={porsche}
      />
    </div>
    <div>
      <img
        alt=''
        src={rollsroyce}
      />
    </div>
   
  </InfiniteCarousel>
 
);

export default BrandCarousel;
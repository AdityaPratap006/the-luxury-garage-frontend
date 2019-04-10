import React, { Component } from 'react';
import './Home.css';
import SlideShow from './Carousel.js';

class Home extends Component {
  render() {
    return (
     
     
      <div  className="home-page">
         <SlideShow changeRoute = {this.props.changeRoute} />
         
         
       </div> 

    );
  }
}

export default Home;

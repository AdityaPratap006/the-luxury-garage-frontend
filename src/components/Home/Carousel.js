import React, {Component} from 'react';
import Slider from 'react-animated-slider';
//import { Container, Row, Col } from 'reactstrap';
import './Carousel.css';
import './CarouselAnimation.css';
import horizontalCss from 'react-animated-slider/build/horizontal.css';






class SlideShow extends Component {

  constructor(props){
    super(props);

  }

  render(){
      const content = [
  {
    title: `Welcome to The Luxury Garage`,
    description:'',
    button: 'Read More',
    buttonLink:'#',
    image:'https://res.cloudinary.com/nit-jamshedpur/image/upload/q_18/v1555481805/luxuryGarage/home/1.jpg',
    logoImg:'../Navbar/logo2.png',
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png',
    btnclick:() => this.props.changeRoute('about')
  },
  {
    title: 'Drive home the luxury you`ve always craved!',
    description:
    '' ,
    button: 'Discover',
    buttonLink:'#',
    image:'https://res.cloudinary.com/nit-jamshedpur/image/upload/q_18/v1555481805/luxuryGarage/home/2.jpg',
    logoImg:'../Navbar/logo2.png',
    user: 'Erich Behrens',
    userProfile: 'https://i.imgur.com/0Clfnu7.png',
    btnclick:() => this.props.changeRoute('howItWorks')
  },
  {
    title: 'The biggest collection of luxury cars is here! ',
    description:
    ' ',
    button: 'Buy now',
    buttonLink:'#',
    image: 'https://res.cloudinary.com/nit-jamshedpur/image/upload/q_18/v1555481805/luxuryGarage/home/3.jpg',
    logoImg:'../Navbar/logo2.png',
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png',
    btnclick: () => this.props.changeRoute('fleet')
  }
];


  return(
        <Slider className="slider-wrapper" autoplay={2400} infinite={true}>
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }
              }
            >
              <div className="inner">
                <h1 className="CourgetteFont">{item.title}</h1>
                <p className="CourgetteFont">{item.description}</p>
                 <a href={item.buttonLink} ><button onClick={item.btnclick}>{item.button}</button></a>
              </div>
              
            </div>
          ))}
        </Slider>
    );

  }

  

    
  };

export default SlideShow;
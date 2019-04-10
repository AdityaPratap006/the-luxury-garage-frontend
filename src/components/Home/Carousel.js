import React, {Component} from 'react';
import Slider from 'react-animated-slider';
//import { Container, Row, Col } from 'reactstrap';
import './Carousel.css';
import './CarouselAnimation.css';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import rrDawn from './img/2018_rolls-royce_dawn_black_badge_3_1600x1200.jpg';
import lamHuracan from './img/2018_lamborghini_huracan_performante_36_1600x1200.jpg';
//import bentFS from './img/2015_bentley_flying_spur_v8_3_1600x1200.jpg';
import RRSva from './img/2016_range_rover_sv_autobiography_71_1600x1200.jpg';
//import collage1 from './img/BeFunky-collage-1-mobile.jpg';




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
    image:lamHuracan,
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
    image: rrDawn,
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
    image: RRSva,
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
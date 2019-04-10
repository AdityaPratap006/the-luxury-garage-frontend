import React,{Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './About_us.css';
import BrandCarousel from './BrandCarousel.js';
import CountUp from 'react-countup';

class AboutUS extends Component {



 componentDidMount() {
 	window.scrollTo(0,0);
    const orig = document.body.className;
    console.log(orig);  //Just in-case to check if your code is working or not
    document.body.className = orig + (orig ? ' ' : '') + 'my-bg-image1'; //Here gray-by is the bg color which I have set
}
componentWillUnmount() {
    document.body.className = null;
}

 render(){

 	return (
 				<div className='AboutUs' >
		<Container className="my-cont" >
			<Row>
				<Col>
					<h1 >
						ABOUT US
					</h1>
				</Col>
			</Row>
			<Row className='AboutUs-row AboutUs-cardText'>

				<Col xs='12'>
					<h2 >FIGURES AT A GLANCE</h2>
					
				</Col>
				<Col xs='12' lg='4' className='myCounter'>
					<CountUp  end={24} duration={4.5} className='myDigits'/>
					<h2>Locations!</h2>
				</Col>
				<Col xs='12' lg='4' className='myCounter'>
					<CountUp  end={1000} duration={3} className='myDigits'/>
					<h2>Cars!</h2>
				</Col>
				<Col xs='12' lg='4' className='myCounter'>
					<CountUp  end={20000} duration={4} className='myDigits'/>
					<h2>Happy Customers!</h2>
				</Col>
			</Row>
			<Row> 
				<hr/> 
			</Row>
			<Row className='AboutUs-row' >
				<Col xs='12' className='AboutUs-cardText   '>
					 <h2  >WHO ARE WE</h2>
					<p  >
						We don't think that there's even a single human on earth
						who is not fascinated by luxury cars.Luxury cars have continued
						to amuse both young and old alike for ages. And we , at THE LUXURY GARAGE,
						strongly believe that these beautiful creations of mankind should not be 
						limited to the claws of the rich and powerful.We are here to make your dreams come true!
						The first of its kind service in India, where we are making it possible for a common man
						to own the car of his dreams!!! 
					</p>
				</Col>
			</Row>
			<Row> 
				<hr/> 
			</Row>
			<Row  className='AboutUs-row'>
				<Col xs='12' className='AboutUs-brands'>
					<h2 >THE BRANDS WE OFFER</h2>
					<BrandCarousel/>
				</Col>
			</Row>
			
			
		</Container>
	</div>

 		);
 }

}

	
	

export default AboutUS;
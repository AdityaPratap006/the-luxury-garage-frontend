import React,{ Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Locations.css';
import CardList from './cardList.js';
import ahmedabad from './img/Ahmedabad.jpg';
import bangalore from './img/Bangalore.jpg';
import amritsar from './img/Amritsar.jpg';
import chennai from './img/Chennai.jpg';
import delhi from './img/Delhi.jpg';
import gurugram from './img/Gurugram.jpg';
import hyderabad from './img/Hyderabad.jpg';
import jaipur from './img/Jaipur.jpg';
import kolkata from './img/Kolkata.jpg';
import lucknow from './img/Lucknow.jpg';
import mumbai from './img/Mumbai.png';
import kochi from './img/Kochi.jpg';
import dubai from './img/Dubai.jpg';
import hongkong from './img/Hongkong.jpg';
import london from './img/London2.jpg';
import moscow from './img/Moscow.jpg';
import munich from './img/Munich.jpg';
import paris from './img/Paris.jpg';
import singapore from './img/Singapore.jpg';
import sydney from './img/Sydney.jpg';
import tokyo  from './img/Tokyo.jpg';
import vienna from './img/Vienna.jpg';
import nyc from './img/NYC.jpg';
import toronto from './img/Toronto.jpg';
const indianCities = [
	{
		name:'Ahmedabad',
		photo:ahmedabad
	},
	{
		name:'Amritsar',
		photo:amritsar
	},
	{
		name:'Bangalore',
		photo:bangalore
	},
	{
		name:'Chennai',
		photo:chennai
	},
	{
		name:'Delhi',
		photo:delhi
	},
	{
		name:'Gurugram',
		photo:gurugram
	},
	{
		name:'Hyderabad',
		photo:hyderabad
	},
	{
		name:'Jaipur',
		photo:jaipur
	},
	{
		name:'Kochi',
		photo:kochi
	},
	{
		name:'Kolkata',
		photo:kolkata
	},
	{
		name:'Lucknow',
		photo:lucknow
	},
	{
		name:'Mumbai',
		photo:mumbai
	},
	 
];

const abroadCities = [

	{
		name:'Dubai, UAE',
		photo:dubai
	},
	{
		name:'Hong Kong, China',
		photo:hongkong
	},
	{
		name:'London, UK',
		photo:london
	},
	{
		name:'Moscow, Russia',
		photo:moscow
	},
	{
		name:'Munich, Germany',
		photo:munich
	},
	{
		name:'New York, USA',
		photo:nyc
	},
	{
		name:'Paris, France',
		photo:paris
	},

	{
		name:'Singapore, Singapore',
		photo:singapore
	},
	
	{
		name:'Sydney, Australia',
		photo:sydney
	},
	{
		name:'Tokyo, Japan',
		photo:tokyo
	},
	{
		name:'Toronto, Canada',
		photo:toronto
	},
	{
		name:'Vienna, Austria',
		photo:vienna
	}
	
];

class Locations extends Component {

	componentDidMount() {
 	window.scrollTo(0,0);
    const orig = document.body.className;
    console.log(orig);  //Just in-case to check if your code is working or not
    document.body.className = orig + (orig ? ' ' : '') + 'my-bg-image3'; //Here gray-by is the bg color which I have set
}
componentWillUnmount() {
    document.body.className = null;
}

	render(){
		return (

		<div >
			<Container className='location-page center'>
				<Row>
					<Col xs='12'>
						<h2 className="location-page-title" > OUR LOCATIONS </h2>
					</Col>
				</Row>
				<Row>
						<Col xs='12'>
							<h2 className="fleet-sub-title">OUR DEALERSHIPS ARE PRESENT IN FOLLOWING CITIES</h2>
						</Col>
					</Row>
				<Row>
					<Col xs='12'>
						<h3 className="location-page-subtitle" > INDIA </h3>
					</Col>
				</Row>
				 <Row className='my-list'>
					    <CardList cities={indianCities} />
				</Row>
				<Row>
					<Col xs='12'>
						<h3 className="location-page-subtitle" > ABROAD </h3>
					</Col>
				</Row>
				 <Row className='my-list'>
					    <CardList cities={abroadCities} />
				</Row>
				 
			</Container>
			</div>
		);
	}

	
}

export default Locations;
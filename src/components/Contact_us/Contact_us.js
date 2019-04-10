import React,{Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Contact_us.css';
import GoogleMap from './map.js';

class HowItWorks extends Component {

 componentDidMount() {
	window.scrollTo(0,0);
    const orig = document.body.className;
    console.log(orig);  //Just in-case to check if your code is working or not
    document.body.className = orig + (orig ? ' ' : '') + 'my-bg-image4'; //Here gray-by is the bg color which I have set
}
componentWillUnmount() {
    document.body.className = null;
}

 render(){

 	return (
 				<div className='contact-us' >
		<Container className="my-cont" >
			<Row>
				<Col>
					<h1  >
						CONTACT US
					</h1>
				</Col>
			</Row>
			<Row className='contact-us-row'>
				<Col lg="7" className="my-map-col" >
					 

					 		<GoogleMap className="my-map" center= {{
										      lat:17.4175,
										      lng: 78.3462
										    }}
   								 zoom= {12}
   								  text={'The Luxury Garage'}
   								   />
   					
				</Col>
				<Col lg="5" sm="auto" className='contact-us-cardText'>
					 <h2>GLOBAL HQ : <br/>HYDERABAD , INDIA</h2>
					<p>12th Floor, Tower 2.1,<br/> 
						TSI Waverock IT/ITES SEZ, Nanakramguda,<br/> 
						Gachibowli,<br/>
						 Hyderabad, Telangana – 500 008 </p>
				</Col>
			</Row>
			<Row id="row2" className='contact-us-row'>
				
				<Col lg="5" sm="auto" className='contact-us-cardText'>
					 <h2>EUROPE HQ :<br/> VIENNA , AUSTRIA</h2>
					<p>9th Floor, T Center St. Marx, <br/>
						Rennweg 97-99,<br/>1030 Wien </p>
				</Col>
				<Col lg="7" className="my-map-col" >
					 

					 		<GoogleMap className="my-map" center= {{
										      lat: 48.1866915,
										      lng: 16.4011113
										    }}
   								 zoom= {12}
   								  text={'The Luxury Garage'}
   								   />
   					
				</Col>
			</Row>
			<Row className='contact-us-row'>
				<Col lg="7" className="my-map-col" >
					

					 		<GoogleMap className="my-map" center= {{
										      lat: 1.2780438,
										      lng: 103.8528198
										    }}
   								 zoom= {12}
   								  text={'The Luxury Garage'}
   								   />
   					
				</Col>
				<Col lg="5" sm="12"  className='contact-us-cardText'>
					 <h2>ASIA PACIFIC HQ :<br/> SINGAPORE, SINGAPORE</h2>
					<p>42nd floor,Marina Bay <br/>Financial Tower 3,<br/>Marina Boulevard <br/>Singapore 018982</p>
				</Col>
			</Row>
			<Row id="row4" className='contact-us-row'>
				
				<Col lg="5" sm="auto" className='contact-us-cardText'>
					 <h2>NORTH AMERICA HQ :<br/> NEW YORK , USA</h2>
					<p>75th Floor,<br/> One World Trade Center, 
						<br/>285 Fulton St, New York, <br/> NY 10007, USA </p>
				</Col>
				<Col lg="7" className="my-map-col" >
					 

					 		<GoogleMap className="my-map" center= {{
										      lat: 40.7129987,
										      lng: -74.0153496
										    }}
   								 zoom= {12}
   								  text={'The Luxury Garage'}
   								   />
   					
				</Col>
			</Row>
			
		</Container>
	</div>

 		);
 }

}

	
	

export default HowItWorks;
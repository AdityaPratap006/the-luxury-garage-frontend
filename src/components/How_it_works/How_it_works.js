import React,{Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './How_it_work.css';
import book from './img/2020_bmw_7-series_1_1600x1200.jpg';
import pay from './img/payment.jpg';
import deliver from './img/delv.jpg';
import backgroundImage from './bmw-i8-roadster-2018-488468.jpg';



 /*const mainBg = {
  background: backgroundImage,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}*/

class HowItWorks extends Component {


componentDidMount() {
	window.scrollTo(0,0);
    const orig = document.body.className;
    console.log(orig);  //Just in-case to check if your code is working or not
    document.body.className = orig + (orig ? ' ' : '') + 'my-bg-image2'; //Here gray-by is the bg color which I have set
}
componentWillUnmount() {
    document.body.className = null;
}

 
 


 render(){

 	return (
 				<div className='how-it-works' >
		<Container className="my-cont" >
			<Row>
				<Col>
					<h1  >
						HOW IT WORKS
					</h1>
				</Col>
			</Row>
			<Row className='How_it_works-row'>
				<Col lg="5" className='How_it_works-myImg' >
					 <img className='How_it_works-img' src ={book}/>
				</Col>
				<Col lg="7" sm="auto" className='How_it_works-cardText'>
					 <h2>1. CHOOSE YOUR CAR</h2>
					<p>
						<ol>
							<li>Browse through our never ending list of luxury cars and choose your dream car.</li> 
							<li>Select the delivery date of your car</li>
							<li>Choose from our car subscription plans</li>
							<li>Choose delivery location</li>
						</ol>
					</p>
				</Col>
			</Row>
			<Row id="row2" className='How_it_works-row'>
				
				<Col lg="7" sm="auto" className='How_it_works-cardText'>
					 <h2>2. MAKE PAYMENT </h2>
					<p>
						<ol>
							<li>Our booking engine will tell you if the selected car 
							is available at that location in the given period</li> 
							<li>If the car is available, you'll be taken to the payment portal</li>
							<li>Use your credit points (100000 already provided to you :) ) to make the purchase</li>
							<li>You will recieve a booking confirmation</li>
						</ol>
					</p>
				</Col>
				<Col lg="5" className='How_it_works-myImg' >
					 <img id="img2" className='How_it_works-img' src ={pay}/>
				</Col>
			</Row>
			<Row className='How_it_works-row'>
				<Col lg="5" className='How_it_works-myImg'>
					 <img className='How_it_works-img' src ={deliver}/>
				</Col>
				<Col lg="7" sm="12"  className='How_it_works-cardText'>
					 <h2>3. GET YOUR CAR DELIVERED</h2>
					<p>
						<ol>
							<li>Your car will be waiting for you at our local dealership in that location
							 on the choosen delivery date.</li> 
							<li>Just come and collect your car.</li>
							<li>The car keys will'be handed over to you after a quick small celebration :)</li>
							
						</ol>
					</p>
				</Col>
			</Row>
			<Row> 
				<hr/> 
			</Row>
			<Row id='bookRow'>
				<h2 className='book-row-title center'> Take the keys of your dream car! </h2>
				<div className="my-btn-div">
					<Button onClick={() => {this.props.changeRoute('fleet')}} color="primary" className='center-btn center'>BOOK NOW!</Button>
				</div>
			</Row>
		</Container>
	</div>

 		);
 }

}

	
	

export default HowItWorks;
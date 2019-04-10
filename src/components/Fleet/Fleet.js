import React, {Component} from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Fleet.css';
import coupe from './img/coupe.jpg';
import sedan from './img/sedan2.jpg';
import suv from './img/suv2.jpg';
import conv from './img/conv.jpg';
import limo from './img/limo.jpg';
import gt from './img/gt.jpg';




class Fleet extends Component {

	constructor( props){

		super(props );
		this.state={
			currentSection: this.props.myState,
		}
	}

	

	componentDidMount() {
	 	window.scrollTo(0,0);

	    const orig = document.body.className;
	   
	    console.log(orig);  //Just in-case to check if your code is working or not
	    document.body.className = orig + (orig ? ' ' : '') + 'my-bg-image6'; //Here gray-by is the bg color which I have set
	}
	
	componentWillUnmount() {
	    document.body.className = null;
	}

	render(){

		const mainFleetPage = (
			
				<Container className=' center'>
					<Row>
						<Col xs='12'>
							<h2 className="fleet-title">OUR FLEET</h2>
						</Col>
					</Row>
					<Row>
						<Col xs='12'>
							<h2 className="fleet-sub-title">CHOOSE FROM FOLLOWING CATEGORIES</h2>
						</Col>
					</Row>
					<Row className='my-fleet-list'>
					    <Col xs='12' lg='6'>
					    	<div className=' dib br3 pa3  ma2 grow bw2 shadow-5 pointer fleet-card '>
								<img  alt='Car type' src={coupe} className='fleet-card-img'/>
								<div className='tc '>
									<h3 className='fleet-name'>COUP&Egrave; / SPORTS</h3>
									 <Button onClick={() => this.props.changeRoute('coupe')}  className='fleet-card-btn'>SELECT</Button>
								</div>
							</div>
					    </Col>
					    <Col xs='12' lg='6'>
					    	<div className=' dib br3 pa3  ma2 grow bw2 shadow-5 pointer fleet-card '>
								<img  alt='Car type' src={sedan} className='fleet-card-img'/>
								<div className='tc '>
									<h3 className='fleet-name'>SEDAN</h3>
									 <Button onClick={() => this.props.changeRoute('sedan')}  className='fleet-card-btn'>SELECT</Button>
								</div>
							</div>
					    </Col>
					    <Col xs='12' lg='6'>
					    	<div className=' dib br3 pa3  ma2 grow bw2 shadow-5 pointer fleet-card '>
								<img  alt='Car type' src={suv} className='fleet-card-img'/>
								<div className='tc '>
									<h3 className='fleet-name'>SUV</h3>
									 <Button onClick={() => this.props.changeRoute('suv')}  className='fleet-card-btn'>SELECT</Button> 
								</div>
							</div>
					    </Col>
					    <Col xs='12' lg='6'>
					    	<div className=' dib br3 pa3  ma2 grow bw2 shadow-5 pointer fleet-card '>
								<img  alt='Car type' src={gt} className='fleet-card-img'/>
								<div className='tc '>
									<h3 className='fleet-name'> GRAND TOURER</h3>
									 <Button onClick={() => this.props.changeRoute('grand tourer')}  className='fleet-card-btn'>SELECT</Button> 
								</div>
							</div>
					    </Col>
					    <Col xs='12' >
					    	<div className=' dib br3 pa3  ma2 grow bw2 shadow-5 pointer fleet-card '>
								<img  alt='Car type' src={conv} className='fleet-card-img'/>
								<div className='tc '>
									<h3 className='fleet-name'>CONVERTIBLE</h3>
									 <Button onClick={() => this.props.changeRoute('convertible')}  className='fleet-card-btn'>SELECT</Button> 
								</div>
							</div>
					    </Col>
					    
				    </Row>
				</Container>
			
	);

		let content = null; 

		if(this.state.currentSection === 'main'){
			content = mainFleetPage;
		}
		/*else if(this.state.currentSection === 'coupes'){
			content = <Coupe goBackToFleet={this.goToMain}/>;
		}*/

		return(
				<div className=" fleet-page">
				{content}
				</div>
			)
	}
}

export default Fleet;
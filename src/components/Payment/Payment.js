import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './Payment.css';
import ModalExample from './Modal.js';
class Payment extends Component{
	constructor(props){
		super(props);
		this.state = {
			bookingSuccess:false
		}
	}

	componentDidMount() {
	 	window.scrollTo(0,0);

	    const orig = document.body.className;
	   
	    //console.log(orig);  //Just in-case to check if your code is working or not
	    document.body.className = orig + (orig ? ' ' : '') + 'my-bg-image9'; //Here gray-by is the bg color which I have set
	}
	
	componentWillUnmount() {
	    document.body.className = null;
	}

	setSuccessful = () => {
		this.setState({bookingSuccess:true});
	}

	render(){

		
		console.log('payment:',this.props.data);


		const content = (this.state.bookingSuccess)
						?(<div className="payment-page">
						<Container>
							<Row>
								<Col xs="12">
									<h1 className="payPage-title">CONGRATS!</h1>
								</Col>
							</Row>
							<Row>
								<Col xs='12'>
									<h1 className="payPage-title">BOOKING SUCCESSFUL!</h1>
								</Col>
								
								
							</Row>
							<Row>
								<Col xs='12'>
									<h1 className="payPage-title">ENJOY YOUR RIDE {this.props.user.fname.toUpperCase()}! </h1>
								</Col>
								
								
							</Row>
							<Row>
		 						<a href="#0" onClick={() => this.props.changeRoute('account')} className="car-back-btn center f5 no-underline white bg-animate hover-bg-white hover-black inline-flex items-center pa3 ba border-box mr4">
		                              
		                            <span className="pl1">BACK TO YOUR ACCOUNT</span>
		                          </a>
		 					</Row>
						</Container>
					</div>)
						:(<div className="payment-page">
						<Container>
							<Row>
								<Col xs="12">
									<h1 className="payPage-title">MAKE PAYMENT</h1>
								</Col>
							</Row>
							<Row>
								<Col xs='12'>
									<div   className=' dib br3 pa3  ma2 bw2 shadow-5 pointer payCard '>
									  <h3 className='payCard-title'>ORDER SUMMARY</h3>
							           
							          <h3 className='payCard-text'>SELECTED CAR  :  {this.props.car.make.toUpperCase()} {this.props.car.model.toUpperCase()}</h3>
							          <h3 className='payCard-text'>RENTING RATE(INR) :  {this.props.car.price} per day</h3>
							          <h3 className='payCard-text'>RENTING RATE(USD) :  {Math.round(this.props.car.price/70)} per day</h3>
							          <h3 className='payCard-text'>FROM  : {this.props.data.startDate.startDay}  {this.props.data.startDate.startMonthName} {this.props.data.startDate.startYear}</h3>
							          <h3 className='payCard-text'>TO  : {this.props.data.endDate.endDay} {this.props.data.endDate.endMonthName} {this.props.data.endDate.endYear}</h3>
							          <h3 className='payCard-text'>LOCATION : {this.props.data.location}</h3>
							          <h3 className='payCard-text'>RENTAL PRICE :  {this.props.data.totalCost}</h3>
							          <h3 className='payCard-text'>TAXES :  {0.18*this.props.data.totalCost}</h3>
							          <h3 className='payCard-text'>TOTAL AMOUNT (INR) : {1.18*this.props.data.totalCost}</h3>
							          <h3 className='payCard-text'>TOTAL AMOUNT (USD) : {Math.round((1.18/70)*this.props.data.totalCost)}</h3>
							          <ModalExample
							          	refreshCredits={this.props.refreshCredits} 
							          	setSuccessful={this.setSuccessful}
							          	locationId={this.props.locationId} 
							          	user={this.props.user} 
							          	car={this.props.car}
							          	 data={this.props.data} 
							          	 credits={0.001*1.18*this.props.data.totalCost} 
							          	 buttonLabel={'MAKE PAYMENT'}
							          	 changeRoute={this.props.changeRoute}
							          	 />
							           
							        </div>
								</Col>
								
								
							</Row>
							<Row>
		 						<a href="#0" onClick={() => this.props.changeRoute('book')} className="car-back-btn center f5 no-underline white bg-animate hover-bg-white hover-black inline-flex items-center pa3 ba border-box mr4">
		                              
		                            <span className="pl1">BACK</span>
		                          </a>
		 					</Row>
						</Container>
					</div>)
		
		return (

				content

			);
	}


};

export default Payment;
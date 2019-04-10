import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Invoice.css';

class Invoice extends Component{

	constructor(props){
		super(props);
		
	}

	componentDidMount() {
	 	window.scrollTo(0,0);
	 	
	}

	

	render(){

		return(
				<div className="invoice-page center">
					<Container>
						<Row>
							<Col xs='12' className='invoice-page-title'>
								INVOICE
							</Col>
						</Row>
						<Row>
							<Col xs="12" >
								<img  className="invoice-page-logo"/>
							</Col>
						</Row>
						<Row>
							<Col xs="4"  className="invoice-page-key">
								BOOKING ID
							</Col>
							<Col xs="1" className="invoice-page-colon">:</Col>
							<Col xs="7"  className="invoice-page-value">
								{this.props.invoiceData.bookingid}
							</Col>
						</Row>
						<Row>
							<Col xs="4"  className="invoice-page-key">
								BOOKING STATUS
							</Col>
							<Col xs="1" className="invoice-page-colon">:</Col>
							<Col xs="7"  className="invoice-page-value" style={{color:'green'}}>
								BOOKING SUCCESSFUL!
							</Col>
						</Row>
						<Row>
							<Col xs="4"  className="invoice-page-key">
								BOOKED BY
							</Col>
							<Col xs="1" className="invoice-page-colon">:</Col>
							<Col xs="7"  className="invoice-page-value">
								{this.props.user.fname.toUpperCase()} {this.props.user.lname.toUpperCase()}
							</Col>
						</Row>
						<Row>
							<Col xs="4"  className="invoice-page-key">
								BOOKING EMAIL
							</Col>
							<Col xs="1" className="invoice-page-colon">:</Col>
							<Col xs="7"  className="invoice-page-value">
								{this.props.user.email}
							</Col>
						</Row>
						<Row>
							<Col xs="4"  className="invoice-page-key">
								BILLING DATE AND TIME
							</Col>
							<Col xs="1" className="invoice-page-colon">:</Col>
							<Col xs="7"  className="invoice-page-value">
								{this.props.invoiceData.bookingtime.slice(0,10)} {this.props.invoiceData.bookingtime.slice(10)}  UTC
							</Col>
						</Row>
						<Row>
							<Col xs="4"  className="invoice-page-key">
								BOOKING LOCATION
							</Col>
							<Col xs="1" className="invoice-page-colon">:</Col>
							<Col xs="7"  className="invoice-page-value">
								{this.props.invoiceData.city.toUpperCase()}, {this.props.invoiceData.country.toUpperCase()} 
							</Col>
						</Row>
						
						<Row>
							<Col xs="4"  className="invoice-page-key">
								 BOOKED CAR
							</Col>
							<Col xs="1" className="invoice-page-colon">:</Col>
							<Col xs="7"  className="invoice-page-value">
								{this.props.invoiceData.make.toUpperCase()} {this.props.invoiceData.model.toUpperCase()}
							</Col>
						</Row>
						<Row>
							<Col xs="4"  className="invoice-page-key">
								BOOKED FROM
							</Col>
							<Col xs="1" className="invoice-page-colon">:</Col>
							<Col xs="7"  className="invoice-page-value">
								{this.props.invoiceData.fromdate.slice(0,10)}
							</Col>
						</Row>
						<Row>
							<Col xs="4"  className="invoice-page-key">
								BOOKED TO
							</Col>
							<Col xs="1" className="invoice-page-colon">:</Col>
							<Col xs="7"  className="invoice-page-value">
								{this.props.invoiceData.todate.slice(0,10)}
							</Col>
						</Row>
						<Row>
							<Col xs="4"  className="invoice-page-key">
								 TOTAL AMOUNT(INCL. TAXES)
							</Col>
							<Col xs="1" className="invoice-page-colon">:</Col>
							<Col xs="7"  className="invoice-page-value">
								{this.props.invoiceData.totalcost}
							</Col>
						</Row>
						<Row>
							<Col xs="4"  className="invoice-page-key">
								 TOTAL CREDITS
							</Col>
							<Col xs="1" className="invoice-page-colon">:</Col>
							<Col xs="7"  className="invoice-page-value">
								{Math.round(this.props.invoiceData.totalcost/1000)}
							</Col>
						</Row>
						<Row>
	 						<a href="#0" onClick={()=>this.props.changeRoute('account')} className="car-back-btn center f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
	                              
	                            <span className="pl1">BACK</span>
	                          </a>
 						</Row>
					</Container>
				</div>
			);


	}

};

export default Invoice;
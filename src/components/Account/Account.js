import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import InvoiceList from '../Invoice/invoiceList.js';

import './Account.css';

class  Account extends Component{

	constructor(props){
		super(props);
		this.state = {
			invoiceList:[],
			visible:false,
			currentInvoice:""
		}
	}

	componentDidMount() {
		window.scrollTo(0,0);
	    const orig = document.body.className;
	    console.log(orig);  //Just in-case to check if your code is working or not
	    document.body.className = orig + (orig ? ' ' : '') + 'my-bg-image8'; //Here gray-by is the bg color which I have set
	
	 this.loadBookings();
		
	   
	}
	componentWillUnmount() {
	    document.body.className = null;
	}

	loadBookings = () => {
		console.log('function hits')
		fetch(`https://calm-taiga-87220.herokuapp.com/bookinghistory/${this.props.user.id}`,{
			method:'get',
			headers:{'Content-Type':'application/json'}
		})
		.then(response => response.json())
		.then(list => this.setState({invoiceList: list,visible:false}))
	}
	
	


	render(){

		/*const registerLink = (window.innerWidth <= 768 )?(<div className="lh-copy mt3">
								      <a href="#register-form" className="register-link f6 link dim white db">New here? Register</a>
								    </div>):'';*/
		const myListOfBookings = (this.state.invoiceList.length > 0) 
								? (<InvoiceList loadInvoice={this.props.loadInvoice} invoiceList={this.state.invoiceList}/>)
								:null;
		return(
				<div className ='my-account'>
					<Container  >
						<Row>
							<Col  xs='12' >
								<h1 className="center my-greeting">HELLO  {this.props.user.fname.toUpperCase()}!</h1>
							</Col>
							
						</Row>
						<Row >
							<Col xs="12" className="">
								<div className=" center ">
									<Button onClick={() => this.props.onLogOut('home',false)} color="primary" className='my-logout-btn center'>LOG OUT</Button>
								</div>
							</Col>
						</Row>
						<Row className='account-row'>
							 <Col xs="12" md="6" >
								<div className="my-orders-container">
									<h2 className="center my-order-title">YOUR CREDIT POINTS </h2>
									<div className="acc-details">
										<span className='my-account-credits'>{this.props.user.credits}</span>
										<h3 className="credits-rem">REMAINING</h3>
									</div>
									<div className=" center ">
										<Button onClick={this.props.renew}  color="primary" className='my-logout-btn center'>RENEW</Button>
									</div>
								</div>
							</Col>
							<Col xs="12" md="6" >
								<div className="my-orders-container">
									<h2 className="center my-order-title">YOUR BOOKINGS </h2>
									<div className="order-box">
										{(this.state.invoiceList.length>0)?myListOfBookings:<h4 className='booking-text center'  >Your bookings will appear here</h4>}
									 </div>
								</div>
							</Col>
						</Row>
					</Container>
					
				</div>
			);

	}
}

export default Account;
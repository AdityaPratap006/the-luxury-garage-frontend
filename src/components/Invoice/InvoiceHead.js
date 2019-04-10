import React,{Component} from 'react';
import { Button } from 'reactstrap';
import './InvoiceHead.css';

class InvoiceHead extends Component{
	constructor(props){
		super(props);

	}

	render() {
		console.log(this.props.invoicedata.bookingtime);

		return (

				<div  className=' dib br3 pa3  ma2 grow bw2 shadow-5 pointer invoiceHead '>
		           
		          <div className='tc '>
		            <h3 className='invoiceHead-bookingid'>Bookig ID: {this.props.invoicedata.bookingid}</h3>
		            <h3 className='invoiceHead-car-name'>Car: {this.props.invoicedata.make.toUpperCase()} {this.props.invoicedata.model.toUpperCase()}</h3>
		            <h3 className='invoiceHead-date'>Booking Date: {this.props.invoicedata.bookingtime.slice(0,10)}   </h3>
		          	<Button  
		          	onClick={() => this.props.loadInvoice(this.props.invoicedata)} 
		          	className='f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-gray invoiceheadview'  >
		          		VIEW
		          	</Button>
		          </div>
		        </div>
			);
	}

}

export default InvoiceHead;


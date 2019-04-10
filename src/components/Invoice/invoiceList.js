import React,{Component} from 'react';
import InvoiceHead from './InvoiceHead.js';
 
class InvoiceList extends Component{

	constructor(props){
		super(props);
	}

	render(){

		const listOfInvoices = this.props.invoiceList.map((invoice,i) => {

			return (
					<InvoiceHead loadInvoice= {this.props.loadInvoice}  key={invoice.bookingid} invoicedata = {invoice}/>
				);
		})	;

		return  <div>{listOfInvoices}</div>
	}
}

export default InvoiceList;


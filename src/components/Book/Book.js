import React, {Component} from 'react';
import { Container, Row, Col,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Datepicker from './DatePicker.js';
import DropdownSelect from './Select.js';
import Plans from './Plans.js';
import './Book.css';
 
class Book extends Component {

	constructor(props){
		super(props);
		this.state = {
			startDate: new Date(),
			modal:false,
			modal2:false,
			plan:'',
			endDate: new Date(),
			location:'',
			isAvailable:false,
			rate:0,
			totalCost: 0,
			reset:false
		}
	}


	getStartDate = (inputdate) => {  
		console.log('getStartDate working!');
		this.setState({startDate: inputdate});
		if(this.state.plan!=''){
			this.getPlan2(inputdate,this.state.plan);
		}
		
		console.log('StartDateFunction:',this.state.startDate);
		console.log('StartDateFunctionEnding:',this.state.endDate);
	};

	getPlan = (inputPlan) => {
		//console.log('getPlan working!');
 		this.setState({plan:inputPlan,reset:false});
 		let start= this.state.startDate;
 		let end=null;
 		 
		 const oneDay = 1000*60*60*24;

		if(inputPlan === '1 day'){
			 end = new Date((start.getFullYear()),start.getMonth(),start.getDate()+1,start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '7 days'){
			 end = new Date((start.getFullYear()),start.getMonth(),start.getDate()+7,start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '15 days'){
			 end = new Date((start.getFullYear()),start.getMonth(),start.getDate()+15,start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '1 month'){
			 end = new Date((start.getFullYear()),start.getMonth()+1,start.getDate(),start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '3 months'){
			 end = new Date((start.getFullYear()),start.getMonth()+3,start.getDate(),start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '6 months'){
			 end = new Date((start.getFullYear()),start.getMonth()+6,start.getDate(),start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '1 year'){
			  end = new Date((start.getFullYear()+1),start.getMonth(),start.getDate(),start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '2 years'){
			end = new Date((start.getFullYear()+2),start.getMonth(),start.getDate(),start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '3 years'){
			 end = new Date((start.getFullYear()+3),start.getMonth(),start.getDate(),start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '5 years'){
			 end = new Date((start.getFullYear()+5),start.getMonth(),start.getDate(),start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		//console.log('startEnd:',start);
		//this.setState({endDate:new Date(start)});

		let diff = (end.getTime() - start.getTime())/oneDay;
		 
		this.setState({ gap:diff,totalCost: Math.round(this.props.car.price * diff)});
		
		//console.log('enddate is:',this.state.endDate);
	};


	getPlan2 = (startdate,inputPlan) => {
		//console.log('getPlan working!');
 		 
 		let start= startdate;
 		let end=null;
 		 
		 const oneDay = 1000*60*60*24;

		if(inputPlan === '1 day'){
			 end = new Date((start.getFullYear()),start.getMonth(),start.getDate()+1,start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '7 days'){
			 end = new Date((start.getFullYear()),start.getMonth(),start.getDate()+7,start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '15 days'){
			 end = new Date((start.getFullYear()),start.getMonth(),start.getDate()+15,start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '1 month'){
			 end = new Date((start.getFullYear()),start.getMonth()+1,start.getDate(),start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '3 months'){
			 end = new Date((start.getFullYear()),start.getMonth()+3,start.getDate(),start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '6 months'){
			 end = new Date((start.getFullYear()),start.getMonth()+6,start.getDate(),start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '1 year'){
			  end = new Date((start.getFullYear()+1),start.getMonth(),start.getDate(),start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '2 years'){
			end = new Date((start.getFullYear()+2),start.getMonth(),start.getDate(),start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '3 years'){
			 end = new Date((start.getFullYear()+3),start.getMonth(),start.getDate(),start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		else if(inputPlan === '5 years'){
			 end = new Date((start.getFullYear()+5),start.getMonth(),start.getDate(),start.getHours(),start.getMinutes(),start.getSeconds());
			 this.setState({endDate: end});
		}
		//console.log('startEnd:',start);
		//this.setState({endDate:new Date(start)});

		let diff = (end.getTime() - start.getTime())/oneDay;
		 
		this.setState({ gap:diff,totalCost: Math.round(this.props.car.price * diff)});
		
		//console.log('enddate is:',this.state.endDate);
	};
	 

	getLocation=(inputLoc )=>{
		this.setState({location:inputLoc,isReset:false});
	};

	checkAvailability = (myBookingData) => {
      if(!this.state.plan || !this.state.location){
				this.setState({modal:true,modal2:false});
			}
			else{
				this.setState({modal:false,modal2:false});
				
			}

    fetch("https://calm-taiga-87220.herokuapp.com/book",{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        carid:myBookingData.carid,
        location:myBookingData.location.toLowerCase(),
        userid:myBookingData.userid,
        fromdate:`${myBookingData.startDate.startYear}-${myBookingData.startDate.startMonth + 1}-${myBookingData.startDate.startDay+1}`,
        todate:`${myBookingData.endDate.endYear}-${myBookingData.endDate.endMonth + 1}-${myBookingData.endDate.endDay+1}`,
        totalcost:myBookingData.totalCost
      })
    })
    .then(response =>  response.json())
    .then(msg => {
      console.log('Fetching data',msg);
      
     if(msg === 'NOT AVAILABLE!'){
      		this.setState({isAvailable:false});
      		if(this.state){
				this.setState({modal2:true,modal:false});
			}
			else{
				this.setState({modal2:false,modal:false});
				
			}
      }
      else{
      	   console.log()
      		this.setState({isAvailable:true});
	      	this.props.getBookingData(myBookingData,msg);
	      	
      }
    })
    .catch(console.log)
    
  };

	

	toggle = (prevState) => {
		this.setState( {
			modal:!prevState
		});
	};

	toggle2 = (prevState) => {


		this.setState( {
			modal2:!prevState,
			

		});
	};

	componentDidMount() {
	 	window.scrollTo(0,0);

	    const orig = document.body.className;
	    //console.log(this.props.car? this.props.car:'car not found');
	    //console.log(orig);  //Just in-case to check if your code is working or not
	    document.body.className = orig + (orig ? ' ' : '') + 'my-bg-image9'; //Here gray-by is the bg color which I have set
	};
	
	componentWillUnmount() {
	    document.body.className = null;
	};

	
	


	render(){

		console.log(this.state);
const monthNames = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
		/*const startDay = this.props.startDate.getDate();
		const startMonth = monthNames[this.props.startDate.getMonth()];
		const startYear = this.props.startDate.getFullYear();
		const endDay = this.props.endDate.getDate();
		const endMonth = monthNames[this.props.endDate.getMonth()];
		const endYear = this.props.endDate.getFullYear();*/
		

		 const myBookingData = {

		 	userid:this.props.user.id,
		 	carid:this.props.car.id,
		 	startDate:{
		 		startDay: this.state.startDate.getDate(),
				startMonthName : monthNames[this.state.startDate.getMonth()],
				startYear : this.state.startDate.getFullYear(),
				startMonth: this.state.startDate.getMonth()
		 	},
		 	plan:this.state.plan,
			endDate: {
			 	 endDay : this.state.endDate.getDate(),
				 endMonthName : monthNames[this.state.endDate.getMonth()],
				 endYear : this.state.endDate.getFullYear(),
				 endMonth: this.state.endDate.getMonth()
			 },
			location: this.state.location,
		 	totalCost: this.state.totalCost,
		 	 
		 }


		return(

					<div className="booking-page">
						<Container>
							<Row>
								<Col xs="12">
									<h1 className="bookPage-title">BOOK YOUR CAR</h1>
								</Col>
							</Row>
							<Row>
								<Col xs='12' md='6'>
									<div   className=' dib br3 pa3  ma2 bw2 shadow-5 pointer bookCard '>
									  <h3 className='bookCard-title'>SELECTED CAR</h3>
							          <img  alt='Car' src={this.props.car.img} className='bookCard-img'/>
							          <h3 className='bookCard-title'>{this.props.car.make.toUpperCase()} {this.props.car.model.toUpperCase()}</h3>
							          <Button onClick={() => this.props.changeRoute('fleet')}  className='bookCard-btn' >CHANGE</Button>
							           
							        </div>
								</Col>
								<Col xs='12' md='6'>
									<Row>
								 		<div   className=' dib br3 pa3  ma2 bw2 shadow-5 center pointer bookCard '>
										  <h3 className='bookCard-title'>CHOOSE DELIVERY DATE </h3>
								           <Datepicker isReset={this.state.reset} getStartDate={this.getStartDate}/>
								          
								           
								        </div>
								 	</Row>
								 	<Row>
								 		<div   className=' dib br3 pa3  ma2 bw2 shadow-5 center pointer bookCard '>
										  <h3 className='bookCard-title'>CHOOSE A PLAN</h3>
								            <Plans isReset={this.state.reset} getPlan={this.getPlan}/>
								        </div>
								 	</Row>
								 	
								 	<Row>
								 		<div   className=' dib br3 pa3  ma2 bw2 shadow-5 center pointer bookCard '>
										  <h3 className='bookCard-title'>SELECT YOUR LOCATION </h3>
								           <DropdownSelect isReset={this.state.reset} getLocation={this.getLocation}/>
								          
								           
								        </div>
								 	</Row>
								 	<Row>
								 		<div 
								 		onClick={() => this.checkAvailability (myBookingData) }  
										className=' dib br3 pa3  ma2 bw2 shadow-5 pointer center pay-btn '>
												  CHECK AVAILABILITY
								          
								          
								           
								        </div>
								 	</Row>
									
								</Col>
								
							</Row>

						</Container>
						<Modal  isOpen={this.state.modal} toggle={() => this.toggle(this.state.modal)} className={this.props.className}>
				          <ModalHeader toggle={() => this.toggle(this.state.modal)}>Hey {this.props.user.fname.charAt(0).toUpperCase()+this.props.user.fname.slice(1)}!</ModalHeader>
				          <ModalBody>
				            <h2>Please choose a plan and a location, also select your delivery date carefully!</h2> 
				          </ModalBody>
				          <ModalFooter>
				            <Button color="primary" onClick={() => this.toggle(this.state.modal)}>OK</Button> 
				             
				          </ModalFooter>
				        </Modal>
				        <Modal isOpen={this.state.modal2} toggle={() => this.toggle2(this.state.modal2)} className={this.props.className}>
				          <ModalHeader toggle={() => this.toggle2(this.state.modal2)}>OOPS, WE ARE SORRY!</ModalHeader>
				          <ModalBody>
				            <h4>Dear {this.props.user.fname.charAt(0).toUpperCase()+this.props.user.fname.slice(1)}, the car which 
				            	you are trying to book has already been booked in the given period at that location.
				            	Please choose a different delivery date, plan or location. Or you can look for other luxury cars!
				            	<br/>We are sorry for the inconvenience.
				            </h4> 
				          </ModalBody>
				          <ModalFooter>
				            <Button color="primary" onClick={() => this.toggle2(this.state.modal2)}>OK</Button> 
				             
				          </ModalFooter>
				        </Modal>
					</div>
			)
	}


}

export default Book;
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      success:false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
     
    }));
  };

  
 makePayment = () => {

    
    fetch('https://calm-taiga-87220.herokuapp.com/paid',{
      method:'put',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        userid:this.props.user.id,
        carid:this.props.car.id,
        fromdate:`${this.props.data.startDate.startYear}-${this.props.data.startDate.startMonth+1}-${this.props.data.startDate.startDay}`,
        todate:`${this.props.data.endDate.endYear}-${this.props.data.endDate.endMonth+1}-${this.props.data.endDate.endDay}`,
        location:this.props.data.location,
        locationId:this.props.locationId,
        totalcost:Math.round(1.18*this.props.data.totalCost),
        bookingtime:new Date()

      })
    })
    .then(response => {
       
      response.json()})
    .then(bookingid => {

          this.props.refreshCredits(Math.round(1.18*this.props.data.totalCost/1000));
         this.props.setSuccessful();
       
      
      
    })
    .catch(console.log)
       
        
    
 }

 
 

   

  render() {


    return (

        <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Hi {this.props.user.fname.charAt(0).toUpperCase()+this.props.user.fname.slice(1)}!</ModalHeader>
          <ModalBody>
            <p>
              As this is just a project and not a commercial application, we don't accept real payments.
              You can purchase the cars using the credit points provided to you.
            </p>
            <h5>1 CREDIT = Rs. 1000 or $ 14.45</h5>
            <h4>Rs. {(Math.round(1.18*this.props.data.totalCost*100)/100)}={Math.round(this.props.credits)} CREDITS WILL BE DEDUCTED FOR THIS BOOKING</h4>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.makePayment}>PAY</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>CANCEL</Button>
          </ModalFooter>
        </Modal>
      </div>

      
    );
  }
}

export default ModalExample;
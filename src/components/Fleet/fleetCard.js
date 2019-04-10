import React,{Component} from 'react';
import { Button } from 'reactstrap';
import './fleetCard.css';
class CarCard extends  Component {
  

 constructor( props){
  super(props);
 }

  render() {

    return (
       
         <div  className=' dib br3 pa3  ma2 grow bw2 shadow-5 pointer fleetCard '>
          <img  alt='Car' src= { this.props.coverImg } className='fleetCard-img'/>
          <div className='tc '>
            <h3 className='car-name'>{this.props.carMake} {this.props.carModel}</h3>
             <Button onClick={() => this.props.goToFunction(this.props.type,this.props.carMake,this.props.carModel)}  className='fleeCard-btn' >VIEW</Button>
          </div>
        </div>
       
    );
  }
}

export default CarCard;
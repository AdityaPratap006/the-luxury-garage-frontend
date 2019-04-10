import React,{Component} from 'react';
import {  Container,Row,Col,Table } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";

import './carInfo.css';


class CarInfo extends Component{

	constructor(props){
		super(props);
	}

componentDidMount() {
	
 	window.scrollTo(0,0);	
}
 render(){

 	console.log('carinfoloading!',this.props.carDetails);

 	 const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
     
    };

    const myCar = {
    	id:this.props.carDetails.carid,
    	model: this.props.carDetails.model,
    	make: this.props.carDetails.make,
    	img:this.props.img,
    	price:this.props.carDetails.rate

    }

 	return(

 			<div className="car-info-page">
 				<Container>
 					
 					 
 					<Row>
 						<Col xs='12' > 
 							<div className="car-title center"> {this.props.carDetails.make.toUpperCase()} {this.props.carDetails.model.toUpperCase()}  </div>
 						</Col>

 					</Row>
 					 

 					<Row>
 						<Col xs='12' >
 								<img src={this.props.img} className='car-cover-img'/>
 						</Col>
 						
 						<Col xs='12'  >
 							<div className='car-description'>
 								<h3 className="center">DETAILS</h3>
 								

 								<Table>
							        
							        <tbody>
							           <tr>
							            <th scope="row">1</th>
							            <td>Market Price:</td>
							            <td>Rs. {(this.props.carDetails.price >= 10000000)?(`${this.props.carDetails.price/10000000} crore`):(`${this.props.carDetails.price/100000} lakh`)} </td>
							             
							          </tr>
							          <tr>
							            <th scope="row">2</th>
							            <td>Renting Rate:</td>
							            <td>Rs. {this.props.carDetails.rate} per day</td>
							             
							          </tr>
							          <tr>
							            <th scope="row">3</th>
							            <td>Engine:</td>
							            <td>{this.props.carDetails.engine}</td>
							             
							          </tr>
							          <tr>
							            <th scope="row">4</th>
							            <td>Power:</td>
							            <td>{this.props.carDetails.power}</td>
							             
							          </tr>
							          <tr>
							            <th scope="row">5</th>
							            <td>Transmission:</td>
							            <td>{this.props.carDetails.transmission}</td>
							             
							          </tr>
							          <tr>
							            <th scope="row">6</th>
							            <td>0 to 100 km/h:</td>
							            <td>{this.props.carDetails.zeroto100}</td>
							             
							          </tr>
							          <tr>
							            <th scope="row">7</th>
							            <td>Top-speed:</td>
							            <td>{this.props.carDetails.topspeed}</td>
							             
							          </tr>
							        </tbody>
							      </Table>
 							</div>
 						</Col>
 						
 						
 					</Row>
 					<Row>
 					<Col xs="12">
 						<h3 className="center gallery-title">GALLERY</h3>
 						</Col>
 					</Row>
 					<Row>
 					 <Col xs='12'>

 					 
          			   <Slider {...settings} className='car-info-swiper pointer'>
					        <div  ><img className='car-gallery-img' src={this.props.gallery+'/1.jpg'}  /></div>
					        <div  ><img className='car-gallery-img'  src={this.props.gallery+'/2.jpg'}  /></div>
					        <div   ><img className='car-gallery-img' src={this.props.gallery+'/3.jpg'} /></div>
					        <div    ><img className='car-gallery-img' src={this.props.gallery+'/4.jpg'}  /></div>
					        <div   ><img className='car-gallery-img' src={this.props.gallery+'/5.jpg'}  /></div>
					        <div  ><img className='car-gallery-img' src={this.props.gallery+'/6.jpg'}  /></div>
					      </Slider>
 					  
 						 
					   </Col>
 					</Row>
 					<Row>
 						<a href="#0" onClick={() => this.props.book(myCar)} className="car-back-btn center f3 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
                              
                            <span className="pl1">BOOK THIS CAR</span>
                          </a>
 					</Row>
 					
 					<Row>
 						<a href="#0" onClick={this.props.goBack} className="car-goback-btn center f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
                              
                            <span className="pl1">BACK</span>
                          </a>
 					</Row>
 				</Container>
 			</div>
 		);
 }

}


export default CarInfo;
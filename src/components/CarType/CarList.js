import React,{Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import CarCard from '../Fleet/fleetCard.js';
import './CarType.css';
 

class CarList extends Component {
	constructor(props){
		super(props);
		this.state={
			myCars:[]
		}
		 
	}

	componentWillMount() {
	    this.setState({
	      myCars:this.props.myCarList
	    });
	  }

	render(){
		

	    /**/const settings = {
		      dots: true,
		      infinite: true,
		      speed: 500,
		      slidesToShow: (window.innerWidth < 768)?1:3,
		      slidesToScroll: 1,
		     
		    };

	       const list = this.props.myCarList.map((car,i) => {
	    	return (
	    			 
	    			  
	    				<CarCard key={i} className="individual-card"
	    					type={car.type.toLowerCase()}
	    					coverImg={'https://res.cloudinary.com/nit-jamshedpur/image/upload/q_42/v1554872505/Cars/'+ this.props.myCarList[i].type + '/' + this.props.myCarList[i].make+  '/' + this.props.myCarList[i].model +'/0.jpg'} 
	    					carMake={car.make.toUpperCase()} 
	    					carModel={car.model.toUpperCase()} 
	    					goToFunction={this.props.goToCar} 
	    				/>
	    				 
	    			 
	    			 
	    		);
	    });

	    

	    console.log('CarListRendering:',list);

	    return (
	    		 <Slider {...settings} className='myCarlist-swiper'>
                       
	    					{list} 
                  </Slider>
	    	);


	}
}

export default CarList;
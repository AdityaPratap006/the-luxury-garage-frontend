import React,{Component} from 'react';
import {  Container,Row,Col } from 'reactstrap';
import './CarType.css';
import CarList from './CarList.js';

import CarInfo from '../Fleet/carInfo.js';
class CarType extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentType:this.props.currentType,
      currentPage:this.props.currentType,
      myCarList:[],
      currentCar:'',
      currentMake:'',
      currentModel:'',
      loading:true
      
    };

 }

 loadCarsOfType = (type) => {
   
    fetch('https://calm-taiga-87220.herokuapp.com/cars/'+type,{
      method:'get',
      headers:{'Content-Type':'application/json'},
    })
    .then(data => data.json())
    .then(carList => {
      console.log(carList);
      this.setState({myCarList:carList})
    })
    .catch(err => console.log(err))
  };

 componentDidMount() {
  this.loadCarsOfType(this.props.currentType);
    console.log(this.state)
    window.scrollTo(0,0);
      const orig = document.body.className;
      console.log(orig);  //Just in-case to check if your code is working or not
      document.body.className = orig + (orig ? ' ' : '') + 'my-bg-image7'; //Here gray-by is the bg color which I have set
      
  }
  componentWillUnmount() {
      document.body.className = null;
  }


  
  goBack = () => {
    this.setState({currentCar:'',currentPage:this.props.currentType,currentType:this.props.currentType,currentModel:'',currentMake:''});
  };



  goToCar = (type,make, model) => {
      
      
      fetch(`https://calm-taiga-87220.herokuapp.com/cars/${type.toLowerCase()}/${make.toLowerCase()}/${model.toLowerCase()}`,{
          method:'get',
          headers:{'Content-Type':'application/json'},
        })
        .then(data => data.json())
        .then(car => {
          console.log('LOADING CAR',car);
          this.setState({currentCar:car,currentPage:'car'})
        })
        .catch(err => console.log(err))

        this.setState({loading:false,currentType:'car',currentModel:model,currentMake:make});
  };


  

 

  render() {

    let carTypeContent = null;
    console.log(this.state);
    let renderedCarList = this.state.myCarList;
    let phoneContent = (window.innerWidth < 768)?(<Row>
                     <Col xs='12' ><div className="center "> Scroll down to discover</div> </Col>
                     
                   </Row>):null;
     
    
    if((this.state.currentPage === 'coupe'
        || this.state.currentPage === 'sedan'
        || this.state.currentPage === 'suv'
        || this.state.currentPage === 'convertible'
        || this.state.currentPage === 'grand tourer'
        || this.state.currentPage === 'limousine') ){
            carTypeContent = (

               
                 <Container>
                  
                  
                   <Row>
                     <Col xs='12' ><div className="center carType-page-title">{(this.state.currentPage === 'coupe') ?'COUPE / SPORTS':this.state.currentPage.toUpperCase() }</div> </Col>
                     
                   </Row>
                   
                   
                    <Row>
                     <Col xs='12'   > 
                         
                         <CarList className='center' myCarList={renderedCarList} goToCar={this.goToCar} goBack={this.goBack}/>
                        
                     </Col>
                   </Row>
                   <Row >
                    <Col xs='12' className="title-button-back">
                       
                        <a onClick={() => this.props.changeRoute('fleet')} href="#0" className="center f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
                          
                          <span className="pl1">BACK</span>
                      </a>
                       
                    </Col>
                  </Row>
                   

                 </Container>

                        
      );

    }
    else if(this.state.currentPage === 'car')  {


      carTypeContent = (<div className="carType-page">
                        <CarInfo img={'https://res.cloudinary.com/nit-jamshedpur/image/upload/q_42/v1554872505/Cars/'+ this.state.currentCar.type +'/'+this.state.currentCar.make+'/'+ this.state.currentCar.model+'/0.jpg'} 
                                
                                goBack={this.goBack}
                                book={this.props.book}
                                
                                carDetails={this.state.currentCar}
                                gallery={'https://res.cloudinary.com/nit-jamshedpur/image/upload/q_42/v1554872505/Cars/'+ this.state.currentCar.type+'/'+this.state.currentCar.make+'/'+ this.state.currentCar.model}/>
                        </div>);
    }
    else{
          carTypeContent = ( <Container>
                  
                  
                   <Row>
                     <Col xs='12' ><div className="center carType-page-title"> COUPES  /  SPORTS</div> </Col>
                     
                   </Row>
                   
                   
                    <Row>
                     <Col xs='12'   > 
                         
                         LOADING CARS...
                        
                     </Col>
                   </Row>
                   <Row >
                    <Col xs='12' className="title-button-back">
                       
                        <a onClick={() => this.props.changeRoute('fleet')} href="#0" className="center f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
                          
                          <span className="pl1">BACK</span>
                      </a>
                       
                    </Col>
                  </Row>
                   

                 </Container> );
    }

     



    return (
        <div>{carTypeContent}</div>
    );
  }
}

export default CarType;
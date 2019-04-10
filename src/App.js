import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.js';
import SideDrawer from './components/Navbar/SideDrawer.js';
import BackDrop from './components/Navbar/BackDrop.js';
import Home from './components/Home/Home.js';
import HowItWorks from './components/How_it_works/How_it_works.js';
import Locations from './components/Locations/Locations.js';
import AboutUs from './components/About_us/About_us.js';
import ContactUs from './components/Contact_us/Contact_us.js';
import LoginRegister from './components/LoginRegister/LoginRegister.js';
import NewUserRegister from './components/LoginRegister/NewUserRegister.js';
import Fleet from './components/Fleet/Fleet.js';
import Account from './components/Account/Account.js';
import Book from './components/Book/Book.js';
import CarType from './components/CarType/CarType.js';
import Payment from './components/Payment/Payment.js';
import Invoice from './components/Invoice/Invoice.js';
const initialState = {
      sideDrawerOpen: false,
      currentPage:'home',
      userLoggedIn:false,
      currentCarToBook:'',
      currentCarType:'',
      goingFromBookToLogin:false,
      bookingData:"",
      locationId:null,
      dataIncomplete:false,
      user:{
        id:null,
        fname:'',
        lname:'',
        email: '',
        credits:0,
        joined:new Date()
      }
    };

class App extends Component {

 constructor(){
   	super();
   	this.state = {
   		sideDrawerOpen: false,
      currentPage:'home',
      userLoggedIn:false,
      currentCarToBook:'',
      currentCarType:'',
      goingFromBookToLogin:false,
      bookingData:"",
      dataIncomplete:false,
      user:{
        id:null,
        fname:'',
        lname:'',
        email: '',
        credits:0,
        joined:new Date()
      },
      bookingid:null,
      invoiceData:'',
   	}

 }



  drawerToggleClickHandler = () => {
  	this.setState((prevState) => {
  		return {sideDrawerOpen: !prevState.sideDrawerOpen};
  	});
 };

 backDropClickHandler = () => {
 	this.setState({sideDrawerOpen: false});
 };

  closeButtonClickHandler = () => {
 	this.setState({sideDrawerOpen: false});
 };

 changeRoute = (route) => {
  this.setState({currentPage:route});
 };

 
  onSignIn = (route,flag) => {
    this.setState({currentPage:route, userLoggedIn:flag});

  };

  onLogOut = (route,flag) => {
    this.setState(initialState);
  };

  book = (car) => {
    if(this.state.userLoggedIn ){
      this.setState({currentPage:'book', currentCarToBook:car})
    }
    else{
       this.setState({currentPage:'login', currentCarToBook:car,goingFromBookToLogin:true})
    }
  };

  getBookingData = (data,locID) => {
    this.setState({bookingData:data,locationId:locID});
    if(data.plan === '' || data.location === ''){
      this.setState({dataIncomplete:true});
    }
    else{
      this.setState({dataIncomplete:false,currentPage:'pay'})
    }
  };

  changeRouteToCarType = (type) => {
    this.setState({currentPage:type})
  };


  loadUser = (data) =>{

    this.setState(
        {
          user:{
              id:data.id,
              fname:data.fname,
              lname:data.lname,
              email: data.email,
              credits:data.credits,
              joined:data.joined
            }
        }
    );
  };

  renewCredits = () => {
    fetch('https://calm-taiga-87220.herokuapp.com/renew',{
      'method':'put',
      'headers':{'Content-Type':'application/json'},
      'body':JSON.stringify({
        id:this.state.user.id
      })
    })
    .then(response => response.json())
    .then(credits => this.setState(Object.assign(this.state.user,{'credits':credits})))

  };

  

  refreshCredits = (deductCredits) => {
    this.setState(Object.assign(this.state.user,{'credits':this.state.user.credits-deductCredits}));
  };

  loadInvoice = (data) => {

    this.setState({invoiceData:data});
   if(this.state.invoiceData!=null){
    this.changeRoute('invoice');
   }
    
  };


  render() {

  	 
  	let backDrop;

  	if(this.state.sideDrawerOpen){
  		
  		backDrop = <BackDrop backDropClick  = {this.backDropClickHandler}/>;
  	}


    let content = <Home  changeRoute = {this.changeRoute} />;

    if(this.state.currentPage === 'home'){
      content = <Home  changeRoute = {this.changeRoute} />;
    }
    else if(this.state.currentPage === 'howItWorks'){
      content = <HowItWorks changeRoute = {this.changeRoute}/>
    }
    else if (this.state.currentPage === 'locations'){
      content = <Locations/>
    }
    else if (this.state.currentPage === 'about'){
      content = <AboutUs/>
    }
    else if (this.state.currentPage === 'contact'){
      content = <ContactUs/>
    }
    else if (this.state.currentPage === 'login'){
      content = <LoginRegister 
                    onSignIn={this.onSignIn} 
                    loadUser={this.loadUser}
                    changeRoute={this.changeRoute} 
                    goingFromBookToLogin={this.state.goingFromBookToLogin}
                    /*carThatWasChosen={this.state.currentCarToBook}*//>
    }
    else if (this.state.currentPage === 'register'){
      content = <NewUserRegister 
                       changeRoute = {this.changeRoute}
                      loadUser={this.loadUser}
                      onSignIn={this.onSignIn}
                      goingFromBookToLogin={this.state.goingFromBookToLogin}
                      /*carThatWasChosen={this.state.currentCarToBook}*//>
    }
    else if (this.state.currentPage === 'fleet'){
      content = <Fleet myState='main' changeRoute={this.changeRoute}/>
    }
    
    else if (this.state.currentPage === 'account'){
      content = <Account 
          loadInvoice={this.loadInvoice}
           
            user={this.state.user} 
            renew={this.renewCredits} 
            onLogOut={this.onLogOut}  />
    }
    else if (this.state.currentPage === 'book'){
      content = <Book 
                  dataIncomplete={this.state.dataIncomplete} 
                  changeRoute={this.changeRoute} 
                  locationId={this.state.locationId}
                  car={ this.state.currentCarToBook} 
                  getBookingData={this.getBookingData}
                  user={this.state.user}
                  />
    }
    else if (this.state.currentPage === 'pay'){
      content = <Payment 
                changeRoute={this.changeRoute} 
                locationId={this.state.locationId}
                user={this.state.user} 
                car={this.state.currentCarToBook} 
                data={ this.state.bookingData}
                refreshCredits={this.refreshCredits}
                />
    }
    else if (this.state.currentPage === 'invoice'){
      content = <Invoice user={this.state.user} invoiceData={this.state.invoiceData} changeRoute={this.changeRoute}/>
    }
    else  {
      content = <CarType currentType={this.state.currentPage} changeRoute={this.changeRoute} book={this.book}  />
    }

    console.log(this.state.invoiceData);

    return (
      <div className="App" style={{height:'100vh'}}>
      	 <Navbar drawerClickHandler={this.drawerToggleClickHandler} changeRoute={this.changeRoute} />
      	  <SideDrawer 
            show={this.state.sideDrawerOpen} 
            close={this.closeButtonClickHandler}
            isSignedIn = {this.state.userLoggedIn} 
           changeRoute={this.changeRoute}
            
            />
      	  {backDrop}
      	   
         	{content}
          
      </div>
    );
  }
}

export default App;

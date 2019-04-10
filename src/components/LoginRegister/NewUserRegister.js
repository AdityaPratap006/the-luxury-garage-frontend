import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './LoginRegister.css';

class  NewUserRegister extends Component{

	constructor(props){
		super(props);
		this.state = {
			email: '',
			pw:'',
			fname:'',
			lname:'',
			wrong:false,
			wrong2:false
		};
	}

	onFNameChange = (event) => {
		this.setState({fname:event.target.value,wrong2:false,wrong:false})
	};

	onLNameChange = (event) => {
		this.setState({lname:event.target.value,wrong2:false,wrong:false})
	};

	onEmailChange = (event) => {
		this.setState({email:event.target.value,wrong2:false,wrong:false})
	};
	onPWChange = (event) => {
		this.setState({pw:event.target.value,wrong2:false,wrong:false})
	};

	onSubmitRgister = (event,flag) => {
		event.preventDefault();
		fetch('https://calm-taiga-87220.herokuapp.com/register',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				email:this.state.email,
				password:this.state.pw,
				fname:this.state.fname,
				lname:this.state.lname
			})
		})
		.then(response => response.json())
		.then(user => {
			console.log(user);
			if(user.id ){
				this.setState({wrong:false,wrong2:false});
				this.props.loadUser(user);
				if(flag){
					this.props.onSignIn('book',true);
				}
				else{
					this.props.onSignIn('home',true);
				}
			}
			else if(user === 'Incorrect form submission!' && user != 'Unable to register!'){
				this.setState({wrong:true,wrong2:false});
			}
			else{
				this.setState({wrong2:true,wrong:false});
			}
		})
		.catch(console.log)
	};


	componentDidMount() {
		window.scrollTo(0,0);
	    const orig = document.body.className;
	    console.log(orig);  //Just in-case to check if your code is working or not
	    document.body.className = orig + (orig ? ' ' : '') + 'my-bg-image5'; //Here gray-by is the bg color which I have set
	}
	componentWillUnmount() {
	    document.body.className = null;
	}



	render(){

		
		const comingFromBook = this.props.goingFromBookToLogin;
		const errorMessage1 =(this.state.wrong)? 
							(<Row >
							<Col xs='12' >
								<div   className=" center error-msg-div">
									 <h3>Wrong Credentials! Please try again.</h3>
								</div>
							</Col>
						</Row>):null;
		const errorMessage2 =(this.state.wrong2)? 
							(<Row >
							<Col xs='12' >
								<div   className=" center error-msg-div">
									 <h3>This email id already exists! Please try with another email id.</h3>
								</div>
							</Col>
						</Row>):null;
		return(
				<div className ='my-login'>
					<Container className ='my-login-form'>
						{errorMessage1}
						{errorMessage2}
						<Row>
							
							<Col   xs='12' id='register-form'>
								<article className="center mw5 mw6-ns shadow-3 hidden ba mv4 register">
								  
								  <div className="pa3 bt">
								    <main className="pa4 white-80">
								  <form className="measure center">
								    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
								      <legend className="f4 fw6 ph0 mh0">Register</legend>
								      <div className="mt3">
								        <label className="db fw6 lh-copy f6" htmlFor="firstname">First Name</label>
								        <input 
								        	 className={(!this.state.wrong)?
									        				"pa2 white input-reset ba bg-transparent hover-bg-white hover-white w-100"
									        				:"b--dark-red pa2 white input-reset ba bg-transparent hover-bg-white hover-white w-100"
									        			}
								        	type="text" 
								        	name="firstname"  
								        	id="firstname"
								        	onChange={this.onFNameChange}/>
								      </div>
								      <div className="mt3">
								        <label className="db fw6 lh-copy f6" htmlFor="lastname">Last Name</label>
								        <input  className={(!this.state.wrong)?
									        				"pa2 white input-reset ba bg-transparent hover-bg-white hover-white w-100"
									        				:"b--dark-red pa2 white input-reset ba bg-transparent hover-bg-white hover-white w-100"
									        			}
								        type="text" 
								        name="lastname"  
								        id="lastname"
								        onChange={this.onLNameChange}/>
								      </div>
								      <div className="mt3">
								        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
								        <input  className={(!this.state.wrong)?
									        				"pa2 white input-reset ba bg-transparent hover-bg-white hover-white w-100"
									        				:"b--dark-red pa2 white input-reset ba bg-transparent hover-bg-white hover-white w-100"
									        			}
								        type="email" 
								        name="email-address"  
								        id="email-address"
								        onChange={this.onEmailChange}/>
								      </div>
								      <div className="mv3">
								        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
								        <input  className={(!this.state.wrong)?
									        				"pa2 white input-reset ba bg-transparent hover-bg-white hover-white w-100"
									        				:"b--dark-red pa2 white input-reset ba bg-transparent hover-bg-white hover-white w-100"
									        			}
								        type="password" 
								        name="password"  
								        id="password"
								        onChange={this.onPWChange}/>
								      </div>
								      
								    </fieldset>
								    <div className="">
								      <input onClick={(event) => this.onSubmitRgister(event,comingFromBook)} className="b   ph3 pv2 input-reset ba b--white white bgMyPurple grow pointer f4 dib" type="submit" value="Register"/>
								    </div>
								    
								  </form>
								</main>
								  </div>
								</article>
							</Col>
						</Row>
						 <Row >
							<Col className="center">
								<div className="my-regbtn-div">
									<Button onClick={() => this.props.changeRoute('login')} color="primary" className='center-regLink-btn center'>ALREADY A USER? LOGIN!</Button>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			);

	}
}

export default NewUserRegister;
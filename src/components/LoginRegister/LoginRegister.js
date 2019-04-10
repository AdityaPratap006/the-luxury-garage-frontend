import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './LoginRegister.css';

class  LoginRegister extends Component{

	constructor(props){
		super(props);
		this.state = {
			signInEmail: '',
			signInPW:'',
			wrong:false,
			wrong2:false
		};
	}

	componentDidMount() {
		window.scrollTo(0,0);
	    const orig = document.body.className;
	    console.log(orig);  //Just in-case to check if your code is working or not
	    document.body.className = orig + (orig ? ' ' : '') + 'my-bg-image5'; //Here gray-by is the bg color which I have set
	}
	componentWillUnmount() {
	    document.body.className = null;
	}


	onEmailChange = (event) => {
		
		this.setState({signInEmail: event.target.value,wrong:false,wrong2:false});
	};

	onPWChange = (event) => {
		 
		this.setState({signInPW: event.target.value,wrong:false,wrong2:false});
	};

	onSubmitSignIn = (event,flag) => {
		//console.log(this.state);
		
		fetch('https://calm-taiga-87220.herokuapp.com/signin',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				email:this.state.signInEmail,
				password:this.state.signInPW
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user.id){
				this.setState({wrong:false});
				if(flag){
					this.props.onSignIn('book',true);
				}
				else{
					this.props.onSignIn('home',true);
				}

				this.props.loadUser(user);
			}
			else if(user === 'Incorrect form submission!'){
				this.setState({wrong2:true});
			}
			else{
				this.setState({wrong:true});
			}

		})
		.catch(console.log)
		event.preventDefault();
		
	};

	render(){

		/*const registerLink = (window.innerWidth <= 768 )?(<div className="lh-copy mt3">
								      <a href="#register-form" className="register-link f6 link dim white db">New here? Register</a>
								    </div>):'';*/
		const comingFromBook = this.props.goingFromBookToLogin;
		const errorMessage =(this.state.wrong)? 
							(<Row >
							<Col xs='12' >
								<div   className=" center error-msg-div">
									 <h3>Wrong Credentials! Please try again.</h3>
								</div>
							</Col>
						</Row>):null;
		//console.log(comingFromBook);
		return(
				<div className ='my-login'>
					<Container className ='my-login-form'>
						{errorMessage}
						<Row>
							<Col  xs='12' id='login-form'>
								<article className="center mw5 mw6-ns shadow-3 hidden ba   mv4 login">
								  
								  <div className="pa3 bt white">
								    <main className="pa4 white-80">
								  <form className="measure center">
								    <fieldset id="sign_up" className="ba b--transparent   ph0 mh0">
								      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
								      <div className="mt3">
								        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
								        <input  
									        className={(!this.state.wrong2)?
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
								        <input 
								        	 className={(!this.state.wrong2)?
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
								      <input onClick={(event) => this.onSubmitSignIn(event,comingFromBook)} className="b ph3 pv2 input-reset ba b--white white bgMyPurple grow pointer f4 dib" type="submit" value="Sign in"/>
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
									<Button onClick={() => this.props.changeRoute('register')} color="primary" className='center-regLink-btn center'>NEW HERE ?  REGISTER NOW!</Button>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			);

	}
}

export default LoginRegister;
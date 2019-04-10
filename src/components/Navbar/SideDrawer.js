import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {

	let drawerClasses = ['side-drawer'];
	if(props.show){
		drawerClasses.push('drawer-open');
	}

   let lastLink = null;
   if(props.isSignedIn){
   		lastLink = <li onClick={() => props.changeRoute('account')}><p>MY ACCOUNT</p></li>;
   }
   else{
   	    lastLink = <li onClick={() => props.changeRoute('login')}><p>LOGIN / REGISTER</p></li>;
   }
					

	return(
			<nav className={drawerClasses.join(' ')} onClick={props.close}>
			  <div className="button-container">
			  	<div className='close-button' onClick={props.close}>
			  		<span>&#x2716;</span>
			  	</div>
			  </div>
				<ul>
					<li onClick={() => props.changeRoute('home')}><p>HOME</p></li>
					<li onClick={() => props.changeRoute('about')}><p>ABOUT US</p></li>
					<li onClick={() => props.changeRoute('howItWorks')}><p>HOW IT WORKS</p></li>
					<li onClick={() => props.changeRoute('fleet')}   ><p>FLEET</p></li>
					<li onClick={() => props.changeRoute('locations')}><p >LOCATIONS</p></li>
					<li onClick={() => props.changeRoute('contact')}><p>CONTACT US</p></li>
					{lastLink}
				</ul>
			</nav>
		);

};
		
	

export default SideDrawer;
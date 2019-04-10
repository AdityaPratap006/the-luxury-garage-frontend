import React from 'react';
import './drawerToggleButton.css';
const DrawerToggleButton = props => (
	  
		<button className="toggleButton" onClick={props.Click}>
			<div className="toggleButtonLine"></div>
			<div className="toggleButtonLine" ></div>
			<div className="toggleButtonLine" ></div>
		</button>
	 
	);

export default DrawerToggleButton;
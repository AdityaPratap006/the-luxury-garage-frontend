import React from 'react';
import './Navbar.css';
import DrawerToggleButton from './drawerToggleButton.js';
const Navbar = (props) => (
    
       <nav className="navbar ">

          

          <div className="navbar-logo pointer"  onClick={() => props.changeRoute('home')}  ><img/></div>
           
          <div   >
              <DrawerToggleButton Click={props.drawerClickHandler}/>
          </div>
          
       </nav>
    
  );

export default Navbar;

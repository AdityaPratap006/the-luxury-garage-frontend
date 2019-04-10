import React from 'react';
import './card.css';

const Card = ({ name, pic}) => {

	

	return (

		<div className=' dib br3 pa3  ma2 grow bw2 shadow-5 pointer my-card '>
			<img  alt='location' src={pic} className='card-img'/>
			<div className='tc '>
				<h3 className='city-name'>{name}</h3>
				 
			</div>
		</div>

	);
}




export default Card;
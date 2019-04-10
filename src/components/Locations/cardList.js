import React from 'react';
import Card from './card.js';

const CardList = ({cities}) => {

	

	const CardArray = cities.map((user,i) => {
		return  (<Card 

				key={i}

				pic={cities[i].photo}

				name={cities[i].name} 

		 />);
	});

	return (

		<div className="my-card-list">
			
			{ CardArray }
				
		</div>

		);

		
	
}

export default CardList;
import React from 'react';
import Card from './Card.js';

const CardList=({robots})=>{

	const cardcomponent=robots.map((val,i)=><Card key={i} id={val.id} name={val.name} email={val.email}/>)
	return(

	<div>

		{cardcomponent}
	</div>

		);	

}

export default CardList;
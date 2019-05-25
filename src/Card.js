import React from 'react';

const Card= ({name,email,id})=>{

	return(

		<div className="dib pa3 ma2 grow bw2 shadow-5">
			<img alt="robot"src={`https://robohash.org/${id}?set=set5&size=300x300&bgset=bg1`}/>
			<h2>{name}</h2>
			<h3>{email}</h3>
		</div>



		);
};

export default Card;
import React from 'react'

const Scroll=(props)=>{

	return(


		<div style={{overflow:'scroll', marginTop:'10px', border:'4px solid black', height:'500px' }}>
			{props.children}
		</div>


		);

};

export default Scroll;
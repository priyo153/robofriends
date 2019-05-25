import React from 'react'

const SearchBox = ({searchChange})=>{
	return(

		<input 
		onChange={searchChange}
		className="pa3 b--green bg-lightest-blue" 
		type='text' 
		placeholder="enter friend name" />

		);

}

export default SearchBox;
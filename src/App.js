import React, {Component} from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll'
import './App.css';

class App extends Component{

	constructor(){
		super();
		this.state={
			robots:[],
			searchfield:''
		}
	}

	componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	  .then(response => response.json())
	  .then(json =>this.setState({robots:json}))
	}

	 onSearchChanging = (event)=>{
		this.setState({searchfield:event.target.value})
	}
	render(){

	console.log(this.state.value);
	const filteredrobots=this.state.robots.filter((item)=>item.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
	

		if(this.state.robots.length===0){
			return(<h1 className="tc">LOADING. . .</h1>);
		}
		else{
			return(

		<div className="tc">
			<h1 className='f2'>robofriends</h1>
			
			<SearchBox searchChange={this.onSearchChanging}/>
			<Scroll>
			<CardList robots={filteredrobots}/>
			</Scroll>
		</div>
		);
	}

		

	}

}



export default App;
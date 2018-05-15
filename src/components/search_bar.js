import React, { Component } from 'react';

/*
// functional component(dump component)
const SearchBar = () =>{
    return <input placeholder="search"/>; // use React.createElement during the translation odf jsx 
}*/

// class based component
//  onChange={function(event){this.setState({inputVal : event.target.value}) }} didn't work!!!
//  onChange={this.onInputChange}  
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term : this.props.term}
    }
    onInputChange = (event)=>{
        this.setState({term : event.target.value});
    }
    render(){
        return <input value={this.state.term} 
        onChange={ this.onInputChange } />;
    }
}
export default SearchBar;
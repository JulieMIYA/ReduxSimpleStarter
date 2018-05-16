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
        this.state = {term: "healthy food"};
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    render(){
        return <input value={this.state.term} 
        onChange={ event=>this.onInputChange(event.target.value) } />;
    }
}
export default SearchBar;
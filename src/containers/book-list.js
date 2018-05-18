import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
function mapStateToProps(state){
    //whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    }
}
function mapDispatchToProps(dispatch){
    /*return {
       SelectBook : (title)=>{
            dispatch(SelectBook(title))
        }
    }*/
    return bindActionCreators({SelectBook : SelectBook}, dispatch);
}
class BookList extends Component {
    renderList(){
        return this.props.books.map(
            book=>(
                <li key={book.title} onClick ={()=>this.props.SelectBook(book.title)} className="list-group-item">{book.title}</li>
            )
        )
    }
    render(){
        return(
            <ul className="list-group col-md-4">
                {this.renderList()}
            </ul>
        )
    }
}

export default connect(mapStateToProps,actions)(BookList);
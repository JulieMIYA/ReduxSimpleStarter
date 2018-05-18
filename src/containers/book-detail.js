import { connect } from 'react-redux';
import React from 'react';

const BookDetail =  ({ title })=> {
    return (<p>{title}</p>)
}

export default connect((state)=>({title: state.selectedBook}) )(BookDetail);

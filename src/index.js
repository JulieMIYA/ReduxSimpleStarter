import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import SearchBar from './components/search_bar';
// import reducers from './reducers';

const API_KEY ="AIzaSyDGtI5lkjhgddynWBCna19yc1xqx1CAsg0";
//<SearchBar /> =React.createElement (..), represent for an instance
ReactDOM.render(
  <SearchBar />
  , document.querySelector('.container'));

import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import SearchBar from './components/search_bar';
// import reducers from './reducers';

const API_KEY ="AIzaSyDGtI5lkjhgddynWBCna19yc1xqx1CAsg0";
YTSearch({key: API_KEY, term: 'health food'}, function(data){
  console.log(data);
});
class App extends Component{
  constructor(props){
        super(props);

        this.state = {videos : [] };

        YTSearch({key: API_KEY, term: 'health food'}, (videos)=>{
          // this.setState({videos: videos});
          this.setState({videos});
          
        });
  }
  render(){
    return (
      <div>
        <SearchBar term/>
      </div>
    );
  }
}
//<SearchBar /> =React.createElement (..), represent for an instance
ReactDOM.render(
  <App />
  , document.querySelector('.container'));

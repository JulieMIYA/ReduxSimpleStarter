import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';

//include components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY ="AIzaSyDGtI5lkjhgddynWBCna19yc1xqx1CAsg0";

class App extends Component{
  constructor(props){
        super(props);
        this.state = {
          videos : [] ,
          selectedVideo : null
        };

        YTSearch({key: API_KEY, term: 'health food'}, (videos)=>{
          // this.setState({videos: videos});
          this.setState({
            videos: videos,
            selectedVideo: videos[0]
          });
        });
  }

  render(){
    return (
      <div>
        <div className="search-bar">
          <SearchBar />
        </div>
        <VideoDetail video={this.state.selectedVideo}/> 
        <VideoList videos={this.state.videos} onVideoSelect={ (selectedVideo) =>{this.setState({selectedVideo});} } />
      </div>
    );
  }
}
//<SearchBar /> =React.createElement (..), represent for an instance
ReactDOM.render(
  <App />
  , document.querySelector('.container'));

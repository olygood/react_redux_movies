import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search-bar'
import VIdeoList from './containers/video-list'
import VideoDetail from './components/video-detail'
import axios from 'axios'


//const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOIE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=5f9f6982b5c72af4976e115ed55eebae&language=en-US&page=1";
const API_KEY = "5f9f6982b5c72af4976e115ed55eebae";

class App extends Component {
  constructor(props){
    super(props)
    this.state= {movieList:{},currentMovie:{}}
  }
    componentWillMount(){
      this.initMovies();
    }
    initMovies(){
      axios.get(`${POPULAR_MOIE_URL}&${API_KEY}`).then(function(response){
        
        this.setState({movieList:response.data.results.slice(1,6),currentMovie:response.data.results[0]});
        
      
      }.bind(this));
    }
   
  render() {
     // afficher videoList si il y a bien des films à l'interieur
    const renderVideoList = ()=> {
      if(this.state.movieList.length>=5){
        return <VIdeoList movieList= {this.state.movieList} />

      }
    }
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          {renderVideoList()}
          <VideoDetail title= {this.state.currentMovie.title} description={this.state.currentMovie.overview} />
      
        </header>
      </div>
    );
  }
}

export default App;

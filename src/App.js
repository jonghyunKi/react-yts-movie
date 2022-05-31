import './App.css';

import React, { Component } from 'react';
import axios from 'axios';
import PagiNation from './components/PagiNation';
import MovieList from './components/MovieList';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      movieList:[],
      currentMovieList:1,
      movieListperPage:4
    }
  }

  getMovieList=async()=>{
    const axiosMovieList=await axios.get('https://yts.mx/api/v2/list_movies.json');
    console.log(axiosMovieList)
    console.log(axiosMovieList.data.data.movies)
    this.setState({
      movieList:axiosMovieList.data.data.movies
      
    })
  }
  
  componentDidMount(){
    this.getMovieList()
    
  }

  setCurrentPage=(page)=>{
    alert('app클릭'+page)
    this.setState({
      currentMovieList:page
    })
  }
  currentMovieList=(movieList)=>{
    const indexOffLast=(this.state.movieListperPage)*(this.state.currentMovieList);
    const indexOffFirst=indexOffLast-(this.state.movieListperPage);
    const sliceList=movieList.slice(indexOffFirst,indexOffLast)
    return sliceList
  }
  render() {
    return (
      <div id='app'>
          <div id='title'>
            YTS 영화 소개
          </div>
        <MovieList movieList={this.currentMovieList(this.state.movieList)}/>
        <PagiNation totalList={this.state.movieList.length} movieListperPage={this.state.movieListperPage} setCurrentPage={this.setCurrentPage}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Movie from './Movie';
import '../css/MovieList.css'

class MovieList extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        const result=this.props.movieList.map(
            (movie,index)=>(<Movie key={index} medium_cover_image={movie.medium_cover_image} title_long={movie.title_long} year={movie.year} rating={movie.rating} runtime={movie.runtime}></Movie>)
        )
        return (
            <div id='MovieList'>
                {result}
            </div>
        );
    }
}

export default MovieList;
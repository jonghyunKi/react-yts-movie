import React, { Component } from 'react';
import '../css/Movie.css';
class Movie extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div id='movie'>
                <div>
                    <img alt='이미지' src={this.props.medium_cover_image}></img>
                </div>
                <div>
                    {this.props.title_long}
                </div>
                <div id='memo'>
                        <div>제작년도: {this.props.year}</div>
                        <div>평점: {this.props.rating}</div>
                        <div>러닝타임: {this.props.runtime}</div>
                </div>
            </div>
        );
    }
}

export default Movie;
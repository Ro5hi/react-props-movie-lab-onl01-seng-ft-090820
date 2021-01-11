import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards() {
    // map over your movieData array and return an array of the correct JSX
    console.log(movieData)
  }

  render() {
    this.generateMovieCards() 
    return (
      <div id="movie-showcase">
        <h1>hello</h1>
      </div>
    )
  }
}

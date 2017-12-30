import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import axios from 'axios';

class AstronomyContainer extends Component {
  constructor(){
    super();
    this.state = {
      astronomy: []
    }
  }
  componentDidMount(){
    const API_KEY = "zeYHuB89jkSLfjtTxJJVBdGjhj7eOkjpRtmoKH85";
    const END_POINT = "https://api.nasa.gov/planetary/apod?api_key=";
    axios.get(END_POINT+API_KEY)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error, 'failed to fetch data')
      })
  }
  render(){
    return (
      <div> hi </div>
    )
  }
}

export default AstronomyContainer;

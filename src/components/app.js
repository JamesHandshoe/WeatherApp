import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      
      <div>
      	<div className="navbar">
      		<h1>Five Day Weather Search</h1>
      	</div>
      	<SearchBar />
   		<WeatherList />
      </div>
    );
  }
}

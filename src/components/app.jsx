import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import NavBar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar title="Mark's 5 Day Weather" />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

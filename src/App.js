import React, { Component } from 'react';
import Categories from "./Categories"
import Items from "./Items"
import './App.css';

class App extends Component {
		
  render() {
    return (
      <div className="App">
		<Categories></Categories>
		<Items></Items>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import ImageContainer from './components/ImageContainer'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <ImageContainer />
      </div>
    );
  }
}

export default App;

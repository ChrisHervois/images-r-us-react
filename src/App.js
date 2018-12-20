import React, { Component } from 'react';
import './App.css';
import ImageContainer from './components/ImageContainer'
import SideMenu from './components/SideMenu'

class App extends Component {
  state = {
    searchTerm: ''
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value })
}

  render() {
    return (
      <div className="App">
        <SideMenu
          className="header"
          value={this.state.searchTerm}
          handleChange={this.handleChange.bind(this)}
        />
        <ImageContainer searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import NewsList from './NewsList';
import Header from './Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NewsList />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
 
import 'react-chat-widget/lib/styles.css';

// Components
import Slider from './Components/Slider'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Slider />
      </div>
    );
  }
}

export default App;

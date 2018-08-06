import React, { Component } from 'react';
import Postform from './PostForm';
import Allpost from './AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
        <h2 className="center ">Post It</h2>
        </div>
        <Postform />
        <Allpost />
      </div>
    );
  }
}

export default App;

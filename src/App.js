import React, { Component } from 'react';
import Postform from './PostForm';
import Allpost from './AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Postform />
        <Allpost />
      </div>
    );
  }
}

export default App;

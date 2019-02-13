import React from 'react';
import './App.css';
import HeroPanel from './components/HeroPanel'

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <HeroPanel />
      </div>
    );
  }
}

export default App;

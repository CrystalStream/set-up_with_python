import React from 'react';
import './App.scss';
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

import React from 'react';
import './App.scss';
import HeroPanel from './components/HeroPanel'

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        
        <a className="github-link" href="https://github.com/CrystalStream/set-up_with_python" target="_blank">
          <p className="nes-balloon from-right">Set it<br/>on GitHub</p>
          <i className="nes-octocat"></i>
        </a>

        <HeroPanel />
      </div>
    )
  }
}

export default App;

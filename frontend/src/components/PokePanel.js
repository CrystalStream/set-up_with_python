import React from 'react'
import PokeSelect from './PokeSelect'
import Filters from './Filters'
import pokemons from '../utils/pokemons'

export default class PokePanel extends React.Component {

  state = {
    beautyPokemons: [],
    uglyPokemons: []
  }

  componentDidMount() {

    this.setState({ 
      beautyPokemons: pokemons.getByType('beauty'),
      uglyPokemons: pokemons.getByType('ugly')
    })
  }

  onSearchHandler = async (type) => {
    const rawResponse = await fetch(`http://localhost:5000/api/v1/${type}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ a: this.state.beautyPokemons.map(p => p.name), b: this.state.uglyPokemons.map(p => p.name) })
    });
    const content = await rawResponse.json();
  
    console.log(content);

  }

  render() {

   return (
    <>
      <div className="nes-container with-title">
        <h2 className="title">World of Chars</h2>

        <div className="more-info">
          <div className="explanation">
              <div className="color-square beauty-color">&nbsp;</div>
              <label>Beautiful Pokemons</label>
          </div>
          <div className="explanation">
            <div className="color-square beaugly-color">&nbsp;</div>
            <label>Not-ugly-not-beauty Pokemons</label>
          </div>
          <div className="explanation">
            <div className="color-square ugly-color">&nbsp;</div>
            <label>Really Ugly Pokemons</label>
          </div>
        </div>

        <PokeSelect 
          beautyPokemons={this.state.beautyPokemons}
          uglyPokemons={this.state.uglyPokemons} />

        <Filters onSearch={this.onSearchHandler}/>
      </div>
      
      <div className="text-right">
        <a className="github-link" href="https://github.com/CrystalStream/set-up_with_python" target="_blank">
          <p className="nes-balloon from-right">Set it<br/>on GitHub</p>
          <i className="nes-octocat"></i>
        </a>
      </div>
    </>
  )
  }
}
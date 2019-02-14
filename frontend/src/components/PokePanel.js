import React from 'react'
import PokeSelect from './PokeSelect'
import ChosenPokes from './ChosenPokes'
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

  onSearchHandler = (data) => {
    // const data = pokemons.getByType(typeA).concat(pokemons.getByType(typeB))
    console.log('data', data)
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
      
      <div>
        <a className="github-link" href="https://github.com/CrystalStream/set-up_with_python" target="_blank">
          <p className="nes-balloon from-right">Set it<br/>on GitHub</p>
          <i className="nes-octocat"></i>
        </a>
      </div>
    </>
  )
  }
}
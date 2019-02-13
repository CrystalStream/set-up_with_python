import React from 'react'
import PokeSelect from './PokeSelect'
import ChosenPokes from './ChosenPokes'
import Filters from './Filters'
import pokemons from '../utils/pokemons'

export default class HeroPanel extends React.Component {

  state = {
    allPokemons: [],
    fireTypePokemons: [],
    waterTypePokemons: [],
    poisonTypePokemons: [],
    isFetching: false,
    allowedTypes: ['fire', 'water', 'poison']
  }

  componentDidMount() {

    this.setState({ 
      fireTypePokemons: pokemons.firePokemons(),
      waterTypePokemons: pokemons.waterPokemons(),
      poisonTypePokemons: pokemons.poisonPokemons() })
  }

  render() {

   return (
    <>
      <div className="nes-container with-title">
        <h2 className="title">World of Chars</h2>

        <PokeSelect 
          firePokemons={this.state.fireTypePokemons}
          waterPokemons={this.state.waterTypePokemons}
          poisonPokemons={this.state.poisonTypePokemons} />

        <ChosenPokes />
      </div>

      <Filters />

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
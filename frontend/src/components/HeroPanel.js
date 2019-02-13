import React from 'react'
import HeroSelection from './HeroSelection'
import ChosenHeros from './ChosenHeros'
import Filters from './Filters'

export default class HeroPanel extends React.Component {

  state = {
    allPokemons: [],
    fireTypePokemons: [],
    waterTypePokemons: [],
    poisonTypePokemons: [],
    isFetching: false
  }

  componentDidMount() {
    
  }

  render() {
   return (
    <>
      <div className="nes-container with-title">
        <h2 className="title">World of Chars</h2>

        <HeroSelection />

        <ChosenHeros />
      </div>

      <Filters />
    </>
  )
  }
}
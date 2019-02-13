import React from 'react'

export default function PokeSelect(props) {

  return (
    <div className="nes-container is-rounded is-dark with-title">
      <h2 className="title">Characters</h2>
      <div className="pure-g spread-elements pokecontainer fire">
      {
        props.firePokemons && props.firePokemons.map(pokemon => {
          return (
            <div key={pokemon.name} className="pure-u-1 pure-u-sm-1-3 pure-u-md-1-6">
              <div className="tile">
                <div className="card">
                  <figure className="">
                    <img src={pokemon.image} alt={pokemon.name} />
                    <figcaption>{pokemon.name}</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
      <div className="pure-g spread-elements pokecontainer water">
      {
        props.waterPokemons && props.waterPokemons.map(pokemon => {
          return (
            <div key={pokemon.name} className="pure-u-1 pure-u-sm-1-3 pure-u-md-1-6">
              <div className="tile">
                <div className="card">
                  <figure className="">
                    <img src={pokemon.image} alt={pokemon.name} />
                    <figcaption>{pokemon.name}</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
      <div className="pure-g spread-elements pokecontainer poison">
      {
        props.poisonPokemons && props.poisonPokemons.map(pokemon => {
          return (
            <div key={pokemon.name} className="pure-u-1 pure-u-sm-1-3 pure-u-md-1-6">
              <div className="tile">
                <div className="card">
                  <figure className="">
                    <img src={pokemon.image} alt={pokemon.name} />
                    <figcaption>{pokemon.name}</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

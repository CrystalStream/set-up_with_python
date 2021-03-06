import React from 'react'

export default function PokeSelect(props) {

  return (
    <div className="nes-container is-rounded is-dark with-title">
      <h2 className="title">Characters</h2>
      <div className="pure-g spread-elements pokecontainer beauty">
      <h2>Group A</h2>
      {
        props.beautyPokemons && props.beautyPokemons.map(pokemon => {
          return (
            <div key={pokemon.name} className="pure-u-1 pure-u-sm-1-4">
              <div className={`tile ${pokemon.selected ? 'active' : 'inactive'} ${pokemon.types.join(' ')}`}>
                <div className="card">
                  <figure>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <figcaption>{pokemon.name}</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          )
        })
      }
      <hr className="with-margin-vertical"/>
      </div>
      <div className="pure-g spread-elements pokecontainer ugly">
      <h2>Group B</h2>
      {
        props.uglyPokemons && props.uglyPokemons.map(pokemon => {
          return (
            <div key={pokemon.name} className="pure-u-1 pure-u-sm-1-4">
              <div className={`tile ${pokemon.selected ? 'active' : 'inactive'} ${pokemon.types.join(' ')}`}>
                <div className="card">
                  <figure>
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

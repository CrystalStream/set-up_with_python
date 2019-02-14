import React from 'react'

export default function PokeSelect(props) {

  return (
    <div className="nes-container is-rounded is-dark with-title">
      <h2 className="title">Characters</h2>
      <div className="pure-g spread-elements pokecontainer beauty">
      {
        props.beautyPokemons && props.beautyPokemons.map(pokemon => {
          return (
            <div key={pokemon.name} className="pure-u-1 pure-u-sm-1-4">
              <div className={`tile ${pokemon.types.length > 1 ? 'inactive' : ''} ${pokemon.types.join(' ')}`}>
                <div className="card">
                  <figure className={`${pokemon.types.length > 1 ? 'selected' : ''}`}>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <hr className="dynamic-background"/>
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
      {
        props.uglyPokemons && props.uglyPokemons.map(pokemon => {
          return (
            <div key={pokemon.name} className="pure-u-1 pure-u-sm-1-4">
              <div className={`tile ${pokemon.types.length > 1 ? 'inactive' : ''} ${pokemon.types.join(' ')}`}>
                <div className="card">
                  <figure className={`${pokemon.types.length > 1 ? 'selected' : ''}`}>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <hr className="dynamic-background"/>
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

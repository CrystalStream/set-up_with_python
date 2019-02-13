import React from 'react'


export default class HeroPanel extends React.Component {

  componentDidMount() {
    
  }
  

  render() {
   return (
     <>
     <div className="nes-container with-title">
      <h2 className="title">World of Chars</h2>

      <div className="nes-container is-rounded is-dark with-title">
        <h2 className="title">Characters</h2>
        <div className="pure-g spread-elements">
          <div className="pure-u-1 pure-u-sm-1-3 pure-u-md-1-8">
            <div className="tile">
              <div className="card">
                <figure className="">
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                  <figcaption>Wolverine.</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="pure-u-1 pure-u-sm-1-3 pure-u-md-1-8">
            <div className="tile">
              <div className="card">
                <figure className="">
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                  <figcaption>Wolverine.</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="pure-u-1 pure-u-sm-1-3 pure-u-md-1-8">
            <div className="tile">
              <div className="card">
                <figure className="">
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                  <figcaption>Wolverine.</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nes-container is-rounded with-title is- with-margin-top is-centered">
        <h2 className="title">Selected Characters</h2>
        <div className="pure-g center-elements">
            <div className="pure-u-sm-1-4">
              <figure className="">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                <figcaption>Wolverine.</figcaption>
              </figure>
            </div>
            <div className="pure-u-sm-1-4">
              <figure className="">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                <figcaption>Wolverine.</figcaption>
              </figure>
            </div>
            <div className="pure-u-sm-1-4">
              <figure className="">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                <figcaption>Wolverine.</figcaption>
              </figure>
            </div>
            <div className="pure-u-sm-1-4">
              <figure className="">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                <figcaption>Wolverine.</figcaption>
              </figure>
            </div>
        </div>
        <div className="pure-g">
            <div className="pure-u-sm-1-4">
              <figure className="">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                <figcaption>Wolverine.</figcaption>
              </figure>
            </div>
            <div className="pure-u-sm-1-4">
              <figure className="">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                <figcaption>Wolverine.</figcaption>
              </figure>
            </div>
            <div className="pure-u-sm-1-4">
              <figure className="">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                <figcaption>Wolverine.</figcaption>
              </figure>
            </div>
            <div className="pure-u-sm-1-4">
              <figure className="">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                <figcaption>Wolverine.</figcaption>
              </figure>
            </div>
        </div>
        <div className="pure-g">
            <div className="pure-u-sm-1-4">
              <figure className="">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                <figcaption>Wolverine.</figcaption>
              </figure>
            </div>
            <div className="pure-u-sm-1-4">
              <figure className="">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                <figcaption>Wolverine.</figcaption>
              </figure>
            </div>
            <div className="pure-u-sm-1-4">
              <figure className="">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                <figcaption>Wolverine.</figcaption>
              </figure>
            </div>
            <div className="pure-u-sm-1-4">
              <figure className="">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Trulli"  />
                <figcaption>Wolverine.</figcaption>
              </figure>
            </div>
        </div>
      </div>
     </div>
     <div className="nes-container with-title with-margin-top">
      <h2 className="title">Filters</h2>
      <div className="is-centered">
        <div className="pure-g">
          <div className="pure-u-sm-1-3">
            <div>
              <label>
                <input type="checkbox" className="nes-checkbox" name="answer[]" />
                <span>Fire Type</span>
              </label>
            </div>
          </div>
          <div className="pure-u-sm-1-3">
            <label>
              <input type="checkbox" className="nes-checkbox" name="answer[]" />
              <span>Water Type</span>
            </label>
          </div>
          <div className="pure-u-sm-1-3">
            <label>
              <input type="checkbox" className="nes-checkbox" name="answer[]" />
              <span>Poison Type</span>
            </label>
          </div>
          <hr className="with-margin-top"/>
          <div className="with-margin-top">
            <button className="nes-btn is-success">Get the pokemons</button>
          </div>
        </div>
      </div>
     </div>
     </>
   )
  }
}
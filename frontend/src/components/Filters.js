import React from 'react'

export default class Filters extends React.Component {

  state = {
    fireFilter: false,
    waterFilter: true,
    poisonFilter: false,
  }

  render() {
    return (
      <div className="nes-container with-title with-margin-top">
        <h2 className="title">Filters</h2>
        <div className="is-centered">
          <div className="pure-g">
            <div className="with-margin-top">
              <button className="nes-btn is-success" onClick={() => {this.props.onSearch(this.state)}}>Get the pokemons</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
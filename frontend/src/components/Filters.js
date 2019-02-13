import React from 'react'

export default function Filters () {

  return (
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
  )
}
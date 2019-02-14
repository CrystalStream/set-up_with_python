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
            <div className="pure-u-sm-1-4">
              <button className="nes-btn" onClick={() => {this.props.onSearch('union')}}>Union</button>
            </div>
            <div className="pure-u-sm-1-4">
              <button className="nes-btn is-primary" onClick={() => {this.props.onSearch('intersection')}}>Intersection</button>
            </div>
            <div className="pure-u-sm-1-4">
              <button className="nes-btn is-success" onClick={() => {this.props.onSearch('difference')}}>Difference</button>
            </div>
            <div className="pure-u-sm-1-4">
              <button className="nes-btn is-warning" onClick={() => {this.props.onSearch('symmetric_difference')}}>Symmetric Difference</button>
            </div>
            <hr className="with-margin-vertical" />
          </div>
        </div>
      </div>
    )
  }
}
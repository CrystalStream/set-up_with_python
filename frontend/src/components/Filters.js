import React from 'react'

export default class Filters extends React.Component {

  state = {
    currentAction: ''
  }


  callAction = (actionName) => {
    this.setState({ currentAction: actionName })
    this.props.onSearch(actionName)
  }

  reset = (e) => {
    e.preventDefault()
    this.setState({ currentAction: '' })
    this.props.resetSelection()
  }


  render() {
    const { currentAction } = this.state

    return (
      <div className="nes-container with-title with-margin-left is-sticky">
        <h2 className="title">Filters</h2>
        <div className="is-centered">
          <div className="pure-g">
            <div className="pure-u-sm-1">
              <button className={ currentAction === 'union' ? 'nes-btn selected' : 'nes-btn' } onClick={() => {this.callAction('union')}}>Union</button>
            </div>
            <div className="pure-u-sm-1 with-margin-top">
              <button className={ currentAction === 'intersection' ? 'nes-btn is-primary selected' : 'nes-btn is-primary' } onClick={() => {this.callAction('intersection')}}>Intersection</button>
            </div>
            <div className="pure-u-sm-1 with-margin-top">
              <button className={ currentAction === 'difference' ? 'nes-btn is-success selected' : 'nes-btn is-success' } onClick={() => {this.callAction('difference')}}>Difference</button>
            </div>
            <div className="pure-u-sm-1 with-margin-top">
              <button className={ currentAction === 'symmetric_difference' ? 'nes-btn is-warning selected' : 'nes-btn is-warning' } onClick={() => {this.callAction('symmetric_difference')}}>Symmetric Difference</button>
            </div>
            <hr className="with-margin-vertical" />
            <a href="#" onClick={this.reset}>
              Reset all <br />
              <i className="nes-pokeball"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
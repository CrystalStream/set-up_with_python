import React from 'react'
import unionImg from '../assets/union.png'
import diffImg from '../assets/difference.png'
import interImg from '../assets/intersection.png'
import symDifImg from '../assets/symmetric_difference.png'

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
              <button className={ currentAction === 'union' ? 'nes-btn selected' : 'nes-btn' } onClick={() => {this.callAction('union')}}>
                <img src={unionImg} alt="union" width="50" height="50"/>
              </button>
            </div>
            <div className="pure-u-sm-1 with-margin-top">
              <button className={ currentAction === 'intersection' ? 'nes-btn is-primary selected' : 'nes-btn is-primary' } onClick={() => {this.callAction('intersection')}}>
                <img src={interImg} alt="intersection" width="50" height="50"/>
              </button>
            </div>
            <div className="pure-u-sm-1 with-margin-top">
              <button className={ currentAction === 'difference' ? 'nes-btn is-success selected' : 'nes-btn is-success' } onClick={() => {this.callAction('difference')}}>
                <img src={diffImg} alt="difference" width="50" height="50" className="flip-img"/>
              </button>
            </div>
            <div className="pure-u-sm-1 with-margin-top">
              <button className={ currentAction === 'symmetric_difference' ? 'nes-btn is-warning selected' : 'nes-btn is-warning' } onClick={() => {this.callAction('symmetric_difference')}}>
                <img src={symDifImg} alt="symmetric_difference" width="50" height="50"/>
              </button>
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
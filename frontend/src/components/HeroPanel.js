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
          <div className="pure-u-1-1 pure-u-sm-1-3 pure-u-md-1-3 pure-u-lg-1-3 pure-u-xl-1-6">
            <div className="tile">
              <div className="card">
                <figure className="">
                  <img src="https://via.placeholder.com/150" alt="Trulli"  />
                  <figcaption>Wolverine.</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="pure-u-1-1 pure-u-sm-1-3 pure-u-md-1-3 pure-u-lg-1-3 pure-u-xl-1-6">
            <div className="tile">
              <div className="card">
                <figure className="">
                  <img src="https://via.placeholder.com/150" alt="Trulli"  />
                  <figcaption>Wolverine.</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="pure-u-1-1 pure-u-sm-1-3 pure-u-md-1-3 pure-u-lg-1-3 pure-u-xl-1-6">
            <div className="tile">
              <div className="card">
                <figure className="">
                  <img src="https://via.placeholder.com/150" alt="Trulli"  />
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
            <div className="pure-u-sm-1-4"><p>Selected</p></div>
            <div className="pure-u-sm-1-4"><p>Selected</p></div>
            <div className="pure-u-sm-1-4"><p>Selected</p></div>
            <div className="pure-u-sm-1-4"><p>Selected</p></div>
        </div>
        <div className="pure-g">
            <div className="pure-u-sm-1-4"><p>Selected</p></div>
            <div className="pure-u-sm-1-4"><p>Selected</p></div>
            <div className="pure-u-sm-1-4"><p>Selected</p></div>
            <div className="pure-u-sm-1-4"><p>Selected</p></div>
        </div>
        <div className="pure-g">
            <div className="pure-u-sm-1-4"><p>Selected</p></div>
            <div className="pure-u-sm-1-4"><p>Selected</p></div>
            <div className="pure-u-sm-1-4"><p>Selected</p></div>
            <div className="pure-u-sm-1-4"><p>Selected</p></div>
        </div>
      </div>
     </div>
     <div className="nes-container with-title with-margin-top">
      <h2 className="title">Play!</h2>
      <div className="is-centered">
        <div className="pure-g">
            <div className="pure-u-sm-1-3">
              <button className="nes-btn is-success with-margin-right">Cool</button>
            </div>
            <div className="pure-u-sm-1-3">
              <button className="nes-btn is-warning">Bored</button>
            </div>
            <div className="pure-u-sm-1-3">
              <button className="nes-btn is-error">Angry</button>
            </div>
        </div>
      </div>
     </div>
     </>
   )
  }
}
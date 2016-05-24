import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Footer extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (
      <div className="section black" id="footer">
        <div className="container">
          <div className="row">
                <div id="footer-section">
                  <h3 className="white-text">BLAH BLAH BLAH</h3>
                  <p className="white-text">BLAH</p>
                  <section className="white-text">
                    BLAH BLAH BLAH BLAH...
                  </section>
                </div>
          </div>
        </div>
      </div>

    )
  }
}

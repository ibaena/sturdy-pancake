import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Contact from './Contact.jsx';

export default class Footer extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (
      <div className="section grey lighten-1" id="footer">
        <div className="container">
          <div className="row">
            <div className="col l8 offset-l2 s12">
              <Contact />
            </div>
            <div className="col l8 offset-l2   s12">
              <ul id="social-links">
                <li><a className="white-text center-align" href="https://github.com/ibaena" target="_blank"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a></li>
                <li><a className="white-text center-align" href="https://twitter.com/NotThefakeIB" target="_blank"><i className="fa fa-twitter fa-3x" aria-hidden="true"></i></a></li>
                <li><a className="white-text center-align" href="https://linkedin.com/in/ivanbaena" target="_blank"><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></a></li>
                <li><a className="white-text center-align" href="https://plus.google.com/u/0/115619035178516377200/posts" target="_blank"><i className="fa fa-google-plus fa-3x" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2016 Ivan Baena
          </div>
        </div>
      </div>

    )
  }
}

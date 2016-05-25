import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Header from './Header.jsx';

export default class Landing extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();


  }


 componentDidMount(){
      $('.parallax').parallax();

 }

  render() {
    return (
      <div className="parallax-container">
        <div className="parallax">
          <img src="/assets/landing.jpg" className="responsive-img"  />
        </div>
              <Header />

      </div>
    )
  }
}

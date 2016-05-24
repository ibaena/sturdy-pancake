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
          <img src="http://4.bp.blogspot.com/-yF8Y9yb04Rg/UYpIWKnK7PI/AAAAAAAAAM4/zjYjW9peWXQ/s1600/zzWUTT+promo.jpg" className="responsive-img"  />
        </div>
              <Header />
      </div>
    )
  }
}

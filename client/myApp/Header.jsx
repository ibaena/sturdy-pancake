import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Header extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){
   $('.button-collapse').sideNav({
   menuWidth: 220, // Default is 240
   edge: 'left', // Choose the horizontal origin
 }
);

 }

  render() {
    return (

      <nav className="transparent">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center black-text">Ivan Baena</a>
        </div>
      </nav>


    )
  }
}

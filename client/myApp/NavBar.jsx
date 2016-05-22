import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class NavBar extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){
   $('.button-collapse').sideNav({
   menuWidth: 220, // Default is 240
   edge: 'left', // Choose the horizontal origin
   closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
 }
);

 }

  render() {
    return (
      <nav className="transparent" >
        <ul id="slide-out" className="side-nav fixed">
           <li><a href="#!">First Sidebar Link</a></li>
           <li><a href="#!">Second Sidebar Link</a></li>
         </ul>
         <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
  </nav>

    )
  }
}

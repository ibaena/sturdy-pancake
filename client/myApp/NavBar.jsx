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
 }
);

 }

  render() {
    return (
      <nav className="transparent" >
        <div className="nav-wrapper">
     <a href="#" className="brand-logo right black-text">Logo</a>

        <ul id="slide-out" className="side-nav fixed">
           <li className="center-align menu" id="first-menu"><a href="#about"><i className="fa fa-odnoklassniki fa-2x" aria-hidden="true"></i></a></li>
           <li className="center-align menu"><a href="#!"><i className="fa fa-rocket fa-2x" aria-hidden="true"></i></a></li>
           <li className="center-align menu"><a href="#!"><i className="fa fa-bolt fa-2x" aria-hidden="true"></i></a></li>
           <li className="center-align menu"><a href="#!"><i className="fa fa-wrench fa-2x" aria-hidden="true"></i></a></li>
         </ul>
         <a href="#" data-activates="slide-out" className="button-collapse black-text"><i className="mdi-navigation-menu"></i></a>
         </div>
  </nav>

    )
  }
}

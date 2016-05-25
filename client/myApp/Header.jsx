import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Header extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (

      <nav className="transparent hide-on-large-only">
        <div className="nav-wrapper">
           <a href="#" data-activates="slide-out" className="button-collapse right black-text" id="burger-mobile"><i className="mdi-navigation-menu"></i></a>
        </div>
      </nav>


    )
  }
}

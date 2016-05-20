import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Home extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){

 }

  render() {
    return (
      <div className="container">
        <div className="center">
          <h2 className="te">Ivan Baena <br />
            <small>Web Developer</small>
          </h2>
        </div>
      </div>
    )
  }
}

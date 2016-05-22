import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';



export default class Landing extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();


  }
  animate(){
      console.log("i click");
    $('html, body').animate({scrollTop: '150px'}, 800);
  }

 componentDidMount(){
      $('.parallax').parallax();

 }

  render() {
    return (
      <div className="parallax-container">

        <div className="parallax">
          <img src=""  />
        </div>
          <ul  className="center-align" id="introbtns">
            <li> <button onClick={this.animate} className="btn-floating btn-large waves-effect waves-light transparent" id="pullup"><i className="fa fa-arrow-circle-o-up fa-3x" aria-hidden="true"></i></button></li>
          </ul>
      </div>
    )
  }
}

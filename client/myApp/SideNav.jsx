import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class SideNav extends TrackerReact(Component) {

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

 top(){
   $('html, body').animate({
       scrollTop: $(".parallax-container").offset().top
   }, 1900);
 }
 about(){
   $('html, body').animate({
       scrollTop: $("#about").offset().top
   }, 1900);
 }
 projects(){
   $('html, body').animate({
       scrollTop: $("#projects").offset().top
   }, 1900);
 }
 footer(){
   $('html, body').animate({
       scrollTop: $("#footer").offset().top
   },1900);
 }
 alertAudio(){
   Bert.alert({
   title: 'Now Playing',
   message: 'Playlists I listen to when coding',
   type: 'info',
   style: 'growl-top-right',
   icon: 'fa-music'
 });
 }

  render() {
    return (
        <ul id="slide-out" className="side-nav fixed">
           <li className="center-align menu" id="first-menu"><a href="" onClick={this.top}><i className="fa fa-level-up fa-2x" aria-hidden="true"></i></a></li>
           <li className="center-align menu"><a href="" onClick={this.about}><i className="fa fa-odnoklassniki fa-2x" aria-hidden="true"></i></a></li>
           <li className="center-align menu"><a href="" onClick={this.projects}><i className="fa fa-wrench fa-2x" aria-hidden="true"></i></a></li>
           <li className="center-align menu"><a href="" data-target="modal1" className="modal-trigger" onClick={this.alertAudio}><i className="fa fa-headphones fa-2x" aria-hidden="true"></i></a></li>
           <li className="center-align menu"><a href=""onClick={this.footer}><i className="fa fa-commenting fa-2x" aria-hidden="true"></i></a></li>
         </ul>


    )
  }
}

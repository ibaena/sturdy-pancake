import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class BtmModal extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  stopPlayer(){
    $("#audio-player").attr("src","");
  }
  startPlayer(){
    let video ="https://www.youtube.com/embed/y1qfq0sz_GM?rel=0&autoplay=1";
    $("#audio-player").attr("src",video);
  }

 componentDidMount(){
   $('.modal-trigger').leanModal({
     dismissible: true, // Modal can be dismissed by clicking outside of the modal
     opacity: .4, // Opacity of modal background
     in_duration: 300, // Transition in duration
     out_duration: 200, // Transition out duration

   }
 );

 }

  render() {
    return (


      <div id="modal1" className="modal bottom-sheet">
        <div className="modal-content">
              <iframe width="100%" height="140" id="audio-player"
                src="https://www.youtube.com/embed/i7wUWa723dw?rel=0&autoplay=1" frameborder="0">
              </iframe>
        </div>
        <div className="modal-footer">
          <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.startPlayer}>Close</a>
          <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.stopPlayer}>Close</a>
        </div>
      </div>

    )
  }
}

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class BtmModal extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  seventiesPlayer(){
    let seventies = "https://www.youtube.com/embed/videoseries?list=PLxTAIaK898woRSx55Y2XvUIwxHc8dJblW";
    Bert.alert({
    title: 'Now Playing',
    message: '70s Playlist',
    type: 'info',
    style: 'growl-top-right',
    icon: 'fa-music'
  });
    $("#audio-player").attr("src","");
    $("#audio-player").attr("src",seventies);
  }
  oldiesPlayer(){
    let video = "https://www.youtube.com/embed/videoseries?list=PLxTAIaK898wqdwWQaBBK88ccQuXKAcNvz";
    Bert.alert({
    title: 'Now Playing',
    message: 'Oldies Playlist',
    type: 'info',
    style: 'growl-top-right',
    icon: 'fa-music'
  });
      $("#audio-player").attr("src","");
    $("#audio-player").attr("src",video);
  }
  beatsPlayer(){
    let beats = "https://www.youtube.com/embed/videoseries?list=PLxTAIaK898wo_ri8RNY4PrcL6lxt8MsyL";
    Bert.alert({
    title: 'Now Playing',
    message: 'Beats Playlist',
    type: 'info',
    style: 'growl-top-right',
    icon: 'fa-music'
  });
      $("#audio-player").attr("src","");
    $("#audio-player").attr("src",beats);
  }

 componentDidMount(){
   $('.modal-trigger').leanModal({
     dismissible: true, // Modal can be dismissed by clicking outside of the modal
     opacity: .4, // Opacity of modal background
     in_duration: 300, // Transition in duration
     out_duration: 300, // Transition out duration

   }
 );

 }

  render() {
    return (


      <div id="modal1" className="modal bottom-sheet">
        <div className="modal-content">
          <iframe width="100%" height="200" id="audio-player"
            src="https://www.youtube.com/embed/videoseries?list=PLxTAIaK898wo_ri8RNY4PrcL6lxt8MsyL" frameborder="0" allowfullscreen>
          </iframe>
        </div>
        <div className="modal-footer">
          <a href="" className="  waves-effect waves-green btn-flat" onClick={this.beatsPlayer}>Beats</a>
          <a href="" className="  waves-effect waves-green btn-flat" onClick={this.oldiesPlayer}>Oldies</a>
          <a href="" className="  waves-effect waves-green btn-flat" onClick={this.seventiesPlayer}>70's</a>
          <a href="" className=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
      </div>

    )
  }
}

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Contact extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (

      <div className="card-panel white">
        <div className="row">
          <form>
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" className="validate" />
              <label for="icon_prefix">First Name</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">phone</i>
              <input id="icon_telephone" type="tel" className="validate" />
                <label for="icon_telephone">Telephone</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input id="icon_telephone" type="tel" className="validate" />
                <label for="icon_telephone">Telephone</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">message</i>
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label for="textarea1">Textarea</label>
            </div>
          </form>
        </div>
      </div>


    )
  }
}

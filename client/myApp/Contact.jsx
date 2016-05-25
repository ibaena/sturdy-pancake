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

 submitContact(event) {
   event.preventDefault();
   var name = this.refs.name.value.trim();
   var phone = this.refs.phone.value.trim();
   var email = this.refs.email.value.trim();
   var message = this.refs.message.value.trim();
   if (message) {
     Meteor.call('submitContact', name,phone,email,message, () => {

         this.refs.name.value = "";
         this.refs.phone.value = "";
         this.refs.email.value = "";
         this.refs.message.value = "";
     });
   }
 }

  render() {
    return (

      <div className="card-panel white">
        <div className="row">
          
          <form onSubmit={this.submitContact.bind(this)}>
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" className="validate"  ref="name" />
              <label for="icon_prefix">First Name</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">phone</i>
              <input id="icon_telephone" type="tel" className="validate"  ref="phone" />
                <label for="icon_telephone">Telephone</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input id="icon_telephone" type="email" className="validate"  ref="email"  />
                <label for="icon_telephone">Email</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">message</i>
                <textarea id="textarea1" className="materialize-textarea"  ref="message" ></textarea>
                <label for="textarea1">Message</label>
            </div>
            <div className="input-field col s12">
              <button className="btn waves-effect waves-light transparent black-text" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>

        </div>
      </div>


    )
  }
}

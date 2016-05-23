import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Portfolio = new Mongo.Collection("portfolio");

export default class About extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

    this.state = {
      subscription: {
        about: Meteor.subscribe("About")
      }
    };
  }

 componentDidMount(){

 }

 componentWillUnmount() {
     this.state.subscription.about.stop();
 }


   AboutMe() {
     return Portfolio.find({}).fetch();
   }

  render() {
    console.log(this.AboutMe());
    return (
      <div className="section white" id="about">
        <div className="row container">
          {
            this.AboutMe().map((item) => {
              return(
                <div id="about" key={item._id}>
                  <h3>{item.first_name} {item.last_name}</h3>
                  <p>{item.headline}</p>
                  <section>
                    {item.long_bio}
                  </section>
                </div>
              )})
          }

        </div>
      </div>
    )
  }
}

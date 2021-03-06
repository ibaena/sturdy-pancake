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
  
  AboutMe() {
    return Portfolio.find({}).fetch();
  }

 componentDidMount(){

 }

 componentWillUnmount() {
     this.state.subscription.about.stop();
 }




  render() {
    return (
      <div className="section white" id="about">
        <div className="container">
          <div className="row">
          {
            this.AboutMe().map((item) => {
              return(
                <div id="about-section" key={item._id}>
                  <h3>{item.first_name} {item.last_name}</h3>
                  <p>{item.headline}</p>
                  <section>
                    {item.bio_short}
                    {item.aim}<br /><br />
                    {item.aim2}<br /><br />
                    {item.long_bio}
                  </section>
                </div>
              )})
          }
          </div>
        </div>
      </div>
    )
  }
}

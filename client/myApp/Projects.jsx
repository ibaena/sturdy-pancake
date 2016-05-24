import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Showcase = new Mongo.Collection("projects");

export default class Projects extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();
    this.state = {
      subscription: {
        projects: Meteor.subscribe("MyWork")
      }
    };
  }

 componentDidMount(){

 }
 componentWillUnmount() {
     this.state.subscription.projects.stop();
 }


   projects() {
     return Showcase.find({}).fetch();
   }

  render() {

    return (

      <div className="section blue" id="projects">
        <div className="row container">

                <ul id="showcase">
                  {
                    this.projects().map((item) => {
                      console.log(item);

                      return(
                        <li  key={item._id}>
                          <div className="card">
                            <div className="card-image">
                              <img src={item.image} className="responsive-img projectImgs"/>
                                <span className="card-title">{item.title}</span>
                              </div>
                              <div className="card-content">
                                <p>{item.description}</p>
                              </div>
                              <div className="card-action">
                                <a href={item.github}><i className="fa fa-github" aria-hidden="true"></i></a>
                              </div>
                            </div>
                          </li>
                      )
                    })
                  }

                </ul>
        </div>
      </div>

    )
  }
}
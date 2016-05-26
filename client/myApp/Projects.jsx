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
        <div className="container">
          <div className="row">
            <h3 className="center-align white-text">Projects</h3>
                <ul id="showcase">
                  {
                    this.projects().map((item) => {

                      return(
                        <li  key={item._id}>
                          <div className="card hoverable">
                            <div className="card-image">
                              <img src={item.image} className="responsive-img projectImgs"/>
                              </div>
                              <div className="card-content">
                                <span className="card-title black-text">{item.title}</span>
                                <p>{item.description}</p>
                              </div>
                              <div className="card-action">
                                <a href={item.github} className="btn-floating btn-large waves-effect waves-light transparent " target="_blank"><i className="fa fa-github fa-2x black-text" aria-hidden="true"></i></a>
                                <a href={item.url} className="btn-floating btn-large waves-effect waves-light transparent " target="_blank"><i className="fa fa-play fa-2x black-text" aria-hidden="true"></i></a>
                              </div>
                            </div>
                          </li>
                      )
                    })
                  }

                </ul>
              </div>
        </div>
      </div>

    )
  }
}

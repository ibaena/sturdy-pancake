Portfolio = new Mongo.Collection("portfolio");

if (Portfolio.find({}).count() === 0) {
    Portfolio.insert({
      "first_name": "Ivan",
      "last_name": "Baena",
      "full_name": "Ivan Baena",
      "interest": ["Coffee addict","Pizza lover","Dogs lover", "Xbox gamer", "Sports Fanatic", "Coding, Building, Learning", "Basketball {KNICKS!}", "Family", "Horror Movies", "Comedy Movies", "Snowboarding", "Camping", "Collecting classic  soul vinyl records"],
      "bio_short": "I am a  Full Stack Web Developer, graduate of Rutgers Coding Bootcamp. I have experience working with HTML, CSS, Javascript, NodeJS, AngularJS, MongoDb, and MySQL.",
      "aim": " I aim to provide beautiful responsive mobile apps using the latest technologies.",
      "aim2":"I've been developing my skill–set to focus on what’s most suited to getting the job done quickly and effectively.",
      "headline": "Knicks Fan | Horror movie buff | Technology Geek | Gamer",
      "long_bio": "Located in the Greater NYC area. I am a MEAN stack developer that enjoys creating, designing and developing mobile projects from the ground up. I specialize in AngularJS and NodeJS development. My prefered database is MongoDb, I also have expierence working with MySQL databases as well. Coding is a passion of mine and a skillset that I practice daily. I love learning new technologies and applying them to my projects. When I'm not coding I enjoy playing basketball, hanging with my two dogs and playing xbox one.",
      "image": "/public/img/profile.jpg",
      "quote": "We cannot become what we want to be by remaining what we are.",
      "social_url":{
        "facebook": "https://www.facebook.com/profile.php?id=9390215",
        "twitter": "https://twitter.com/NotThefakeIB",
        "linkedin": "https://www.linkedin.com/in/ivanbaena",
        "github": "https://github.com/ibaena"
      }
    });
}

Meteor.publish("About", function() {
  return Portfolio.find();
});

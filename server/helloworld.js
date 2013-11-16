
Meteor.startup(function () {
  // code to run on server at startup

  // Load colors
  if( ColorColl.find({color: "#F00"}, {limit: 1}).fetch().length == 0 ) {
    ColorColl.insert({color: "#F00"});
    console.log("Inserting #F00...")
  }
  else {
    console.log("F00 ALREADY EXISTS!")
  }
  if( ColorColl.find({color: "#0F0"}, {limit: 1}).fetch().length == 0 ) {
    ColorColl.insert({color: "#0F0"});
    console.log("Inserting #0F0...")
  }
  else {
    console.log("0F0 ALREADY EXISTS!")
  }
  if( ColorColl.find({color: "#00F"}, {limit: 1}).fetch().length == 0 ) {
    ColorColl.insert({color: "#00F"});
    console.log("Inserting #00F...")
  }
  else {
    console.log("00F ALREADY EXISTS!")
  }

});

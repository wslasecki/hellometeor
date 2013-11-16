/*
 * Main js file for HelloMeteor project.
 * (c) W.S. Lasecki, 2013
 *
 */


// function for getting URL parameters
function gup(name) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if(results == null)
            return "";
    else
            return unescape(results[1]);
}

$(document).ready( function() {
  alert(gup("workerId"))


});


// HIDDEN BOX //
Template.hiddenbox.values = function() {

  return ColorColl.find();
}

Template.value.val = function() {
  return "Color: " + this["color"];
}

// SharedBox //

Template.sharedbox.events({
  'click #buttonShare' : function () {
    if (typeof console !== 'undefined') {
      console.log("Inserting")
      SharedColl.insert({content: "Welcome 2 the machine."});
    }
  },

  'click #buttonFetch' : function () {
    if (typeof console !== 'undefined') {
      console.log("Fetching")
      val = SharedColl.find({}, {limit: 5}).fetch();
      //alert(val[0]['content']);
      $('#local-div').html(val[0]);
    }
  }
});

Template.sharedbox.text = function() {
  topEntry = SharedColl.find({}, {limit: 1}).fetch()
  if( topEntry != "" ) {
    return topEntry[0]['content'];
  }
};


// Hello //

Template.hello.greeting = function (d) {
  //alert(d);
  return "Welcome to helloworld! >> <<";
};

Template.hello.events({
  'click #button1' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined') {
      console.log("You pressed the button");
      Template.hello.greeting("Session begun");
    }
  },

  'click #button2' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined') {
      console.log("You pressed the other button");
    }
  }
});


Template.landing.rendered = function() {
  Session.set('loginStateVar', 'loginPage');
};

Template.landing.helpers({
  'loginState': function(state) {
    return Session.equals('loginStateVar', state);
  },
});

Template.landing.events({
  'click #signUp': function(e) {
    e.preventDefault();
    Session.set('loginStateVar', 'signUp');
  },
  'click #loginSubmit': function(e) {
    e.preventDefault();

    var email =  $('#userEmail').val();
    var password = $('#userPassword').val();

    Meteor.loginWithPassword(email, password, function(error) {
      if(error) {
        console.log(error.reason);
        Router.go('landing');
      } else {
        if(Roles.userIsInRole(Meteor.userId(), 'admin')) {
          //TODO: shift route and template to be customer
          //also set up roles
          Router.go('customerLandingPage');
        } else {
          Router.go('providerLandingPage');
        }
      }
    });
  }
});

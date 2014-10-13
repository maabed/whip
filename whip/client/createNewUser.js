Template.createNewUser.helpers({
  'userTypes': function() {
    return ['Customer', 'Provider'];
  }
});
Template.createNewUser.events({
  'click #signIn': function(e) {
    e.preventDefault();
    Session.set('loginStateVar', 'loginPage');
  },
  'click #createNewUser': function(e) {
    e.preventDefault();

    var attributes = {
      email: $('#userEmail').val(),
      password: $('#userPassword').val(),
      profile: {
        userType: $('#userType').val(),
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        zip: $('#zip').val()
      }
    };
    console.log(attributes);
    //TODO: figure out if this can be done client side only?
    Meteor.call('createNewUser', attributes, function(error) {
      if(error) {
        console.log(error.reason);
      } else {
        Meteor.loginWithPassword(attributes.email, attributes.password,
                                 function(error) {
                                   if(error) {
                                     addErrorMessage(error.reason); 
                                     Router.go('landing');
                                     //TODO: this hsould
                                   } else {
                                     if(attributes.profile.userType === "Customer") {
                                       Router.go('customerHomePage'); 
                                     } else {
                                       Router.go('providerHomePage');
                                     }
                                   }
                                 });
      }
    });
  }
});

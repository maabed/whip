Meteor.methods({
  createNewUser: function(attributes) {
    check(attributes, {
      email: String,
      password: String,
      profile: {
        userType: String,
        firstName: String,
        lastName: String,
        zip: String
        /*
        address1: String,
        address2: String,
        city: String,
        state: String,
       */
      }
    });

    var newUserId = Accounts.createUser({
      email: attributes.email,
      password: attributes.password,
      profile: attributes.profile
    });

    if(attributes.profile.userType === 'Customer') {
      Roles.addUsersToRoles(newUserId, 'Customer');
    } else if (attributes.profile.userType === 'Provider') {
      Roles.addUsersToRoles(newUserId, 'Provider');
    } else {
      console.log("No Role Assigned");
    }
  }
});


Meteor.publish("photos", function() {
  return Photos.find();
});

Meteor.publish("vehicles", function() {
  return Vehicles.find();
});

Meteor.publish("Schedule", function() {
	return Schedule.find();
});

Meteor.publish("bids", function() {
  return Bids.find();
});

Meteor.publish('userData', function() {
  if (Roles.userIsInRole(this.userId, 'admin')) {
    return Meteor.users.find();
  } else if(this.userId) {
    return Meteor.users.find({_id: this.userId}, 
                             {fields: {'services.facebook.first_name': 1,
                               'services.facebook.last_name': 1,
                               'services.facebook.email': 1}});
  } else {
    this.ready();
  }
});


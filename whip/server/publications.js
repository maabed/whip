Meteor.publish("photos", function() {
  return Photos.find();
});

Meteor.publish("vehicle", function() {
  return Vehicles.find();
});

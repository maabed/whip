Meteor.publish("photos", function() {
  return Photos.find();
});

Meteor.publish("vehicles", function() {
  return Vehicles.find();
});

Meteor.publish("bids", function() {
  return Bids.find();
});

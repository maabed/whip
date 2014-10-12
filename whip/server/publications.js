Meteor.publish("photos", function() {
  return Photos.find();
});

Meteor.publish("vehicles", function() {
  return Vehicles.find();
});

Meteor.publish("ServiceRequest", function() {
	return ServiceRequest.find();
});

Meteor.publish("Schedule", function() {
	return Schedule.find();
});

Meteor.publish("bids", function() {
  return Bids.find();
});


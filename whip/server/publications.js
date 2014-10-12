Meteor.publish("photos", function() {
  return Photos.find();
});

Meteor.publish("vehicle", function() {
  return Vehicles.find();
});

Meteor.publish("ServiceRequest", function() {
	return ServiceRequest.find();
});
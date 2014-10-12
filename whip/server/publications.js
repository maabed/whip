Meteor.publish("photos", function() {
  return Photos.find();
});

Meteor.publish("vehicle", function() {
  return Vehicles.find();
});

Meteor.publish("serviceRequest", function() {
	return serviceRequest.find();
});
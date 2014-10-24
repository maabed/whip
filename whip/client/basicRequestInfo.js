Session.set("requestType", "selecting");

Template.basicRequestInfo.rendered = function() {
  var currentVehicle = Vehicles.findOne();
  Session.setDefault('currentVehicle', currentVehicle);
};

Template.basicRequestInfo.helpers({
  'requestType': function(requestType) {
    return Session.equals("requestType", requestType);
  },
  'currentVehicle': function() {
    return Session.get('currentVehicle');
  }
});

Template.basicRequestInfo.events({
  'change .requestTypeRadio': function(e) {
    Session.set("requestType", e.target.value);
  }
});  

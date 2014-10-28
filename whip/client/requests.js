Session.set('firstName', null);

Template.requests.helpers({
  'customer': function() {
    var currentCustomer = Meteor.users.findOne(this.userId);
    if(currentCustomer.profile) {
      return currentCustomer.profile.firstName;
    } else {
      return "";
    }
  },
  'vehicleModel': function() {
    var currentVehicle = Vehicles.findOne(this.vehicleId);
    return currentVehicle.model;
  }
});

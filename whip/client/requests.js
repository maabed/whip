Session.set('firstName', null);

//TODO: the below might be in a race condition, consider 
//investigating how to do waitOn with ironRouter here...
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

Template.requests.events({
  'click .addBid': function(e) {
    e.preventDefault();
    Router.go('addBid', {requestId: this._id});
  }
});

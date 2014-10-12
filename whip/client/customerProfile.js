Template.customerProfile.rendered = function() {
  Session.set('updateVehicleId', null);
};

Template.customerProfile.helpers({
  'vehicles': function() {
    return Vehicles.find();
  },
  'updateVehicleId': function() {
    return Session.get('updateVehicleId');
  }
});

Template.customerProfile.events({
  'click .updateVehicle': function(e) {
    Session.set('updateVehicleId', this._id);
  },
  'click #editVehicleSubmit': function() {
    $('#updateVehicleModal').modal('hide');
  }
});

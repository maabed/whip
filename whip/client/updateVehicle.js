Template.updateVehicle.helpers({
  'updateDoc': function() {
    var vehicleId = this.valueOf() || "";
    return Vehicles.findOne(vehicleId);
  }
});


Vehicles = new Meteor.Collection('vehicles');

Vehicles.attachSchema(new SimpleSchema({
  make: {
    type: String,
    label: 'Vehicle Make'
  },
  model: {
    type: String,
    label: 'Vehicle Model'
  }, 
  color: {
    type: String,
    label: 'Vehicle Color'
  }, 
  mileage: {
    type: Number,
    label: 'Vehicle Mileage'
  },
  year: {
    type: Number,
    label: 'Vehicle Mileage'
  },
  vehicleHistory: {
    type: [Object],
    label: 'Vehicle History',
    optional: true
  }
}));

Vehicles.allow({
  insert: function() {
    return true;
  },  
  update: function() {
    return true;
  },  
  remove: function() {
    return true;
  }
});

Bids = new Mongo.Collection('bids');

Bids.attachSchema(new SimpleSchema({
  userId: {
    type: String,
    label: 'User ID'
  },
  requestId: {
    type: String,
    label: 'Request ID',
    optional: true
  }, 
  serviceType: {
    type: String,
    label: 'Type of Service',
    allowedValues: [
      'Oil Change',
      'Check-Up',
      'Tires Replacement',
      'Detailing',
      'Other'
    ],
    optional: true
  }, 
  minPrice: {
    type: Number,
    label: 'Minimum Price'
  },
  maxPrice: {
    type: Number,
    label: 'Maximum Price'
  },
  duration: {
    type: Number,
    label: 'Expected Length of Repair'
  },
  scheduleId: {
    type: [Object],
    label: 'Vehicle History',
    optional: true
  }
}));

Bids.allow({
  insert: function() {
    return true;
  },  
  update: function() {
    return true;
  },  
  remove: function() {
    return true;
  },  
});

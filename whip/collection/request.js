Requests = new Mongo.Collection('requests');

//userId, scheduleId, requestType, notes, vehicleId, datePosted
Requests.attachSchema(new SimpleSchema({
  userId: {
    type: String,
    label: 'User Id'
  },
  vehicleId: {
    type: String,
    label: 'Vehicle Id'
  },
  scheduleId: {
    type: String,
    label: 'Schedule Id',
    optional: true
  },
  requestType: {
    type: String,
    label: 'Request Type'
  },
  datePosted: {
    type: Date,
    label: 'Date Posted'
  },
  notes: {
    type: String,
    label: 'Notes on Request',
    optional: true
  }
}));

Requests.allow({
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

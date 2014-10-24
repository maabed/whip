AutoForm.hooks({
  insertServiceRequestForm: {
    before: {
      insert: function(doc, template) {
        doc.userId = Meteor.userId();
        doc.vehicleId = Session.get('currentVehicle')._id;
        doc.datePosted = moment(doc.datePosted).toDate();
        return doc;
      }
    }
  }
});

Template.maintenanceRequest.helpers({
  'requestType': function() {
    return [
      {label: "Oil Change", value: "Oil Change"},
      {label: "Tire Replacement", value: "Tire Replacement"},
      {label: "Inspection", value: "Inspection"}
    ];
  }
});

Template.maintenanceRequest.events({
});


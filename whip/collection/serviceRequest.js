ServiceRequest = new Mongo.Collection('ServiceRequest');

var fields = ["requestType", "carPart", "datePosted"];
Requests = new Meteor.Pagination(ServiceRequest, 
                                 {
                                   fastRender: true,
                                   perPage: 5,
                                   table: {
                                     class: "table",
                                     fields: fields,
                                     wrapper: "table-wrapper"
                                   }
                                 });

ServiceRequest.attachSchema(new SimpleSchema({
	userId: {
		type: String,
		label: 'UserId'
	},
	vehicleId: {
		type: String,
		label: 'VehicleId'
	},
  requestCategory: {
    type: String,
    label: 'Request Category',
    allowedValues: ['accident', 'maintenance', 'upgrade']
  },
	requestType: {
		type: String,
		label: 'Request Type'
	},
	carPart: {
		type: String,
		label: 'Area Affected',
    optional: true
	},
	severity: {
		type: String,
		label: 'Severity',
    allowedValues: ["Major", "Minor", "Optional"],
    optional: true
	},
	scheduleId: {
		type: String,
		label: 'scheduleId',
    optional: true
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

ServiceRequest.allow({
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

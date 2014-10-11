serviceRequest = new Meteor.Collection('serviceRequest');

serviceRequest.attachSchema(new simpleSchema({
	userId: {
		type: String,
		label: 'UserId'
	},
	vehicleId: {
		type: String,
		label: 'VehicleId'
	},
	requestType: {
		type: String,
		label: 'Request Type'
	},
	carPart: {
		type: String,
		label: 'Area Affected'
	},
	severity: {
		type: String,
		label: 'Severity'
	},
	scheduleId: {
		type: String,
		label: 'scheduleId'
	}
}));

serviceRequest.allow({
	insert: function() {
		return true;
	},
	update: function() {
		return true;
	},
	delete: function() {
		return true;
	}
});
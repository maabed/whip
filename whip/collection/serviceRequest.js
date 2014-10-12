ServiceRequest = new Mongo.Collection('ServiceRequest');

ServiceRequest.attachSchema(new SimpleSchema({
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
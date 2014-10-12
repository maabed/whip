Schedule = new Mongo.Collection('Schedule');

Schedule.attachSchema(new SimpleSchema({
	startTime: {
		type: String,
		label: 'Start Time'
	},
	endTime: {
		type: String,
		label: 'End Time'
	},
	startDate: {
		type: Date,
		label: 'Start Date'
	},
	endDate: {
		type: Date,
		label: 'End Date'
	}
}));

Schedule.allow({
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

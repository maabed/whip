Template.addVehicle.rendered = function() {};

Template.addVehicle.helpers({});

Template.addVehicle.events({
	'click #cancel': function(e) {
		console.log(e)
		e.preventDefault();
		Router.go('customerProfile');
	}
});
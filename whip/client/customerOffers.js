Template.customerOffers.rendered = function() {
  Session.set('mapView', false);
};

Template.customerOffers.events({
});

Template.customerOffers.helpers({
	'mapView': function(e) {
		return Session.get('mapView');
	}
});

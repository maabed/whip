Template.customerHomePage.rendered = function() {
};

Template.customerHomePage.helpers({
  'geolocationReady': function() {
    return Geolocation.latLng();
  },
  'geolocationError': function() {
    return Geolocation.error();
  },
  'currentLat': function() {
    return Geolocation.latLng().lat;
  },
  'currentLng': function() {
    return Geolocation.latLng().lng;
  }
});

Template.customerHomePage.events({
  'click #submitRequest': function(e) {
    e.preventDefault();
    Router.go('basicRequestInfo');
  }, 
  'click #browseOffers': function(e) {
    e.preventDefault();
    Router.go('browseOffers');
  },
  'click #currentOffers': function(e) {
    e.preventDefault();
    Router.go('currentOffers');
  },
  'click #profile': function(e) {
    e.preventDefault();
    Router.go('customerProfile');
  }
});


Template.userLandingPage.rendered = function() {
};

Template.userLandingPage.helpers({
});

Template.userLandingPage.events({
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

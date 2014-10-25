Template.layout.rendered = function() {
};

Template.layout.helpers({
});

Template.layout.events({
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
  },
  'click #pendingOffers': function(e) {
    e.preventDefault();
    Router.go('pendingOffers');
  }
});

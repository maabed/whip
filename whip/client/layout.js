Template.layout.rendered = function() {
};

Template.layout.helpers({
});

Template.layout.events({
  'click #home': function(e) {
    e.preventDefault();
    // Add roles logic in here
    if (true) {
      Router.go('customerHomePage');
    };
  },
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
    Router.go('customerOffers');
  },
  'click #profile': function(e) {
    e.preventDefault();
    Router.go('customerProfile');
  },
  'click #pendingOffers': function(e) {
    e.preventDefault();
    Router.go('pendingOffers');
  },
  'click .nav a': function(e){
    if($('.navbar-toggle').css('display') !='none'){
        $(".navbar-toggle").trigger( "click" );
    }
  }
});

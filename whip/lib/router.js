Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  //Landing Page
  this.route('landing', {path: '/'});

  //Customer Pages
  this.route('customerHomePage', {path: '/customerHomePage'});
  this.route('basicRequestInfo', {path: '/basicRequestInfo'});
  this.route('customerRequest', {path: '/customerRequest'});
  this.route('customerBids', {path: '/customerBids'});
  this.route('customerProfile', {path: '/customerProfile'});
  this.route('addVehicle', {path: '/addVehicle'});
  this.route('addBid', {path: '/addBid'});
  this.route('photo', {path: '/photo'});

  //Vendor Page
  this.route('vendorHomePage', {path: '/vendorHomePage'});
  this.route('currentRequests', {path: '/currentRequests'});
});


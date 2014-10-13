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
  this.route('customerProfile', {path: '/customerProfile'});
  this.route('addVehicle', {path: '/addVehicle'});
  this.route('addBid', {path: '/addBid'});
  this.route('photo', {path: '/photo'});

  //Provider Page
  this.route('providerHomePage', {path: '/providerHomePage'});
});


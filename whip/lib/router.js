Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  //Home Page
  this.route('landing', {path: '/'});

  //memberHomePages
  this.route('userLandingPage', {path: '/userLandingPage'});
  this.route('basicRequestInfo', {path: '/basicRequestInfo'});
  this.route('viewVehicle', {path: '/viewVehicle'});
  this.route('photo', {path: '/photo'});
});


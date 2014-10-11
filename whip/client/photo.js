Template.photo.helpers({
  'photos': function() {
    return Photos.find({}, {sort: {"createdAt": -1}});
  }
});
    
Template.photo.events({
  'click #takePicture': function() {
    MeteorCamera.getPicture(function (error, data) {
      if(error) {
        console.log(error.reason);
      } else {
        Photos.insert({
          image: data,
          createdAt: new Date()
        });
      }
    });
  }
});

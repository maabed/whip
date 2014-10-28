var request;

AutoForm.hooks({
  insertBidsForm: {
    before: {
      insert: function(doc, template) {
        //TODO: replace with actual userId
        doc.userId = request.userId;
        doc.requestId = request._id;
        return doc;
      } 
    }
  }
});

//TODO: unclear why this is blank after reloading page...
Template.addBid.rendered = function() {
  request = this.data;
};

Template.addBid.helpers({
  'requestType': function() {
    return this.requestType;
  }
});


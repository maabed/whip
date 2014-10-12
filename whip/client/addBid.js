AutoForm.hooks({
  insertBidsForm: {
    before: {
      insert: function(doc, template) {
        //TODO: replace with actual userId
        doc.userId = "test";
        return doc;
      } 
    }
  }
});

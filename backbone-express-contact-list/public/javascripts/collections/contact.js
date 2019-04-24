define(["backbone", "models/contact"], function(Backbone, Contact) {
  return Backbone.Collection.extend({
    model: Contact,
    url: "/contacts",
    comparator: "lastname"
  });
});

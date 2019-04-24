define([
  "backbone",
  "collections/contact",
  "views/contactcollection",
  "views/contactform",
  "datatables"
], function(
  Backbone,
  ContactCollection,
  ContactCollectionView,
  ContactFormView,
  DataTable
) {
  var Router = Backbone.Router.extend({
    initialize: function() {
      this._setupCollection();
    },
    routes: {
      "": "index"
    },
    _setupCollection: function() {
      if (this.collection) return;
      let data = $("#initialContent").html();
      this.collection = new ContactCollection(JSON.parse(data));
    },
    _renderView: function(view) {
      let formView = new ContactFormView();
      $(".app").html(view.render().el);
      $("#newContactForm").html(formView.render().el);
    },
    index: function() {
      let view = new ContactCollectionView({ collection: this.collection });
      this._renderView(view);
      $(document).ready(function() {
        $("#main-table").DataTable({
          ordering: false
        });
      });
    }
  });
  return Router;
});

define(["backbone", "jquery", "bootstrap"], function(Backbone, $, Bootstrap) {
  const ContactView = Backbone.View.extend({
    tagName: "tr",
    render: function() {
      let person = _.template(
        "<td>" +
          "<%= firstname %>" +
          "</td>" +
          "<td>" +
          "<%= lastname %>" +
          "</td>" +
          "<td>" +
          "<%= email %>" +
          "</td>" +
          "<td>" +
          "<%= phone %>" +
          "</td>" +
          "<td>" +
          "<div class='dropdown'>" +
          "<button class='btn-primary update-button dropdown-toggle' type='button' id='<%= _id %>' data-toggle='dropdown'>Update<span class='caret'></span></button>" +
          "<ul class='dropdown-menu' role='menu' aria-labelledby='<%= _id %>'>" +
          "<li role='presentation'>" +
          "<form  action='/contacts/update/<%= _id %>?_method=PUT' method='post' ' class='updateForm' role='menuitem'>" +
          "<input type='hidden' name='_method' value='PUT'>" +
          "First Name: " +
          "<br>" +
          "<input type='text' name='firstname' value='<%= firstname %>' required>" +
          "<br>" +
          "Last Name: " +
          "<br>" +
          "<input type='text' name='lastname' value='<%= lastname %>' required>" +
          "<br>" +
          "Email: " +
          "<br>" +
          "<input type='email' name='email' value='<%= email %>'>" +
          "<br>" +
          "Phone: " +
          "<br>" +
          "<input type='text' name='phone' value='<%= phone %>'>" +
          "<br>" +
          "<input type='submit' value='Save' class='btn-primary' onclick='wasClicked(event)'>" +
          "</form>" +
          "</li>" +
          "</ul>" +
          "</div>" +
          "</td>" +
          "<td>" +
          "<form method='post' action='/contacts/delete/<%= _id %>?_method=DELETE' id='deleteContact'>" +
          "<input type='hidden' name='_method' value='DELETE'>" +
          "<input type='submit' value='Delete' class='btn-danger' onclick='wasClicked(event)'>" +
          "</form>" +
          "</td>"
      );
      let html = person(this.model.attributes);
      this.$el.html(html);
      return this;
    }
  });
  return ContactView;
});

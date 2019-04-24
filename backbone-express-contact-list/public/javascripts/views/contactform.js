define(["backbone", "jquery"], function(Backbone, $) {
  const ContactFormView = Backbone.View.extend({
    className: "main-form",
    render: function() {
      let inputForm = _.template(
        "<form action='/contacts/add' method='post'>" +
          "<h3> Add A Contact </h3>" +
          "First Name: " +
          "<br>" +
          "<input type='text' name='firstname' placeholder='First Name' required>" +
          "<br>" +
          "Last Name: " +
          "<br>" +
          "<input type='text' name='lastname' placeholder='Last Name' required>" +
          "<br>" +
          "Email: " +
          "<br>" +
          "<input type='email' name='email' placeholder='Email'>" +
          "<br>" +
          "Phone: " +
          "<br>" +
          "<input type='text' name='phone' placeholder='Phone'>" +
          "<br>" +
          "<input type='submit' value='Submit' class='btn-primary'>" +
          "</form>"
      );
      let html = inputForm;
      this.$el.html(html);
      return this;
    }
  });
  return ContactFormView;
});

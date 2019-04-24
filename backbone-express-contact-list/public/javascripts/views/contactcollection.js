define(["backbone", "views/contact"], function(Backbone, ContactView) {
  const ContactCollectionView = Backbone.View.extend({
    initialize: function() {
      this.listenTo(this.collection, "reset", this.render);
    },
    tagName: "table",
    className: "table-striped table-bordered",
    id: "main-table",
    sortFirstNames: function() {
      let table, rows, switching, i, w, x, y, z, shouldSwitch;
      table = this.el;
      switching = true;

      while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < rows.length - 1; i++) {
          shouldSwitch = false;

          w = rows[i].getElementsByTagName("td")[0];
          x = rows[i + 1].getElementsByTagName("td")[0];
          y = rows[i].getElementsByTagName("td")[1];
          z = rows[i + 1].getElementsByTagName("td")[1];

          if (
            w.innerHTML.toLowerCase() > x.innerHTML.toLowerCase() &&
            y.innerHTML.toLowerCase() === z.innerHTML.toLowerCase()
          ) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }
    },
    render: function() {
      this.$el.html("");
      let tableHeader = _.template(
        "<thead>" +
          "<tr>" +
          "<th>First Name</th>" +
          "<th>Last Name</th>" +
          "<th>Email</th>" +
          "<th>Phone</th>" +
          "<th>Update</th>" +
          "<th>Delete</th>" +
          "</tr>" +
          "</thead>" +
          "<tbody>"
      );
      this.$el.append(tableHeader);
      this.collection.each(function(contact) {
        let contactView = new ContactView({ model: contact });
        this.$el.append(contactView.render().el);
      }, this);
      this.sortFirstNames();
      return this;
    }
  });

  return ContactCollectionView;
});

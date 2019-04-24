function wasClicked(e) {
  if (!confirm("Are you sure?")) e.preventDefault();
}

(function() {
  $("#main-table").DataTable();
});

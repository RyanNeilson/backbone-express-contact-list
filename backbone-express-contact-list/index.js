const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const contacts = require("./routes/contacts");
const methodOverride = require("method-override");

//Set up views
app.set("port", process.env.PORT || 8080);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//./routes/contacts.js
app.get("/", contacts.index);
app.get("/contacts", contacts.findAll);
app.get("/contacts/:id", contacts.findOne);
app.post("/contacts/add", contacts.createNew);
app.delete("/contacts/delete/:id", contacts.deleteOne);
app.put("/contacts/update/:id", contacts.updateOne);

http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});

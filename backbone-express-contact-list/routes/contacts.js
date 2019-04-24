const MongoClient = require("mongodb").MongoClient;
let ObjectID = require("mongodb").ObjectID;
let dbUrl = require("../db.js").dbUrl;

exports.index = (req, res, next) => {
  MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) return console.log(err);

    let dbase = db.db("contacts");

    dbase
      .collection("contact")
      .find()
      .toArray((err, results) => {
        let stringData = JSON.stringify(results);
        res.render("index", { appData: stringData });
      });
    db.close();
  });
};

exports.createNew = (req, res, next) => {
  MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) return console.log(err);

    let dbase = db.db("contacts");

    let contact = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone
    };

    dbase.collection("contact").insertOne(contact, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("Contact added!");
      res.writeHead(302, {
        Location: "/"
      });
      res.end();
      db.close();
    });
  });
};

exports.findAll = (req, res, next) => {
  MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) return console.log(err);

    let dbase = db.db("contacts");

    dbase
      .collection("contact")
      .find()
      .toArray((err, results) => {
        res.send(results);
      });
    db.close();
  });
};

exports.findOne = (req, res, next) => {
  MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) return console.log(err);

    let dbase = db.db("contacts");

    let id = ObjectID(req.params.id);
    dbase
      .collection("contact")
      .find(id)
      .toArray((err, result) => {
        if (err) {
          throw err;
        }

        res.send(result);
      });
    db.close();
  });
};

exports.updateOne = (req, res, next) => {
  MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) return console.log(err);

    let dbase = db.db("contacts");
    var id = {
      _id: new ObjectID(req.params.id)
    };

    dbase.collection("contact").updateOne(
      id,
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          phone: req.body.phone
        }
      },
      (err, result) => {
        if (err) {
          throw err;
        }

        console.log("Contact updated!");
        res.writeHead(302, {
          Location: "/"
        });
        res.end();
      }
    );
    db.close();
  });
};

exports.deleteOne = (req, res, next) => {
  MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) return console.log(err);

    let dbase = db.db("contacts");

    let id = ObjectID(req.params.id);

    dbase.collection("contact").deleteOne({ _id: id }, (err, result) => {
      if (err) {
        throw err;
      }
      console.log("Contact deleted!");
      res.writeHead(302, {
        Location: "/"
      });
      res.end();
    });
    db.close();
  });
};

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');

const Worker = require('./models/workers.js');
const Admin = require('./models/admins.js');
const Area = require('./models/areas.js');

const db = require("./config/database");

const app = express();

db.authenticate()
	.then(() => console.log("Connection has been established successfully."))
	.catch((err) => console.error("Unable to connect to the database:", err));

app.use(cors());

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", (req, res) => res.sendFile(path.join(__dirname,'/public/index.html')));
app.get("/api", (req, res) => res.send("Server API"));

app.post("/api/workers", (req, res, next) => {
    const worker = new Worker({
      name: req.body.name,
      job: req.body.job,
      email: req.body.email,
      lphone: req.body.lphone,
      mphone: req.body.mphone,
      domain: req.body.domain,
      project: req.body.project,
      foto: req.body.foto,
      stand: req.body.stand
    });
    worker.save().then(createdWorker => {
      res.status(201).json({
        message: "Worker added successfully",
        workerId: createdWorker._id
      });
    });
  });

app.get("/api/workers", (req, res, next) => {
    Worker.findAll().then(documents => {
      res.status(200).json({
        message: "Workers fetched successfully!",
        workers: documents
      });
    });
  });

  app.delete("/api/workers/:id", (req, res) => {
    Worker.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((result) => {
        res.status(200).json({
          message: "Worker deleted!",
        });
      })
      .catch((err) => {
        return res.status(401).json({
          message: "Delete failed!, " + err,
        });
      });
  });

  app.post("/api/admins", (req, res, next) => {
    const admin = new Admin({
      name: req.body.name,
      password: req.body.password
    });
    admin.save().then(createdAdmin => {
      res.status(201).json({
        message: "Admin added successfully",
        adminId: createdAdmin._id
      });
    });
  });

app.get("/api/admins", (req, res, next) => {
    Admin.findAll().then(documents => {
      res.status(200).json({
        message: "Admins fetched successfully!",
        admins: documents
      });
    });
  });

app.get("/api/areas", (req, res, next) => {
    Area.findAll().then(documents => {
      res.status(200).json({
        message: "Areas fetched successfully!",
        areas: documents
      });
    });
  });

app.put("/api/workers/:id", (req, res) => {
      Worker.update(
        {
          id: req.body.id,
          name: req.body.name,
          job: req.body.job,
          domain: req.body.domain,
          project: req.body.project,
          email: req.body.email,
          lphone: req.body.lphone,
          mphone: req.body.mphone,
          foto: req.body.foto,
          stand: req.body.stand
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then((document) => {
          res.status(200).json({
            message: "Update successful!",
          });
        })
        .catch((err) => {
          return res.status(401).json({
            message: "Update failed!, " + err,
          });
        });
    })
module.exports = app;

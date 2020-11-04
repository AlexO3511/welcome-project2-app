const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const BusinessModel = require("../models").Business; 

//Fetch database from fruits table 
router.get("/cityguide", (req, res) => {
    BusinessModel.findAll().then((businesses) => {
      res.render("businesses/index.ejs", {
        businesses: businesses,
      });
    });
  });


  module.exports = router;
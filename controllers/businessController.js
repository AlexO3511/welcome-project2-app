const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const BusinessModel = require("../models").Business; 

//Fetch database from fruits table 
router.get("/cityguide", (req, res) => {
    res.render("businesses/index.ejs")
    BusinessModel.findAll().then((businesses) => {
      res.render("businesses/index.ejs", {
        businesses: businesses,
      });
    });
  });


  module.exports = router;
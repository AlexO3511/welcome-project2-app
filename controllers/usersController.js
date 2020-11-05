const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const BusinessModel = require("../models").Business;

// GET USERS PROFILE
// router.get("/profile/:id", (req, res) => {
//   console.log(req.user);
//   UserModel.findByPk(req.params.id).then((userProfile) => {
//     res.render("users/profile.ejs", {
//       user: userProfile,
//     });
//   });
// });

//EDIT USER PROFILE
// router.put("/profile/:id", (req, res) => {
//   UserModel.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//     returning: true,
//   }).then((updatedUser) => {
//     res.redirect(`/users/profile/${req.params.id}`);
//   });
// });
//Me attempting
router.get("/profile/:id", function (req, res) {
  UserModel.findByPk(req.params.id).then((userProfile) => {
    BusinessModel.findAll().then((allBusinesses) => {
      res.render("users/profile.ejs", {
        user: userProfile,
        business: allBusinesses,
      });
    });
  });
});

router.put("/profile/:id", (req, res) => {
  console.log(req.body);
  UserModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((updatedProfile) => {
    BusinessModel.findByPk(req.body.business).then((foundBusiness) => {
      UserModel.findByPk(req.params.id).then((foundUser) => {
        foundUser.addBusiness(foundBusiness);
        res.redirect(`/users/profile/${req.params.id}`);
      });
    });
  });
});
//DELETE USER PROFILE
router.delete("/:id", (req, res) => {
  UserModel.destroy({where: {id: req.params.id} }).then(() =>{
    res.redirect("/");
  });
  });
module.exports = router;

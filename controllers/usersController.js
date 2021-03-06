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
//Edit User's Profile 
router.get("/:id/edit", function (req, res) {
  UserModel.findByPk(req.params.id).then((userProfile) => {
    BusinessModel.findAll().then((allBusinesses) => {
      res.render("users/edit.ejs", {
        user: userProfile,
        business: allBusinesses,
      });
    });
  });
});

router.put("/:id/edit", (req, res) => {
  console.log(req.body);
  UserModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((updatedProfile) => {
    BusinessModel.findByPk(req.body.business).then((foundBusiness) => {
      UserModel.findByPk(req.params.id).then((foundUser) => {
        foundUser.addBusiness(foundBusiness);
        res.redirect(`/users/${req.params.id}/edit`);
      });
    });
  });
});

//Show User Profile 
//Me attempting
// router.get("/profile/:id", function (req, res) {
//   UserModel.findByPk(req.params.id).then((userProfile) => {
//     BusinessModel.findAll().then((allBusinesses) => {
//       res.render("users/profile.ejs", {
//         user: userProfile,
//         business: allBusinesses,
//       });
//     });
//   });
// });
router.get("/profile/:id", (req, res) => {
  UserModel.findByPk(req.params.id, {
    include: [
      {
        model: BusinessModel,
      },
    ],
  }).then((user) => {
    res.render("users/profile.ejs", {
      user: user,
    });
  });
});

// router.put("/profile/:id", (req, res) => {
//   console.log(req.body);
//   UserModel.update(req.body, {
//     where: { id: req.params.id },
//     returning: true,
//   }).then((updatedProfile) => {
//     BusinessModel.findByPk(req.body.business).then((foundBusiness) => {
//       UserModel.findByPk(req.params.id).then((foundUser) => {
//         foundUser.addBusiness(foundBusiness);
//         res.redirect(`/users/profile/${req.params.id}`);
//       });
//     });
//   });
// });
//Fetch User Network 

router.get("/profile/:id/network", function(req, res){
  UserModel.findAll().then((allUsers)=>{
    res.render("users/userNetwork.ejs",{
      user: allUsers
    })
  })
})

//DELETE USER PROFILE
router.delete("/:id", (req, res) => {
  UserModel.destroy({where: {id: req.params.id} }).then(() =>{
    res.redirect("/");
  });
  });
module.exports = router;

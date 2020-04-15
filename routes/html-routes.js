// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // app.get("/", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });

  // app.get("/login", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  // // Here we've add our isAuthenticated middleware to this route.
  // // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });

  // current book
  app.get("/", function(req, res) {
    db.Book.findAll({
      where: {
        id: [1, 2, 3]
      }
    }).then(books => {
      res.render("index", { book_data: books });
    });
  });
  
// upcoming books
  app.get("/", function(req, res) {
    db.Book.findAll({
      where: {
        id: 1
      }
    }).then(books => {
      res.render("index", { book_data: books });
    });
  });


  // app.get("/")
  // res.render(books)
};



// need an each statement with property, but needs to be an array in database, with findAll and limit number things returned to you with sqlize syntax
// limit to 3, sequelize code syntax

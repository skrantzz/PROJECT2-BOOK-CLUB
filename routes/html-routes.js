// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

function getCurrentWeekID() {
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7) - 15;
}

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

    //Get the current WeekID

    currentWeek = getCurrentWeekID();

    if (currentWeek <= 3) {
      previousWeeks = [1,2,3];
    } else {
      previousWeeks = [currentWeek - 1, currentWeek - 2, currentWeek - 3];
    }

    //get the previous books
    db.Book.findAll({
      where: {
        id: previousWeeks
      }
    }).then(books => {
      //get the current book
      db.Book.findAll({
        where: {
          id: currentWeek
        }
      }).then(currentBook => {
        res.render("index", { book_data: books, current_book: currentBook})
      });
    });
  });

// res.render("index", { book_data: books });

  // app.get("/")
  // res.render(books)
};



// need an each statement with property, but needs to be an array in database, with findAll and limit number things returned to you with sqlize syntax
// limit to 3, sequelize code syntax

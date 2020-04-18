
var path = require("path");
var db = require("../models");

function getCurrentWeekID() {
  var d = new Date();
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7) - 15;
}

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  // current book
  app.get("/", function(req, res) {

    //Get the current WeekID

    currentWeek = getCurrentWeekID();

    if (currentWeek <= 3) {
      previousWeeks = [2,3,4];
    } else {
      previousWeeks = [currentWeek - 1, currentWeek - 2, currentWeek - 3];
    }

    console.log('somethings changed');
    
    //get the previous books
    db.Book.findAll({
      where: {
        id: previousWeeks
      }
    }).then(books => {
      //get the current book
      db.Book.findOne({
        raw: true,
        where: {
          id: currentWeek
        }
      }).then(currentBook => {
        console.log(currentBook);
        res.render("index", { book_data: books, current: currentBook})
      });
    });
  });
  app.get("/about", function(req, res) {
    res.render("about", {})
   
  });
  
  app.get("/discussion", function(req, res) {
    // get the current week id
    currentWeek = getCurrentWeekID();
    // look up database for book of the current week
    db.Book.findOne({
      raw: true,
      where: {
        id: currentWeek
      }
    }).then(currentBook => {
      console.log("DISCUSSION PAGE", currentBook)
      res.render("discussion", {current: currentBook})
    });
    // when we find that  book, we need to send the discussion with the book data
  });

};

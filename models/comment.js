// Creating our Comment model
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    // The email cannot be null, and must be a proper email before creation
    postedDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    posterName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bookID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING
    }
  });
  return Comment;
};

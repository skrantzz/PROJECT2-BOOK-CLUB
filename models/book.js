// Creating our Book model
module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    // The email cannot be null, and must be a proper email before creation
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publishDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coverArtURL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weekID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Book;
};

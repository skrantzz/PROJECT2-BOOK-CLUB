module.exports = function(sequelize, DataTypes) {
    var Book = sequelize.define('Book', {
        bid: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    } );
    return Book;
};

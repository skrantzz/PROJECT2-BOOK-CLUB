module.exports = function(sequelize, DataTypes) {
    var BookOfTheWeek = sequelize.define('BookOfTheWeek',{
        wid: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        bid: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        weekStart:{
            type: DataTypes.DATEONLY,
            allowNull: false,
            unique: true
        }

    });
    return BookOfTheWeek;

};

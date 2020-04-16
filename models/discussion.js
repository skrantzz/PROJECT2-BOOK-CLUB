module.exports = function(sequelize, DataTypes) {
    var Discussion = sequelize.define('Discussion',{
        did: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        wid: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        datePosted:{
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        }
    });
    return Discussion;
}; 

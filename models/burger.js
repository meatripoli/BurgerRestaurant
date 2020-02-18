module.exports = function(sequelize, DataTypes) {
    var Sandwich = sequelize.define("sandwich", {
        sandwiches_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ate: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Sandwich;
  };
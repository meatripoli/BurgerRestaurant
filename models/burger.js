module.exports = (sequelize,DataTypes){
    const Sandwich = sequelize.define('sandwich',{
    sandwiches_name:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    ate: {
        type: DataTypes.BOOLEAN
        ,defaultValue: false
    }

    });
    return Sandwich;
};
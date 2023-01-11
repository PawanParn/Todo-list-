const { sequelize } = require('./index');
const { DataTypes } = require('sequelize');

module.exports = (sequelize , DataTypes) => {
    const User = sequelize.define('User', {
        username : {
            type : DataTypes.STRING,
            allowNull: false ,
            unique : true ,
            validate : {
                notEmpty :true
            }
        },
        email : {
            type : DataTypes.STRING,
            allowNull: false ,
            unique : true ,
            validate : {
                isEmail :true
            }
        },
        password : {
            type : DataTypes.STRING,
            allowNull: false ,
            validate : {
                notEmpty :true
            } 
        }
    },{
        underscored:true
    }
    );

    User.associate = (db) => {
        User.hasMany(db.Todo, {
            foreignKey: {
                allownull:false,
                name: 'userId'
            }
        });
    }

return User;

}
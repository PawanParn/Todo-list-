const { sequelize } = require('./index');
const { DataTypes } = require('sequelize');

module.exports = (sequelize , DataTypes) => {
    const Todo = sequelize.define('Todo', {
        title : {
            type : DataTypes.STRING,
            allowNull: false ,
            validate : {
                notEmpty :true
        }
    },
        completed : {
            type : DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull:false
}   

},{
        underscored:true
    }
);

Todo.associate = (db) => {
    Todo.belongsTo(db.User, {
        foreignKey: {
            allownull:false,
            name: 'userId'
        },
        onDelete : 'RESTICT'
    });
}
return Todo;

}
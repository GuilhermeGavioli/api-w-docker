const { Sequelize, DataTypes } = require("sequelize");

const  connection  = require("../database/connection");

const Post = require("./post");

const User = connection.define('user', {

    id: {
        type: DataTypes.STRING(),
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    
}, {
    timestamps: false
})

User.hasMany(Post)

module.exports = User
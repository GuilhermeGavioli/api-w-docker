const { Sequelize, DataTypes } = require("sequelize");

const connection = require("../database/connection");



const Post = connection.define('post', {

    id: {
        type: DataTypes.STRING(),
        allowNull: false,
        primaryKey: true
      },
      text: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      owner: {
        type: DataTypes.STRING(),
        allowNull: false,
        references: { model: 'users', key: 'id' }
      },
      createdAt: {
        type: DataTypes.DATE(),
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE(),
        allowNull: true,
  }
     
    
}, {
    timestamps: true
})

module.exports = Post
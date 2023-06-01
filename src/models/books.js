const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const Books = sequelize.define("Books", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Library: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Books;

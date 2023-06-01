const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");
const Books = require("./books");

const Library = sequelize.define("Library", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
});

Library.hasMany(Books, { as: 'books', foreignKey: 'libraryId' });
Books.belongsTo(Library, { as: 'library', foreignKey: 'libraryId' });

module.exports = Library;

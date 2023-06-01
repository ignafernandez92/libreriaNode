const { getBook, createBook, updateBook, deleteBook } = require("./books");
const { createLibrary, getLibrary, addBookToLibrary} = require("./library");

module.exports = { getBook, getLibrary, createBook , updateBook , deleteBook, createLibrary, addBookToLibrary };

const bookProvider = require("../providers/bookProvider");

const getBook = async (id) => {
  return await bookProvider.getBook(id);
};

const getBooks = async (options) => {
  return await bookProvider.getBooks(options);
};

const createBook = async (book) => {
  return await bookProvider.createBook(book);
};

const updateBook = async (id, book) => {
  return await bookProvider.updateBook(id, book);
};

const deleteBook = async (id) => {
  return await bookProvider.deleteBook(id);
};

const queryBook = (name) => {};

module.exports = { getBook, getBooks, createBook, updateBook, deleteBook };

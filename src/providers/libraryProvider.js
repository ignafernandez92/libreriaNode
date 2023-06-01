const { Op } = require("sequelize");
const { Library } = require("../models");
const bookProvider = require('./bookProvider');

const createLibrary = async (LibraryOptions) => {
  try {
    const newLibrary = await Library.create(LibraryOptions);
    const library = await library.create({ used: false, libraryId: newLibrary.id });
    return newLibrary;
  } catch (error) {
    throw error;
  }
  };



  const getLibrary = async (id) => {
    try {
      const library = await library.findByPk(id, { include: [{ all: true }] });
      if (library) {
        return library;
      } else {
        throw new Error("Libreria no encontrada");
      }
    } catch (error) {
      throw error;
    }
  };

  const addBookToLibrary = async (libraryId, title, author, year) => {
    try {
      const library = await getLibraryById(libraryId);
      const newBook = await bookProvider.createBook(library, title, author, year);
      library.books.push(newBook);
      return newBook;
    } catch (error) {
      throw error;
    }
  };

  module.exports = {
    createLibrary,
    addBookToLibrary,
    getLibrary,
  };
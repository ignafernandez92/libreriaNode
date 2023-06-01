const { Library } = require("../models");
const libraryProvider = require("../providers/libraryProvider");

const createLibrary = async (libraryData) => {
    try {
      const newLibrary = await libraryProvider.createLibrary(libraryData);
      return newLibrary;
    } catch (error) {
      throw error;
    }
  };


const getLibrary = async (id) => {
    return await libraryProvider.getLibrary(id);
  };
  
  
  const addBookToLibrary = async (libraryId, bookData) => {
    try {
      const newBook = await libraryProvider.addBookToLibrary(libraryId, bookData);
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
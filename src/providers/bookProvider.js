const { Op } = require("sequelize");
const { Books } = require("../models");
const libraryProvider = require('./libraryProvider');

function addBookToLibrary(libraryId, title, author, year) {
  return libraryProvider.createBook(libraryId, title, author, year);
}

const createBook = async (BooksOptions) => {
  try {
    const newBook = await Books.create(BooksOptions);
    const book = await book.create({ used: false, bookId: newBook.id });
    return newBook;
  } catch (error) {
    throw error;
  }
};

const getBook = async (id) => {
  try {
    const book = await Books.findByPk(id, { include: [{ all: true }] });
    if (book) {
      return book;
    } else {
      throw new Error("Libro no encontrado");
    }
  } catch (error) {
    throw error;
  }
};

const getBooks = async (criteria) => {
  try {
    let options = { include: [{ all: true }] };
    if (criteria) {
      options = { ...options, where: { [Op.or]: criteria } };
    }
    const books = await Books.findAll(options);

    if (books) {
      return books;
    } else {
      throw new Error(
        "No se encontraron libros con ese criterio de busqueda"
      );
    }
  } catch (error) {
    throw error;
  }
};

const updateBook = async (bookId, BooksOptions) => {
  try {
    await getBook(bookId);
    const [numRowsUpdated] = await Books.update(BooksOptions, {
      where: { id: bookId },
    });
    console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`);
    return Books.findByPk(userId);
  } catch (error) {
    throw error;
  }
};

const deleteBook = async (bookId) => {
  try {
    return Books.destroy({ where: { id: bookId } });
  } catch (error) {
    throw error;
  }
};


module.exports = {
  createBook,
  deleteBook,
  getBooks,
  getBook,
  updateBook,
  addBookToLibrary,
};

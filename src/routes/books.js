const express = require("express");
const bodyParser = require("body-parser");
const bookService = require("../services/books");
const router = express.Router();



router.get("/:bookId", async (req, res) => {
  const reqBook = req.Books;
  const bookId = req.params.bookId;
  try {
    const book = await bookService.getBook(bookId);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  const { titulo, autor } = req.query;
  try {
    let books;
    if (Object.keys(req.query).length !== 0) {
      books = await bookService.getBooks({
        ...(titulo && { titulo }),
        ...(autor && { autor }),
      }); 
    } else {
      books = await bookService.getBooks();
    }

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const {id, isbn, titulo, autor, year,library} = req.body;
  try { 
    const newBook = await bookService.createBook({
      isbn,
      titulo,
      autor,
      year,
      library,
    });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  const {id, isbn, titulo, autor, year, library} = req.body;
  try {
    const newBook = await bookService.updateBook(bookId, {
      id,
      isbn,
      titulo,
      autor,
      year,
      library
    });
    res.status(200).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  try {
    const book = await bookService.deleteBook(bookId);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

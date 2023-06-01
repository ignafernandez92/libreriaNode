const express = require("express");
const bodyParser = require("body-parser");
const logging  = require("./middleware");
const booksRouter = require("./routes/books");
const libraryRouter = require("./routes/library");
const { initializeDB } = require("./config/dbConfig");
const PORT = 8080;

const app = express();
app.use(bodyParser.json());
app.use("/book", booksRouter);
app.use("/library", libraryRouter);



app.listen(PORT, async () => {
    await initializeDB();
    console.log(
      `Server escuchando peticiones en el puerto: ${PORT}`
    );
  });
  
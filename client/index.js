const axios = require("axios");

axios
  .post("http://localhost:8080/login", payload)
  .then(function (response) {
    console.log(response.data);
    const token = response.data.token;
    axios
      .get("http://localhost:8000/book/1", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const usuario = response.data;
        console.log("Libro encontrado!!");
        console.log(
          `El libro se llama ${book.titulo} y su autor es  ${usuario.autor}`
        );
      });
  })
  .catch(function (error) {
    console.log(error);
  });

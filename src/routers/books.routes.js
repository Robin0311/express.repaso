const { Router } = require("express");
const {
  getBooks,
  createBooks,
  updateBooks,
  deleteBooks,
} = require("../controllers/books.controllers");
const routers = Router();

// localhost:500/books
routers.get("/", getBooks);
routers.post("/", createBooks);

// localhost:5000/books/5
routers.put("/:id", updateBooks);
routers.delete("/:id", deleteBooks);

module.exports = routers;

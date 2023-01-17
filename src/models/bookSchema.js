const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  nameBook: { type: String, require: true },
  dateP: { type: Date },
  page: { type: Number },
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;

const Book = require("../models/bookSchema");
const { msjP, resApi, msjPError } = require("../helpers/helpers");

const getBooks = async (req, res) => {
  try {
    msjP("Lista de Libros");
    const book = await Book.find({});
    resApi(res, "success", book);
  } catch {
    msjPError("Error en la consulta");
  }
};

const createBooks = async (req, res) => {
  try {
    msjP("Crear Libros");
    const book = await Book.create(req.body);
    resApi(res, "success", book);
  } catch {
    msjPError("Error en la consulta");
  }
};
const updateBooks = async (req, res) => {
  try {
    msjP("Actualizacion de Libros");
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    resApi(res, "success", book);
  } catch {
    msjPError("Error en la consulta");
  }
};
const deleteBooks = async (req, res) => {
  try {
    msjP("Eliminando Libros");
    const book = await Book.findByIdAndDelete(req.params.id);
    resApi(res, "success", book);
  } catch {
    msjPError("Error en la consulta");
  }
};

module.exports = {
  getBooks,
  createBooks,
  updateBooks,
  deleteBooks,
};

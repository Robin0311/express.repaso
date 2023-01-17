const { Router } = require('express')
const { getbooks } = require('../controllers/books.controllers')
console.log('hola')
const routers = Router()

routers.get('/', getbooks)

module.exports = routers
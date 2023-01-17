const getBooks = (req, res) => {
    res.send('Estoy aqui en books')
}

const createBooks = (req, res) => {
    res.send('Estoy creando books')
}
const updateBooks = (req, res) => {
    res.send('Estoy actualizando books')
}
const deleteBooks = (req, res) => {
    res.send('Estoy eliminando books')
}

module.exports = {
    getBooks,createBooks,updateBooks,deleteBooks
}
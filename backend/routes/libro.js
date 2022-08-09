const express = require('express');
const LibroController = require('../controllers/libro')
const api = express()
const upload = require('../libs/multer')

api.get('/obter_libros', LibroController.obtenerTodoLibros)
api.get('/obter_libro/:id', LibroController.ObtenerLibroId)
api.get('/vender_libro/:id/:id2', LibroController.venderLibro)
api.get('/buscar', LibroController.busquedaLibro)
api.post('/registrar_libro', upload.single('image'), LibroController.agregarLibro)
api.put('/editar_libro/:id', LibroController.editarLibro)
api.delete('/eliminar_libro/:id', LibroController.eliminarLibro)

// api.get('/prueba',LibroController.prueba)

module.exports = api
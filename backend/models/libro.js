const {Schema, model} = require('mongoose') 

const libroSchema = new Schema({
    nombreLibro:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    existencias:{
        type: Number,
        required: true
    },
    precio:{
        type: String,
        required: true
    },
    blnActivo:{
        type: Boolean,
        default: true
    },
    imagePath:{
        type: String,
        required: true
    }
},{
    timestamps:{
        createdAt: 'createdAt:',
        updateAt: 'updateAt:'
}})

module.exports = model('Libro', libroSchema)
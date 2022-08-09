const Libro = require('../models/libro')
const Empleado = require('../models/empleado')

const fs = require('fs-extra')
const path = require('path')


const obtenerTodoLibros = async (req,res) => {

    try {
        const librosObtenidas = await Libro.find();
        if (librosObtenidas.length === 0) {
            res.status(404).send({
                msg: "No hay libros",
            });
        } else {
            res.status(200).send({
                msg: "Libros obtenidos",
                cont: librosObtenidas,
            });
        }
    } catch (error) {
        res.status(500).send({
            msg: "Ocurrio un error de sistema vueva a intentarlo",
        });
    }

}

const ObtenerLibroId = async (req, res) => {
  try {
    let {id} = req.params;
    if(!id){
        res.status(400).send({
            msg: 'No se recivio un id correcto'
        })
    }
    const libroObtenido = await Libro.findById(id);
    if (!libroObtenido) {
      res.status(404).send({
        msg: "El libro no existe",
      });
    } else {
      res.status(200).send({
        msg: "Obtenido con exito",
        cont: libroObtenido,
      });
    }
  } catch (error) {
    res.status(500).send({
        msg: "Ocurrio un error de sistema vueva a intentarlo",
    });
  }
}

const agregarLibro = async (req,res)=>{

    
    try {
        const {nombreLibro, descripcion, existencias, precio} = req.body
        const newLibro = {nombreLibro, descripcion, existencias, precio, imagePath: req.file.path  }
        const libroAgregado = new Libro(newLibro)
        await libroAgregado.save()
        if(!libroAgregado){
            res.status(500).send({
                msg: 'No se pudo agregar el libro intente de nuevo'
            })
        }else{
            res.status(200).send({
                msg: 'Libro agregado',
                cont: libroAgregado
            })
        }
        
    } catch (error) {
        res.status(500).send({
            msg: 'Ocurrio un error de nuestra parte, intente de nuevo',
            cont: error
        })
    }

}

const editarLibro = async (req,res)=>{

    try {
        let {id} = req.params
        let {nombreLibro, descripcion, existencias} = req.body
    
        if(!id){
            res.status(400).send({
                msg: 'No se recibio un id valido'
            })
        }
    
        const libroEncontrado = await Libro.findById(id)
        if(!libroEncontrado){
            res.status(404).send({
                msg: 'No se encuentra el libro'
            })
        }else{
    
            const libroEditado = await Libro.findByIdAndUpdate(id,{nombreLibro, descripcion, existencias},{new:true})
            if(!libroEditado){
                res.status(500).send({
                    msg: 'No se pudo editar el libro intente de nuevo'
                })
            }else{
                res.status(200).send({
                    msg: 'Exito al editar',
                    cont: libroEditado
                })
            }
        }
        
    } catch (error) {
        res.status(500).send({
            msg: 'Ocurrio un error de nuestra parte, intente de nuevo'
        })
    }

}

const venderLibro = async (req, res)=>{
    
    let {id, id2} = req.params
    
        if(!id){
            res.status(400).send({
                msg: 'No se recibio un id valido'
            })
        }

        

        const libroEncontrado = await Libro.findById(id)
        const usuarioEncontrado = await Empleado.findById(id2)
        if(!usuarioEncontrado){
            res.status(404).send({
                msg: 'No se encuentra el empleado'
            })
        }
        if(!libroEncontrado){
            res.status(404).send({
                msg: 'No se encuentra el libro o ya no existe'
            })
        }else{
    
            const libroVendido = await Libro.findByIdAndUpdate(id,{existencias:libroEncontrado.existencias-1},{new:true})
            const libroVendidoEmpleado = await Empleado.findByIdAndUpdate(id2,{librosVendidos:usuarioEncontrado.librosVendidos+1},{new:true})
            if(!libroVendido){
                res.status(500).send({
                    msg: 'No se pudo vender el libro intente de nuevo'
                })
            }else{
                res.status(200).send({
                    msg: 'Exito al vender',
                    cont: libroVendido,
                })
            }
        }
    
}

// const prueba = async(req, res)=>{
//     let {name} = req.query

//     if(name==""){
//         const libroEncontrado = await Libro.find()
//         res.status(200).send({
//             libro: libroEncontrado
//         })
//     }else{
//         console.log(name);
//         const libroEncontrado = await Libro.find({'nombreLibro':name})

//         res.status(200).send({
//             libro: libroEncontrado
//         })
//     }
    

// }

const busquedaLibro = async(req, res)=>{
    try {
        let {name}= req.query

        if(name==""){
            const libroEncontrado = await Libro.find()
            res.status(200).send({
                libro: libroEncontrado
            })
        }else{
            console.log(name);
            const libroEncontrado = await Libro.find({'nombreLibro':name})
            if(libroEncontrado.length == 0){
                res.status(404).send({
                    msg: "No hay incidencias"
                })
            }else{
                res.status(200).send({
                    msg: "Libro/s ecnontrados",
                    libro: libroEncontrado
                })
            }
        }
    } catch (error) {
        res.status(500).send({
            msg: 'Oscurrio un errror de nuestra parte',
            err:error
        })
    }
    
}

const eliminarLibro = async (req,res)=>{

    try {
        let {id} = req.params
        if(!id){
            res.status(400).send({
                msg: 'No se recibio un id valido'
            })
        }
    
        const libroEncontrado = await Libro.findById(id)
        if(!libroEncontrado){
            res.status(404).send({
                msg: 'No se encuentra el libro o no existe'
            })
        }else{
    
            const libroEliminado = await Libro.findByIdAndUpdate(id,{blnActivo:false},{new:true})
            if(!libroEliminado){
                res.status(500).send({
                    msg: 'No se pudo eliminar el libro intente de nuevo'
                })
            }else{
                res.status(200).send({
                    msg: 'Exito al eliminar',
                    cont: libroEliminado
                })
            }
        }
        
    } catch (error) {
        res.status(500).send({
            msg: 'Ocurrio un error de nuestra parte, intente de nuevo'
        })
        console.log(error);
    }
}


module.exports = {
    obtenerTodoLibros,
    ObtenerLibroId,
    agregarLibro,
    editarLibro,
    eliminarLibro,
    venderLibro,
    // prueba
    busquedaLibro
}
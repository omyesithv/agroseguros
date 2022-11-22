const Producto = require("../models/producto.model");

let response = {
    msg: "",
    exito:false
}


exports.create = function(req,res) {
    let producto = new Producto({

        producto: req.body.producto,
        cantidad: req.body.cantidad,
        ubicacion: req.body.ubicacion,
        precio: req.body.precio
    })
    
    producto.save(function(err){
        if(err) {
            console.log(err),
            response.exito = false,
            response.msg = "El producto se guadó corrctamente"
            res.json(response)
            return;
    
        }
    
        response.exito = true,
        response.msg = "El producto falló al intentar guardarse"
        res.json(response)
    })
    
}

exports.find = function(req,res)
{
    Producto.find(function(err,producto){
        res.json(producto)
    })
}


exports.findOne = function(req,res)
{
    Producto.findOne({_id : req.params.id},function(err,producto){
        res.json(producto)
    })
}

exports.update = function(req,res)
{
    let producto = {
        producto: req.body.producto,
        cantidad: req.body.cantidad,
        ubicacion: req.body.ubicacion,
        precio: req.body.precio
       
   
    }

    Producto.findByIdAndUpdate(req.params.id,{$set :producto},
        function(err){
        if(err)
        {
            console.error(err),
            response.exito = false,
            response.msg = "Error al intentar Modificar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto fue modificado con Exito"
        res.json(response)
           
    })

}  


exports.remove = function(req,res)
{
    Producto.remove({_id : req.params.id},function(err){
        if(err)
        {
           console.error(err),
           response.exito = false,
           response.msg = "Error al intentar Eliminar el producto"
           res.json(response)
           return;
        }
    
        response.exito = true,
        response.msg = "El producto fué eliminado con Exito"
        res.json(response)
               
    })
    
}










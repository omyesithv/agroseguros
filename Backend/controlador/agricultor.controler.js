const Agricultor = require("../models/agricultores.model");
let response ={
    msg:"",
    exito:false
}

exports.create = function(req,res)
{
    let agricultor = new Agricultor({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        cedula: req.body.cedula,
        contraseña: req.body.contraseña,
        matriculai: req.body.matriculai,
        agremiacion: req.body.agremiacion,
        rut: req.body.rut
   
    })
    agricultor.save(function(err)
    {
        if(err)
        {
            console.error(err),
            response.exito = false,
            response.msg = "Error al intentar Guardar"
            res.json(response)
            return;
        }

        response.exito = true,
        response.gmsg = "Guardado con Exito"
        res.json(response)
    })              
}

exports.find = function(req,res)
{
    Agricultor.find(function(err,agricultor){
        res.json(agricultor)
    })
}

exports.findOne = function(req,res)
{
    Agricultor.findOne({_id : req.params.id},function(err,agricultor){
        res.json(agricultor)
    })
}

exports.login = function(req,res,next)
{
    Agricultor.findOne({correo : req.body.correo,contraseña : req.body.contraseña},function(err,agricultor){
        res.json(agricultor)
    })
}

exports.update = function(req,res)
{
    let agricultor = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        cedula: req.body.cedula,
        contraseña: req.body.contraseña,
        matriculai: req.body.matriculai,
        agremiacion: req.body.agremiacion,
        rut: req.body.rut
   
    }

    Agricultor.findByIdAndUpdate(req.params.id,{$set :agricultor},
        function(err){
        if(err)
        {
            console.error(err),
            response.exito = false,
            response.msg = "Error al intentar Modificar"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Modificado con Exito"
        res.json(response)
           
    })

}    

exports.remove = function(req,res)
{
    Agricultor.remove({_id : req.params.id},function(err){
        if(err)
        {
           console.error(err),
           response.exito = false,
           response.msg = "Error al intentar Eliminar"
           res.json(response)
           return;
        }
    
        response.exito = true,
        response.msg = "Eliminado con Exito"
        res.json(response)
               
    })
    
}
    

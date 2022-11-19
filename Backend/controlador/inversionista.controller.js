const Inversionista = require("../models/inversionistas.model");

let response = {
    msg: "",
    exito:false
}
 
exports.create = function(req,res) { 
   let inversionista = new Inversionista({ 

    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    password: req.body.password,
    rut: req.body.rut,
    estadofinan: req.body.estadofinan 


})

    inversionista.save(function(err)
    {
        if(err)
        {
            console.error(err),
            response.exito = false,
            response.msg = "Error al intentar Guardar",
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Guardado con Exito"
        res.json(response)
    })              
}
//Buscar Todo
exports.find = function(req,res)
{
    Inversionista.find(function(err,inversionista){
        res.json(inversionista)
    })
}
//Buscar por id
exports.findOne = function(req,res)
{
    Inversionista.findOne({_id : req.params.id},function(err,inversionista){
        res.json(inversionista)
    })
}

//Buscar por email y password
exports.login = function(req,res,next)
{
    Inversionista.findOne({email : req.body.email,password : req.body.password},function(err,inversionista){
        res.json(inversionista)
    })
}

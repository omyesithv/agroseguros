const Usuarios = require("../models/usuarios.models");
let response ={
    msg:"",
    exito:false
}

exports.create = function(req,res)
{
    let usuarios = new Usuarios({
        email: req.body.email,
        password: req.body.password,
        tipo_usuario: req.body.tipo_usuario,
   
    })
    usuarios.save(function(err)
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
        response.msg = "Guardado con Exito"
        res.json(response)
    })              
}

exports.login = function(req,res,next)
{
    Usuarios.findOne({email : req.body.email,password : req.body.password},function(err,usuarios){
        res.json(usuarios)
    })
}

const { response, request } = require('express');
const express = require('express');
const miagricultor = require('../models/agricultor');
const router = express.Router();


//crear usuario
// router.post('/usuarioInsertar',(req,res)=>{
//    //res.send("Usuarios");
//    const usuario = miusuario(req.body);
//    usuario
//    .save()
//    .then((data)=>res.json(data))
//    .catch((error) => res.json({message:error}));
   
// });

//adicionar
router.post('/agricultorInsertar', async function (req, res, next) {
   const agricultor = new miagricultor({
     nombres: req.body.nombres,
     apellidos: req.body.apellidos,
     correo: req.body.correo,
     cedula: req.body.cedula,
     contraseña: req.body.contraseña,
     matriculai: req.body.matriculai,
     agremiacion: req.body.agremiacion,
     rut: req.body.rut,
     
   });
   await agricultor.save()
   //.then((data)=>res.json(data))
   //.catch((error) => res.json({message:error}));

   res.send(agricultor);
});

//listar
router.get('/agricultorListar',async function (req, res) {
   const usuariover = await miagricultor.find()
   .then((data)=>res.json(data))
   .catch((error) => res.json({message:error}));
  
   
});
//buscar
router.get('/agricultorBuscar/:id',async function (req, res) {
   const {id} = req.params;
   miagricultor
   .findById(id)
   .then((data)=>res.json(data))
   .catch((error) => res.json({message:error}));
  
   
});

//modificar
router.put('/agricultorModificar/:id',async function (req, res) {
   const {id} = req.params;
   const {nombres,apellidos,correo,cedula,contraseña,matriculai,agremiacion,rut} = req.body;
   miagricultor
   .updateOne({_id:id},{$set : {nombres,apellidos,correo,cedula,contraseña,matriculai,agremiacion,rut}})
   .then((data)=>res.json(data))
   .catch((error) => res.json({message:error}));
});

//eliminar
router.delete('/agricultorEliminar/:id',async function (req, res) {
   const {id} = req.params;
   miagricultor
   .deleteOne({_id:id})
   .then((data)=>res.json(data))
   .catch((error) => res.json({message:error}));
   
});

module.exports = router;
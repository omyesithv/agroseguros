var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require("./config/database");
var auth = require("./auth/main_auth");
var usuariosRouter = require("./routes/usuarios.router");
var cors = require('cors');
//var indexRouter = require('./routes/index');
var agricultorRouter = require('./routes/agricultor.router');
var inversionistaRouter = require('./routes/inversionista.router');
const inversionistasModel = require('./models/inversionistas.model');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// PORT
const port = process.env.PORT || 4000;

//Conexion a Mongodb
database.mongoConnect();

app.use('/usuarios',usuariosRouter);
//autorizacion
//app.use(auth);

//Router
//app.use('/', indexRouter);
app.use('/agricultor',agricultorRouter);
app.use('/inversionista',inversionistaRouter);

// iniciamos nuestro servidor
app.listen(port,() =>{
  console.log('API escuchando en el puerto ' + port)

})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



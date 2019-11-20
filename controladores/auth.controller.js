

const authService = require('../services/auth.service');
var mysql = require("mysql");
var bcrypt = require('bcryptjs');
const credenciales = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: "bd_rutinas"
};


function muestraInicio(req, res){
    res.render('index.ejs');
}

function muestraLogin(req, res){
    res.render('login.ejs', { message: req.flash('loginMessage') });
}

module.exports ={
    muestraInicio,
    muestraLogin
}
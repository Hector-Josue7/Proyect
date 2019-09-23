const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // para hacer autenticacion desde mi propia base de datos
const pool = require('../database'); // conexion a la base de datos
const helpers = require('./encriptaContraseñas');

passport.use('local.signin', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, username, password, done) => {
  // console.log(req.body)
  //console.log(username)
  // console.log(password)
  const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
  if (rows.length > 0) { // si has encontrado al usuario vamos a tratar de guardar el usuario
    const user = rows[0];
    const validPassword = await helpers.compararContraseñas(password, user.password) // compara la contraseña que pasa el usuario con la que hay en la base de datos
    if (validPassword) { // si la contraseña ha sido correcta   se pasa la contraseña del formulario y se pasa la contraseña cifrada
      done(null, user, req.flash('success', 'Welcome ' + user.username)); // se concatena el mensaje bienvenido + el nombre en la base de datos
    } else {
      done(null, false, req.flash('message', 'Incorrect Password'));
    }
  } else {
    return done(null, false, req.flash('message', 'The Username does not exists.'));
  }
}));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username', // voy a recibir este campo a travez de username
    passwordField: 'password',  // para decirle a travez de que campo voy a recibir la contraseña 
    passReqToCallback: true            
}, async (req, username, password, done)=>{ // done se usa cuando termina el proceso de autenticacion
//console.log(req.body);
const { fullname } = req.body;
const nuevoUsuario = {
    fullname,
    username,
    password

};  // antes de guardarlo se va a cifrar
nuevoUsuario.password = await helpers.encriptarContraseña(password); // metodo para poder cifrar la contraseña
 // Saving in the Database
const resultado = await pool.query('INSERT INTO users SET ?', nuevoUsuario);
nuevoUsuario.id = resultado.insertId;
return done(null, nuevoUsuario);
} ));

passport.serializeUser((user, done) =>{
done(null, user.id);  // cuando serializo guardo el id del usuario
});

passport.deserializeUser(async (id, done)=>{ // cuando deserializo estoy tomando ese id que he almacenado para volver a obtener los datos
const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
done(null, rows[0]);
}); // se consulta a la base de datos para ver si ese user id existe        
const bcrypt = require('bcryptjs');

const helpers = {};

helpers.encriptarContraseña = async (password) => {
const salt = await bcrypt.genSalt(10); // genSalt es para crear un hash
const hash = await bcrypt.hash(password, salt);
return hash; // una vez encriptada la contraseña vamos a devolver ese cifrado
};

helpers.compararContraseñas = async (password, savedPassword) =>{
try {
  return await bcrypt.compare(password, savedPassword); // retorna el resultado de esta consulta que va a tomar tiempo
}
catch(e){
console.log(e);
}
};
module.exports = helpers;
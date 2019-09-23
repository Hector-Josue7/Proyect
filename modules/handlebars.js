//const timeago = require('timeago.js');
//const timeagoInstance = timeago();
const { format } = require('timeago.js'); // se importa el metodo format de timeago
const helpers = {};

helpers.timeago = (timestamp) => {
   // return timeagoInstance.format(savedTimestamp);
  // console.log(timestamp);
   return format(timestamp); // el metodo format lo que hace es empezar a tomar un timestamp y convertirlo a un formato de dos minutos atras o publicado tres minutos atras
};

module.exports = helpers;

/*
// aqui vamos a especificar como va a comportarse o que es lo que va a hacer esa biblioteca timeago

const helpers = {};

helpers.timeago = (timestamp) => {  // este timestamp es el que se trae desde la base de datos
  
};
// mirar el minuto 1:28-42 del video
module.exports = helpers;
*/
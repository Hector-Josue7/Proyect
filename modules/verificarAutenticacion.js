//Para agregar seguridad a una ruta especifica:
module.exports = {
    isLoggedIn (req, res, next) {
        // if(req.session.correoUsuario)
        if (req.isAuthenticated()) { // se devuelve true si la sesion del usuario existe
            return next();
        }
        return res.redirect('/signin');
    }
};
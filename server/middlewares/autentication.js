const jwt = require('jsonwebtoken');

let verificaToken = (req, res, next) => {
  let token = req.get('token');

  jwt.verify(token, process.env.SEED_TOKEN, (err, decoded) => {
    if(err) {
      return res.status(401).json({
        ok: false,
        err
      })
    }
    req.usuario = decoded.usuario;
    next();
  })
};

let verificaAdminRol =  (req, res, next) => {
  let usuario = req.usuario;
  if(usuario.role === 'ADMIN_ROL') {
    next();
  } else {
    return res.status(401).json({
      ok: false,
      err: {
        message: 'El usuario no es administrador'
      }
    })
  }
};

module.exports = {
  verificaToken,
  verificaAdminRol
}
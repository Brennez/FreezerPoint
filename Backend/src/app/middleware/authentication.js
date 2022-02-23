import jwt from 'jsonwebtoken';

const authentication = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  const [, token] = authHeader.split(' ');

  if (!token) {
    return res.status(404).json({ error: 'Token de autorização não enviado!' });
  }

  try {
    const decode = await jwt.verify(token, 'textoUnico');
    console.log(decode);

    req.id = decode.id;
    req.name = decode.name;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token de autorização inválido' });
  }
};

export default authentication;

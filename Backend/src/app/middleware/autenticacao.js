import jwt from 'jsonwebtoken';

const autenticacao = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  const [, token] = authHeader.split(' ');

  if (!token) {
    return res.status(404).json({ erro: 'Token de autorização não enviado!' });
  }

  try {
    const decodificar = await jwt.verify(token, 'textounico');
    console.log(decodificar);

    req.id = decodificar.id;
    req.nome = decodificar.nome;

    return next();
  } catch (err) {
    return res.status(401).json({ erro: 'Token de autorização inválido' });
  }
};

export default autenticacao;

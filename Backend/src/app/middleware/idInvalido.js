import { isUuid } from 'uuidv4';

function isIdValido(req, res, next) {
  const { id } = req.query;
  if (!isUuid(id)) {
    return res.status(400).json({ erro: 'id invalido' });
  }
  return next();
}

export default isIdValido;

import { isUuid } from 'uuidv4';

function isIdValid(req, res, next) {
  const { id } = req.query;
  if (!isUuid(id)) {
    return res.status(400).json({ error: 'id invalido' });
  }
  return next();
}

export default isIdValid;

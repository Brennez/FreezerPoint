// import { UPSERT } from 'sequelize/types/lib/query-types';
import User from '../models/user';
import jwt from 'jsonwebtoken';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send({ error: 'Usuário não encontrado' });
    }

    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,
      },
      token: jwt.sign({ id, name }, 'textoUnico', { expiresIn: '7d' }),
    });
  }
}

export default new SessionController();

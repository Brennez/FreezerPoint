// import { UPSERT } from 'sequelize/types/lib/query-types';
import Usuario from '../models/usuario';
import jwt from 'jsonwebtoken';

class SessionController {
  async store(req, res) {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).send({ error: 'Usuário não encontrado' });
    }

    if (!(await usuario.checkSenha(senha))) {
      return res.status(401).send({ error: 'Senha incorreta' });
    }

    const { id, nome } = usuario;
    return res.json({
      usuario: {
        id,
        nome,
      },
      token: jwt.sign({ id, nome }, 'textounico', { expiresIn: '7d' }),
    });
  }
}

export default new SessionController();

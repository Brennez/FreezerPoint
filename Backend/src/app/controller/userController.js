import User from '../models/user';

class UserController {
  async store(req, res) {
    //Verifica se o usuário existe na base de dados antes de salvar
    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ message: 'Usuario já existe' });
    }

    const { name, phone, email, password, admin } = await User.create(req.body);
    console.log({ name, phone, email, password, admin });
    return res.json({ name, phone, email, password, admin });
  }

  async get(req, res, next) {
    const users = await User.findAll();
    res.json(users);
  }

  async getID(req, res) {
    // const { id } = req.body;
    const user = await User.findByPk(req.id);
    if (user === null) {
      res.json('Não encontrado!');
    } else {
      res.json(user); // true
      // Its primary key is 123
    }
  }

  //atualiza usuario
  async update(req, res) {
    const { newName } = req.body;

    const user = await User.findByPk(req.id);

    if (!user) {
      return res.status(404).json({ error: 'Usuário não existe' });
    }

    const { id, name, email } = usuario.update({ name: newName });

    res.json({ id, name, email });
  }

  //Atualizar email
  async updateEmail(req, res) {
    const { newEmail } = req.body;

    const user = await User.findByPk(req.id);

    if (!user) {
      return res.status(404).json({ error: 'Usuário não existe' });
    }

    const { id, name, email } = user.update({ email: newEmail });

    res.json({ id, name, email });
  }

  //verificar o bug de não conseguir acessar depois de trocar a password
  async updatePassword(req, res) {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findByPk(req.id);

    if (!user) {
      return res.status(404).json({ error: 'Usuário não existe' });
    }

    if (!user.checkpassword(oldPassword)) {
      return res.status(404).json({ error: 'password inválida' });
    }
    if (!user.checkpassword(newPassword)) {
      return res.status(404).json({ error: 'password igual' });
    }

    const newUser = await user.update({ password: newPassword });
    console.log(newUser);

    res.json(newUser);
  }

  //atualiza phone
  async updatePhone(req, res) {
    const { newPhone } = req.body;

    const user = await User.findByPk(req.id);

    if (!user) {
      return res.status(404).json({ error: 'Usuário não existe' });
    }

    const { id, name, email, phone } = user.update({
      phone: newPhone,
    });

    res.status(200).json({ id, name, email, phone });
  }

  // Deletar a conta
  async delete(req, res) {
    const { id } = req.body;
    const user = await User.findByPk(id);
    user.destroy();
    res.json('Usuario Excluido');
  }
}

export default new UserController();

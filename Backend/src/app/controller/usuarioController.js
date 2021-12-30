import Usuario from '../models/usuario';

class UsuarioController {
  async store(req, res) {
    //Verifica se o usuário existe na base de dados antes de salvar
    const userExists = await Usuario.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ mensagem: 'Usuario já existe' });
    }

    const { nome, telefone, email, senha, admin } = await Usuario.create(
      req.body,
    );
    console.log({ nome, telefone, email, senha, admin });
    return res.json({ nome, telefone, email, senha, admin });
  }

  async get(req, res, next) {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  }

  async getID(req, res) {
    // const { id } = req.body;
    const usuario = await Usuario.findByPk(req.id);
    if (usuario === null) {
      res.json('Not found!');
    } else {
      res.json(usuario); // true
      // Its primary key is 123
    }
  }

  //atualiza usuario
  async update(req, res) {
    const { novoNome } = req.body;

    const usuario = await Usuario.findByPk(req.id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não existe' });
    }

    const { id, nome, email } = usuario.update({ nome: novoNome });

    res.json({ id, nome, email });
  }

  //Atualizar email
  async updateEmail(req, res) {
    const { novoEmail } = req.body;

    const usuario = await Usuario.findByPk(req.id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não existe' });
    }

    const { id, nome, email } = usuario.update({ email: novoEmail });

    res.json({ id, nome, email });
  }

  //verificar o bug de não conseguir acessar depois de trocar a senha
  async updateSenha(req, res) {
    const { senhaVelha, senhaNova } = req.body;
    const usuario = await Usuario.findByPk(req.id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não existe' });
    }

    if (!usuario.checkSenha(senhaVelha)) {
      return res.status(404).json({ erro: 'Senha inválida' });
    }
    if (!usuario.checkSenha(senhaNova)) {
      return res.status(404).json({ erro: 'Senha igual' });
    }

    const user = await usuario.update({ senha: senhaNova });
    console.log(user);

    res.json(user);
  }

  //atualiza telefone
  async updateTelefone(req, res) {
    const { novoTelefone } = req.body;

    const usuario = await Usuario.findByPk(req.id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não existe' });
    }

    const { id, nome, email, telefone } = usuario.update({
      telefone: novoTelefone,
    });

    res.status(200).json({ id, nome, email, telefone });
  }

  // Deletar a conta
  async delete(req, res) {
    const { id } = req.body;
    const usuario = await Usuario.findByPk(id);
    usuario.destroy();
    res.json('Usuario Excluido');
  }
}

export default new UsuarioController();

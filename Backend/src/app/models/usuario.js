import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.STRING,
        senha_hash: Sequelize.VIRTUAL,
        // id: Sequelize.INTEGER,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );

    this.addHook('beforeSave', async (usuario) => {
      if (usuario.senha) {
        usuario.senha_hash = await bcrypt.hash(usuario.senha, 8);
        usuario.senha = usuario.senha_hash;
      }
    });
    return this;
  }

  checkSenha(senha) {
    return bcrypt.compare(senha, this.senha);
  }
}

export default Usuario;

/*
Cliente (Usuário):
Cadastro de Clientes;
    Nome;
    Imagem de Perfil;
    ID;
    E-mail;
    Senha;
    Admin = False;
Atualizar Dados Cadastrais;
Pesquisa de Clientes (Pesquisa de vendedores);
Excluir a conta;
*/

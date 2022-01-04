import { Router } from 'express';
import UC from './app/controller/usuarioController';
import LC from './app/controller/livroController';
import SC from './app/controller/SessionController';
import autenticacao from './app/middleware/autenticacao';
const routes = new Router();

// --------------------- ROTAS DE LIVRO -----------------------------//
routes.post('/createLivro', autenticacao, LC.store);
routes.get('/getLivro', LC.get);
routes.get('/getUmLivro/:id', LC.getId);
routes.put('/updateNomeLivro', autenticacao, LC.update);
routes.put('/updateAutor', autenticacao, LC.updateAutor);
routes.put('/updateCategoria', autenticacao, LC.updateCategoria);
routes.put('/updateSinopse', autenticacao, LC.updateSinopse);
routes.put('/updateEdicao', autenticacao, LC.updateEdicao);
routes.put('/updateGenero', autenticacao, LC.updateGenero);

// --------------------- ROTAS DE USUÁRIO ----------------------//

routes.put('/update', autenticacao, UC.update);
routes.put('/updateEmail', autenticacao, UC.updateEmail);
routes.put('/updateSenha', autenticacao, UC.updateSenha);
routes.put('/updateTelefone', autenticacao, UC.updateTelefone);
routes.delete('/deleteUsuario', autenticacao, UC.delete);
routes.get('/busca', UC.get);
routes.get('/buscaID', autenticacao, UC.getID);

// ------------------- ROTAS DE ACESSO -------------------------//

routes.post('/createUsuario', UC.store);
routes.post('/login', SC.store);
routes.post('/createAdmin', UC.store);

export default routes;

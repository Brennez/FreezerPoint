import { Router } from 'express';
import UC from './app/controller/usuarioController';
import LC from './app/controller/livroController';
import SC from './app/controller/SessionController';
import autenticacao from './app/middleware/autenticacao';
import ML from './app/controller/myListController';
import CL from './app/controller/cartListController';

const routes = new Router();

// --------------------- ROTAS DE LIVRO -----------------------------//
routes.post('/createLivro', autenticacao, LC.store);
routes.get('/getLivro', LC.get);
routes.get('/getUmLivro/:id', LC.getId);
routes.put('/updateNomeLivro/:id', autenticacao, LC.update);
routes.put('/updateAutor/:id', autenticacao, LC.updateAutor);
routes.put('/updateCategoria/:id', autenticacao, LC.updateCategoria);
routes.put('/updateSinopse/:id', autenticacao, LC.updateSinopse);
routes.put('/updateEdicao/:id', autenticacao, LC.updateEdicao);
routes.put('/updateGenero/:id', autenticacao, LC.updateGenero);
routes.put('/updateImage/:id', autenticacao, LC.updateImage);

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

// ------------------   ROTAS DA MINHA LISTA -------------------------//
routes.post('/createLista', ML.store);
routes.get('/searchLista/:id', ML.index);

// ------------------   ROTA DO CARRINHO  -------------------------//
routes.post('/createCart', CL.store);
routes.get('/getCart/:id', CL.index)

export default routes;

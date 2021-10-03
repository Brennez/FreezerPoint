import { Router } from 'express';
import UC from './app/controller/usuarioController';
import LC from './app/controller/livroController';
import SC from './app/controller/SessionController';
import autenticacao from './app/middleware/autenticacao';
const routes = new Router();

// routes.get('/', (req, res) => res.json({ mensage: 'Raiz funcionando' }));
routes.get('/busca', UC.get);
routes.get('/buscaID', autenticacao, UC.getID);
routes.get('/getLivro', LC.get);
routes.get('/getUmLivro', LC.getId);

// routes.get('/buscaNome', UC.getNome);
routes.post('/login', SC.store);
routes.post('/createUsuario', UC.store);
routes.post('/createAdmin', UC.store);
routes.post('/createLivro', autenticacao, LC.store);
// routes.use(autenticacao);

routes.put('/update', autenticacao, UC.update);
routes.put('/updateEmail', autenticacao, UC.updateEmail);
routes.put('/updateSenha', autenticacao, UC.updateSenha);
routes.put('/updateNomeLivro', autenticacao, LC.update);
routes.put('/updateAutor', autenticacao, LC.updateAutor);
routes.put('/updateCategoria', autenticacao, LC.updateCategoria);
routes.put('/updateSinopse', autenticacao, LC.updateSinopse);
routes.put('/updateEdicao', autenticacao, LC.updateEdicao);
routes.put('/updateGenero', autenticacao, LC.updateGenero);

routes.delete('/deleteUsuario', autenticacao, UC.delete);

export default routes;

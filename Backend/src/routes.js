import { Router } from 'express';
import UC from '../../Backend/src/app/controller/userController';
import BC from './app/controller/bookController';
import SC from './app/controller/SessionController';
import authentication from '../src/app/middleware/authentication';
import ML from '../src/app/controller/myListController';
import CL from '../src/app/controller/cartListController';
const routes = new Router();

// --------------------- ROTAS DE LIVRO -----------------------------//
routes.post('/createLivro', authentication, BC.store);
routes.get('/getLivro', BC.get);
routes.get('/searchLivro', BC.searchBook);
routes.get('/getABook/:id', BC.getId);
routes.put('/updateBookName/:id', authentication, BC.update);
routes.put('/updateAuthor/:id', authentication, BC.updateAuthor);
routes.put('/updateCategory/:id', authentication, BC.updateCategory);
routes.put('/updateSynopsis/:id', authentication, BC.updateSynopsis);
routes.put('/updateEdition/:id', authentication, BC.updateEdition);
routes.put('/updateGenre/:id', authentication, BC.updateGenre);
routes.put('/updateImage/:id', authentication, BC.updateImage);
routes.delete('/deleteBook/:id', BC.deleteBook);

// --------------------- ROTAS DE USUÁRIO ----------------------//

routes.put('/update', authentication, UC.update);
routes.put('/updateEmail', authentication, UC.updateEmail);
routes.put('/updatePassword', authentication, UC.updatePassword);
routes.put('/updatePhone', authentication, UC.updatePhone);
routes.delete('/deleteUser', authentication, UC.delete);
routes.get('/getUsers', UC.get);
routes.get('/searchID', authentication, UC.getID);

// ------------------- ROTAS DE ACESSO -------------------------//

routes.post('/createUser', UC.store);
routes.post('/login', SC.store);
routes.post('/createAdmin', UC.store);

// ------------------   ROTAS DA MINHA LISTA -------------------------//
routes.post('/createList', ML.store);
routes.get('/searchList/:id', ML.index);
routes.get('/getUserId/:id', ML.getUserId);
routes.delete('/deleteBookList/:id_user/:id_livro', ML.deleteBook);

// ------------------   ROTA DO CARRINHO  -------------------------//
routes.post('/createCart', CL.store);
routes.get('/getCart/:id', CL.index);
routes.delete('/deleteBookCart/:id_user/:id_livro', CL.deleteBook);

export default routes;

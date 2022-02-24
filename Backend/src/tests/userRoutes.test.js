const request = require("supertest");
const baseURL = "http://localhost:3001";

describe("User Routes", () => {
    /* 
        Rotas testadas 
        routes.post('/createUser', UC.store);
         routes.post('/login', SC.store);
    */

    /*
        @TODO 
        routes.put('/update', authentication, UC.update);
        routes.put('/updateEmail', authentication, UC.updateEmail);
        routes.put('/updatePassword', authentication, UC.updatePassword);
        routes.put('/updatePhone', authentication, UC.updatePhone);
        routes.delete('/deleteUser', authentication, UC.delete);
        routes.get('/getUsers', UC.get);
        routes.get('/searchID', authentication, UC.getID);

    */

          /*
      declare the token variable in a scope accessible
      by the entire test suite
    */

    let token;

    beforeAll((done) => {
      request(baseURL)
        .post('/login')
        .send({
          "email": "felipe@gmail.com",
          "password":"123456",
        })
        .end((err, response) => {
          token = response.body.token; // save the token!
          done();
        });
    });


    // Testando criação de usuário
    it("Will be possible to create a user", async () => {

        const newUser = await request(baseURL)
        .post('/createUser')
        .send({
            "name":"Arnaldo",
            "phone":"123456789",
            "email":"arnaldinho@gmail.com",
            "password":"123456"
        });

        expect(newUser.statusCode).toBe(200);
        expect(newUser).not.toBeNull();
        expect(newUser.body.name).toBe("Arnaldo");
    });

    it("Will be possible to make a login", async () => {
        const user = await request(baseURL)
        .post('/login')
        .send({
            "email":"arnaldinho@gmail.com",
            "password":"123456"
            });

        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
        expect(user.body.user.name).toBe("Arnaldo");
    });

    it("Will be possible to update the username", async () => {
        const user = await request(baseURL)
        .put('/update')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "name":"Fernandinho"
        });
        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
        expect(user.body).toBe("Nome atualizado");
    });
    
    it("Will be possible to update the email", async () => {
        const user = await request(baseURL)
        .put('/updateEmail')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "email":"fernandinho@gmail.com"
        });
        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
        expect(user.body).toBe("Email atualizado");
    });


    it("Will be possible to update the password", async () => {
        const user = await request(baseURL)
        .put('/updatePassword')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "password":"654321"
        });
        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
        expect(user.body).toBe("senha atualizada");

        
    });

    it("Will be possible to update the phone", async () => {
        const user = await request(baseURL)
        .put('/updatePhone')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "phone":"123456789"
        });
        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
        expect(user.body).toBe("telefone atualizado");
    });

    it("Will be possible to delete a user", async () => {
        const user = await request(baseURL)
        .delete('/deleteUser')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "id":"4"
        });
        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
        expect(user.body).toBe("Usuario Excluido");
    });

    it("Will be possible to return all users", async () => {
        const user = await request(baseURL)
        .get('/getUsers');

        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
    });

    it("Will be possible to get user by the id", async () => {
        const user = await request(baseURL)
        .get('/searchID')
        .send({
            "id":"8"
        } );

        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
        expect(user.body.name).toBe("felipe"); 

    });
});

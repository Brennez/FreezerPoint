const request = require("supertest");
const baseURL = "http://localhost:3001";

describe("User Routes", () => {

    // let token;

    // beforeAll((done) => {
    //   request(baseURL)
    //     .post('/login')
    //     .send({
    //       "email": "felipe@gmail.com",
    //       "password":"123456",
    //     })
    //     .end((err, response) => {
    //       token = response.body.token; // save the token!
    //       done();
    //     });
    // });


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
        const user2 = await request(baseURL)
        .post('/login')
        .send({
            "email":"arnaldinho@gmail.com",
            "password":"123456"
         });


        const user = await request(baseURL)
        .put('/update')
        .set('Authorization', `Bearer ${user2.body.token}`)
        .send({
            "newName":"Fernandinho"
        });
        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
        expect(user.body).toBe("Nome atualizado");
    });
    
    it("Will be possible to update the email", async () => {
        const user2 = await request(baseURL)
        .post('/login')
        .send({
            "email":"arnaldinho@gmail.com",
            "password":"123456"
         });

        const user = await request(baseURL)
        .put('/updateEmail')
        .set('Authorization', `Bearer ${user2.body.token}`)
        .send({
            "newEmail":"fernandinho@gmail.com"
        });
        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
        expect(user.body).toBe("Email atualizado");
    });


    it("Will be possible to update the password", async () => {
        const user2 = await request(baseURL)
        .post('/login')
        .send({
            "email":"fernandinho@gmail.com",
            "password":"123456"
         });

        const user = await request(baseURL)
        .put('/updatePassword')
        .set('Authorization', `Bearer ${user2.body.token}`)
        .send({
            "newPassword":"654321"
        });
        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
        expect(user.body).toBe("senha atualizada");

        
    });

    it("Will be possible to update the phone", async () => {
        const user2 = await request(baseURL)
        .post('/login')
        .send({
            "email":"fernandinho@gmail.com",
            "password":"654321"
         });


        const user = await request(baseURL)
        .put('/updatePhone')
        .set('Authorization', `Bearer ${user2.body.token}`)
        .send({
            "newPhone":"123456789"
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
            "id":"7"
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
            "id":"9"
        } );

        expect(user.statusCode).toBe(200);
        expect(user).not.toBeNull();
        expect(user.body.name).toBe("Fernandinho"); 
    });
});

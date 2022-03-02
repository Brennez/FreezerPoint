const request = require("supertest");
const baseURL = "http://localhost:3001";

describe("My List Routes", () => {

    it("Will be possible to create a book list", async () => {
        const user = await request(baseURL)
        .post('/login')
        .send({
          "email": "felipe@gmail.com",
          "password":"123456",
        });

        const newBook = await request(baseURL)
        .post('/createBook')
        .set('Authorization', `Bearer ${user.body.token}`)
        .send({
            "name":"O sonhador",
            "author":"Felipão",
            "category": "livro",
            "genre": "ficção",
            "edition":"2008",
            "synopsis":"um breve teste",
            "imageurl":"www.teste.com"
        });


        const newList = await request(baseURL)
        .post('/createList')
        .send({
          "id_user": user.body.user.id,
          "id_books": newBook.body.id
        });

        expect(newList.statusCode).toBe(200);
        expect(newList).not.toBeNull();
        expect(newList.body.id_user).toBe(user.body.user.id);
        expect(newList.body.id_books).toBe(newBook.body.id);
    });

    it("Will be possible to return a book from the list", async () => {
        const user = await request(baseURL)
        .post('/login')
        .send({
          "email": "felipe@gmail.com",
          "password":"123456",
        });

        const list = await request(baseURL)
        .get(`/searchList/${user.body.user.id}`);

        expect(list.statusCode).toBe(200);
        expect(list).not.toBeNull();
    });

    it("Will be possible to get a user by book id", async () => {
        const user = await request(baseURL)
        .post('/login')
        .send({
          "email": "felipe@gmail.com",
          "password":"123456",
        });

        const newBook = await request(baseURL)
        .post('/createBook')
        .set('Authorization', `Bearer ${user.body.token}`)
        .send({
            "name":"O sonhador 2",
            "author":"Felipão",
            "category": "livro",
            "genre": "ficção",
            "edition":"2008",
            "synopsis":"um breve teste",
            "imageurl":"www.teste2.com"
        });


        const newList = await request(baseURL)
        .post('/createList')
        .send({
          "id_user": user.body.user.id,
          "id_books": newBook.body.id
        });

        const list = await request(baseURL)
        .get(`/getUserId/${newBook.body.id}`);

        expect(list.statusCode).toBe(200);
        expect(list).not.toBeNull();    
    });

    it("Will be possible to delete a book from list", async () => {
        const user = await request(baseURL)
        .post('/login')
        .send({
          "email": "felipe@gmail.com",
          "password":"123456",
        });

        const newBook = await request(baseURL)
        .post('/createBook')
        .set('Authorization', `Bearer ${user.body.token}`)
        .send({
            "name":"O sonhador 2",
            "author":"Felipão",
            "category": "livro",
            "genre": "ficção",
            "edition":"2008",
            "synopsis":"um breve teste",
            "imageurl":"www.teste2.com"
        });


        const newList = await request(baseURL)
        .post('/createList')
        .send({
          "id_user": user.body.user.id,
          "id_books": newBook.body.id
        });

        const list = await request(baseURL)
        .delete(`/deleteBookList/${user.body.user.id}/${newBook.body.id}`);
        
        expect(list.statusCode).toBe(200);
        expect(list).not.toBeNull();
        expect(list.body).toBe("Livro excluido com sucesso!");        

    });
});

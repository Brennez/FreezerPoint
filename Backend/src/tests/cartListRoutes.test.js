const request = require("supertest");
const baseURL = "http://localhost:3001";

describe("My Cart List Routes", () => {

   
    it("Will be possible to create a cart list", async () => {

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

      

        const newCart = await request(baseURL)
        .post('/createCart')
        .send({
          "id_user": user.body.user.id,
          "id_book": newBook.body.id
        });

        expect(newCart.statusCode).toBe(200);
        expect(newCart).not.toBeNull();
        expect(newCart.body.id_user).toBe( user.body.user.id);
        expect(newCart.body.id_book).toBe( newBook.body.id);
    });

    it("Will be possible to return books from the cart", async () => {
        const user = await request(baseURL)
        .post('/login')
        .send({
          "email": "felipe@gmail.com",
          "password":"123456",
        });

        const cart = await request(baseURL)
        .get(`/getCart/${user.body.user.id}`);

        expect(cart.statusCode).toBe(200);
        expect(cart).not.toBeNull();
    });

   
    it("Will be possible to delete a book from cart", async () => {
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
            "name":"O sonhador parte 2",
            "author":"Felipão",
            "category": "livro",
            "genre": "ficção",
            "edition":"2008",
            "synopsis":"um breve teste",
            "imageurl":"www.teste2.com"
        });

        const newCart = await request(baseURL)
        .post('/createCart')
        .send({
          "id_user": user.body.user.id,
          "id_book": newBook.body.id
        });

        const cart = await request(baseURL)
        .delete(`/deleteBookCart/${user.body.user.id}/${newBook.body.id}`);
        
        expect(cart.statusCode).toBe(200);
        expect(cart).not.toBeNull();
        expect(cart.body).toBe("Livro excluido");        
    });
});

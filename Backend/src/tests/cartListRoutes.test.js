const request = require("supertest");
const baseURL = "http://localhost:3001";

describe("My Cart List Routes", () => {

    /* 
        routes.post('/createCart', CL.store);
        routes.get('/getCart/:id', CL.index);
        routes.delete('/deleteBookCart/:id_user/:id_book', CL.deleteBook);
    */

    it("Will be possible to create a cart list", async () => {
        const newCart = await request(baseURL)
        .post('/createCart')
        .send({
          "id_user":"10",
          "id_book":"5"
        });

        expect(newCart.statusCode).toBe(200);
        expect(newCart).not.toBeNull();
        expect(newCart.body.id_user).toBe(10);
        expect(newCart.body.id_book).toBe(5);
    });

    it("Will be possible to return books from the cart", async () => {
        const cart = await request(baseURL)
        .get('/getCart/10');

        expect(cart.statusCode).toBe(200);
        expect(cart).not.toBeNull();
        // expect(cart.body.id_user).toBe(10);
        // expect(cart.body.id_book).toBe(5);
    });

   
    it("Will be possible to delete a book from cart", async () => {
        const cart = await request(baseURL)
        .delete('/deleteBookCart/10/5');
        
        expect(cart.statusCode).toBe(200);
        expect(cart).not.toBeNull();
        expect(cart.body).toBe("Livro excluido");        

    });
});

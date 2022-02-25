const request = require("supertest");
const baseURL = "http://localhost:3001";

describe("My List Routes", () => {

    it("Will be possible to create a book list", async () => {
        const newList = await request(baseURL)
        .post('/createList')
        .send({
          "id_user":"10",
          "id_books":"5"
        });

        expect(newList.statusCode).toBe(200);
        expect(newList).not.toBeNull();
        expect(newList.body.id_user).toBe(10);
        expect(newList.body.id_books).toBe(5);
    });

    it("Will be possible to return a book from the list", async () => {
        const list = await request(baseURL)
        .get('/searchList/10');

        expect(list.statusCode).toBe(200);
        expect(list).not.toBeNull();
        // expect(list.body.id_user).toBe(10);
        // expect(list.body.id_books).toBe(5);

    });

    it("Will be possible to get a user by book id", async () => {
        const list = await request(baseURL)
        .get('/getUserId/5');

        expect(list.statusCode).toBe(200);
        expect(list).not.toBeNull();
        // expect(list.body.id_user).toBe(10);
        // expect(list.body.users.name).toBe("felipe");        
    });

    it("Will be possible to delete a book from list", async () => {
        const list = await request(baseURL)
        .delete('/deleteBookList/10/5');
        
        expect(list.statusCode).toBe(200);
        expect(list).not.toBeNull();
        expect(list.body).toBe("Livro excluido com sucesso!");        

    });
});

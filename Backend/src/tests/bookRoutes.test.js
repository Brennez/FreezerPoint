const request = require("supertest");
const baseURL = "http://localhost:3001";

describe("My book Routes", () => {

    let token

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

    it("Will be possible to create a book", async () => {
        const newBook = await request(baseURL)
        .post('/createBook')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "name":"O sonhador",
            "author":"Felipão",
            "category": "livro",
            "genre": "ficção",
            "edition":"2008",
            "synopsis":"um breve teste",
            "imageurl":"www.teste.com"
        });

        expect(newBook.statusCode).toBe(200);
        expect(newBook).not.toBeNull();
        expect(newBook.body.name).toBe("O sonhador");

    });
    it("Will be possible to get all book", async () => {
        const books = await request(baseURL)
        .get('/getBook');

        expect(books.statusCode).toBe(200);
        expect(books).not.toBeNull();
    });

    it("Will be possible to search a book", async () => {});

    it("Will be possible to get a book by id", async () => {
        const book = await request(baseURL)
        .get('/getABook/4');

        expect(book.statusCode).toBe(200);
        expect(book).not.toBeNull(); 
        expect(book.body.name).toBe("O sonhador");       
    });

    it("Will be possible to update a book", async () => {
        const book = await request(baseURL)
        .put('/updateBookName/4')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "name":"A ilusão"
        });

        expect(book.statusCode).toBe(200);
        expect(book).not.toBeNull(); 
        expect(book.body.name).toBe("A ilusão");
    });
    it("Will be possible to update author book", async () => {
        const book = await request(baseURL)
        .put('/updateAuthor/4')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "author":"Carlão"
        });

        expect(book.statusCode).toBe(200);
        expect(book).not.toBeNull(); 
        expect(book.body.author).toBe("Carlão");
    });
    it("Will be possible to update Category book", async () => {
        const book = await request(baseURL)
        .put('/updateCategory/4')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "category":"mangá"
        });

        expect(book.statusCode).toBe(200);
        expect(book).not.toBeNull(); 
        expect(book.body.category).toBe("mangá");
    });
    it("Will be possible to update synopsis book", async () => {
        const book = await request(baseURL)
        .put('/updateSynopsis/4')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "synopsis":"As desventuras dos testes"
        });

        expect(book.statusCode).toBe(200);
        expect(book).not.toBeNull(); 
        expect(book.body.synopsis).toBe("As desventuras dos testes");
    });
    it("Will be possible to update edition book", async () => {
        const book = await request(baseURL)
        .put('/updateEdition/4')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "edition":"2006"
        });

        expect(book.statusCode).toBe(200);
        expect(book).not.toBeNull(); 
        expect(book.body.edition).toBe("2006");
    });
    it("Will be possible to update genre book", async () => {
        const book = await request(baseURL)
        .put('/updateGenre/4')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "genre":"história"
        });

        expect(book.statusCode).toBe(200);
        expect(book).not.toBeNull(); 
        expect(book.body.genre).toBe("história");
    });
    it("Will be possible to update image book", async () => {
        const book = await request(baseURL)
        .put('/updateImage/4')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "imageurl":"www.dacerto.com"
        });

        expect(book.statusCode).toBe(200);
        expect(book).not.toBeNull(); 

        expect(book.body.imageurl).toBe("www.dacerto.com");
    });
    it("Will be possible to delete book", async () => {
        const book = await request(baseURL)
        .delete('/deleteBook/4')
        .set('Authorization', `Bearer ${token}`);

        expect(book.statusCode).toBe(200);
        expect(book).not.toBeNull(); 
        expect(book.body).toBe("Livro excluido");
    });

});
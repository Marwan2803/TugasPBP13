const request = require("supertest");
const app = require("../index");
const Prisma = require("../prisma/client");

beforeAll(async () => {
  await Prisma.actionMovies.deleteMany();
  await Prisma.comedyMovies.deleteMany();
  await Prisma.dramaMovies.deleteMany();
  await Prisma.horrorMovies.deleteMany();
  await Prisma.sciFiMovies.deleteMany();
});

afterAll(async () => {
  await Prisma.$disconnect();
});

describe("Movies API Endpoints", () => {
  const genre = "actionMovies";
  let id;

  test("GET /actionMovies - Read Action Movies Data", async () => {
    const response = await request(app).get("/actionMovies");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("movies");
  });

  test("GET /comedyMovies - Read Comedy Movies Data", async () => {
    const response = await request(app).get("/comedyMovies");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("movies");
  });

  test("GET /dramaMovies - Read Drama Movies Data", async () => {
    const response = await request(app).get("/dramaMovies");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("movies");
  });

  test("GET /horrorMovies - Read Horror Movies Data", async () => {
    const response = await request(app).get("/horrorMovies");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("movies");
  });

  test("GET /sciFiMovies - Read Sci-Fi Movies Data", async () => {
    const response = await request(app).get("/sciFiMovies");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("movies");
  });

  test("POST /movies/:genre", async () => {
    const response = await request(app).post(`/movies/${genre}`).send({
      title: "Inception",
      director: "Christopher Nolan",
      releaseYear: 2010,
      genre: "Action",
      rating: 8.8,
    });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("insertMovie");
    id = response.body.insertMovie.insertedMovie.id;
  });

  test("PUT /movies/:genre/:id ", async () => {
    const response = await request(app).put(`/movies/${genre}/${id}`).send({
      title: "Inception",
      director: "Christopher Nolan",
      releaseYear: 2010,
      genre: "Action",
      rating: 9.0,
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
  });

  test("DELETE /movies/:genre/:id - Delete Movie Data", async () => {
    const response = await request(app).delete(`/movies/${genre}/${id}`);

    expect(response.statusCode).toBe(202);
    expect(response.body).toHaveProperty("message");
  });
});
                                         

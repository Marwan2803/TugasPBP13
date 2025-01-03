const prisma = require("../prisma/client");
const { validateInsert, validateUpdate } = require("../utils/validators");

const getAllActionMovies = async () => {
  const moviesResponse = await prisma.actionMovies.findMany();
  return { movies: moviesResponse };
};

const getAllComedyMovies = async () => {
  const moviesResponse = await prisma.comedyMovies.findMany();
  return { movies: moviesResponse };
};

const getAllDramaMovies = async () => {
  const moviesResponse = await prisma.dramaMovies.findMany();
  return { movies: moviesResponse };
};

const getAllHorrorMovies = async () => {
  const moviesResponse = await prisma.horrorMovies.findMany();
  return { movies: moviesResponse };
};

const getAllSciFiMovies = async () => {
  const moviesResponse = await prisma.sciFiMovies.findMany();
  return { movies: moviesResponse };
};

const insertMovie = async (genre, title, director, releaseYear, rating) => {
  validateInsert(title, director, releaseYear, rating);
  const insertedMovie = await prisma[genre].create({
    data: {
      title,
      director,
      releaseYear,
      genre,
      rating,
    },
  });
  return { insertedMovie };
};

const updateMovie = async (id, genre, title, director, releaseYear, rating) => {
  validateUpdate(title, director, releaseYear, rating);
  const updatedMovie = await prisma[genre].update({
    where: { id: id },
    data: {
      title,
      director,
      releaseYear,
      genre,
      rating,
    },
  });
  return { updatedMovie };
};

const deleteMovie = async (genre, id) => {
  const deletedMovie = await prisma[genre].delete({
    where: { id: id },
  });
  return { deletedMovie };
};

module.exports = {
  getAllActionMovies,
  getAllComedyMovies,
  getAllDramaMovies,
  getAllHorrorMovies,
  getAllSciFiMovies,
  insertMovie,
  updateMovie,
  deleteMovie,
};

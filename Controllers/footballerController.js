const moviesService = require("../services/moviesService");

const getActionMovies = async (req, res, next) => {
  try {
    const movies = await moviesService.getAllActionMovies();
    res.status(200).json({ message: "Film berhasil diambil", movies });
  } catch (error) {
    next(error);
  }
};

const getComedyMovies = async (req, res, next) => {
  try {
    const movies = await moviesService.getAllComedyMovies();
    res.status(200).json({ message: "Film berhasil diambil", movies });
  } catch (error) {
    next(error);
  }
};

const getDramaMovies = async (req, res, next) => {
  try {
    const movies = await moviesService.getAllDramaMovies();
    res.status(200).json({ message: "Film berhasil diambil", movies });
  } catch (error) {
    next(error);
  }
};

const getHorrorMovies = async (req, res, next) => {
  try {
    const movies = await moviesService.getAllHorrorMovies();
    res.status(200).json({ message: "Film berhasil diambil", movies });
  } catch (error) {
    next(error);
  }
};

const getSciFiMovies = async (req, res, next) => {
  try {
    const movies = await moviesService.getAllSciFiMovies();
    res.status(200).json({ message: "Film berhasil diambil", movies });
  } catch (error) {
    next(error);
  }
};

const insertMovie = async (req, res, next) => {
  const genre = req.params.genre;
  const { title, director, releaseYear, rating } = req.body;

  try {
    const insertedMovie = await moviesService.insertMovie(
      genre,
      title,
      director,
      releaseYear,
      rating
    );

    res.status(201).json({
      message: "Film berhasil ditambahkan ke genre " + genre,
      insertedMovie,
    });
  } catch (error) {
    next(error);
  }
};

const updateMovie = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const genre = req.params.genre;

  const { title, director, releaseYear, rating } = req.body;

  try {
    const updatedMovie = await moviesService.updateMovie(
      id,
      genre,
      title,
      director,
      releaseYear,
      rating
    );
    res.status(200).json({ message: "Data film berhasil diupdate!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteMovie = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const genre = req.params.genre;
  try {
    const deletedMovie = await moviesService.deleteMovie(genre, id);
    res.status(202).json({ message: "Data film berhasil dihapus!" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getActionMovies,
  getComedyMovies,
  getDramaMovies,
  getHorrorMovies,
  getSciFiMovies,
  insertMovie,
  updateMovie,
  deleteMovie,
};

const express = require("express");
const {
  getActionMovies,
  getComedyMovies,
  getDramaMovies,
  getHorrorMovies,
  getSciFiMovies,
  insertMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

const router = express.Router();

router.get("/action", getActionMovies);
router.get("/comedy", getComedyMovies);
router.get("/drama", getDramaMovies);
router.get("/horror", getHorrorMovies);
router.get("/sci-fi", getSciFiMovies);
router.post("/movie/:genre", insertMovie);
router.put("/movie/:genre/:id", updateMovie);
router.delete("/movie/:genre/:id", deleteMovie);

module.exports = router;

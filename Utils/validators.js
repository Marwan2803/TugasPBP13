const { BadRequestError } = require("./errors");

const validateInsert = (title, director, releaseYear, genre, rating) => {
  if (!(title && director && releaseYear && genre && rating)) {
    throw new BadRequestError(
      "Title, director, releaseYear, genre, dan rating harus diisi!"
    );
  }
};

const validateUpdate = (title, director, releaseYear, genre, rating) => {
  if (!(title && director && releaseYear && genre && rating)) {
    throw new BadRequestError(
      "Title, director, releaseYear, genre, dan rating harus diisi!"
    );
  }
};

module.exports = { validateInsert, validateUpdate };

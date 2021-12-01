const connection = require("./db/connection");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./util");

const command = process.argv[2];

const app = async () => {
  if (command === "add") {
    const newMovie = {
      title: process.argv[3],
      actor: process.argv[4],
      rating: process.argv[5],
      id: process.argv[6],
    };
    await connection(addMovie, newMovie);
    console.log("Movie added");
  } else if (command === "list") {
    await connection(listMovies);
    console.log("Here's your list");
  } else if (command === "update") {
    const movieUpdate = {
      id: process.argv[3],
      title: process.argv[4],
      actor: process.argv[5],
      rating: process.argv[6],
    };
    await connection(updateMovie, movieUpdate);
  } else if (command === "delete") {
    const movieDelete = {
      id: process.argv[3],
    };
    console.log("Movie deleted");
    await connection(deleteMovie, movieDelete);
  } else {
    console.log("Incorrect input");
  }
};

app();

// const movieUpdate = {
//   targetTitle: process.argv[3],
//   title: process.argv[4],
//   actor: process.argv[5],
//   rating: process.argv[6]
// };

const connection = require("./db/connection");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
  deleteManyMov,
} = require("./util");

const command = process.argv[2];

const app = async () => {
  if (command === "add") {
    const newMovie = {
      id: process.argv[3],
      title: process.argv[4],
      actor: process.argv[5],
      rating: process.argv[6],
      genre: process.argv[7],
    };
    await connection(addMovie, newMovie);
    console.log("Movie added to your list!");
  } else if (command === "list") {
    await connection(listMovies);
    console.log("Here's your list :D");
  } else if (command === "update") {
    const movieUpdate = {
      id: process.argv[3],
      title: process.argv[4],
      actor: process.argv[5],
      rating: process.argv[6],
      genre: process.argv[7],
    };
    await connection(updateMovie, movieUpdate);
    console.log("Movie updated! ^^");
  } else if (command === "delete") {
    const movieDelete = {
      id: process.argv[3],
    };
    console.log("Movie deleted e.e");
    await connection(deleteMovie, movieDelete);
  } else if (command === "deleteManyMov") {
    const deleteManyMovies = {
      title: process.argv[3],
    };
    await connection(deleteManyMov, deleteManyMovies);
    console.log(`Movies deleted e.e`);
  } else {
    console.log("Incorrect input");
  }
};

app();

//  console.log(`${title.matchedCount}Movies deleted e.e`);

//Declare the function name exports.nameHere
exports.addMovie = async (collection, dataObj) => {
  try {
    await collection.insertOne(dataObj);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async (collection) => {
  try {
    const listAll = await collection.find().toArray(); //bring back our data
    console.log(listAll);
  } catch (error) {
    console.log(error);
  }
};

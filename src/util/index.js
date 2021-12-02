//Declare the function name = exports.nameHere
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

exports.deleteMovie = async (collection, dataObj) => {
  try {
    await collection.deleteOne(dataObj);
  } catch (error) {
    console.log(error);
  }
};

//CHECK FROM HERE!

exports.deleteManyMov = async (collection, dataObj) => {
  try {
    await collection.deleteMany({
      title: dataObj.title,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (collection, dataObj) => {
  try {
    // const updateOne =
    await collection.updateOne(
      {
        title: dataObj.title,
      },
      {
        $set: {
          title: dataObj.title,
          actor: dataObj.actor,
          rating: dataObj.rating,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

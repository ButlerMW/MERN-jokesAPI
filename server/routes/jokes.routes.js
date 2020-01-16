const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
  app.get("/api/jokes", JokesController.findAllJokes); //GET Returns a list of all jokes
  app.get("/api/random_joke", JokesController.findOneSingleJoke); //GET Returns a random joke
  app.post("/api/jokes/new", JokesController.createNewJoke); // PUT Crease the joke with matching _id
  app.put("/api/jokes/update/:id", JokesController.updateExistingJoke); // POST Updates a new joke
  app.delete("/api/jokes/delete/:id", JokesController.deleteAnExistingJoke); //Delete Removes the joke with matching _id
};
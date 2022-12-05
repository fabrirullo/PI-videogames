const express = require("express");
const router = express.Router();

const { Videogame, Genre } = require("../db.js");

//--------------POST /VIDEOGAME ------------------//
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body - Crea un videojuego en la base de datos
router.post("/", async (req, res) => {
  let { name, description, released, rating, platforms, genres, image } =
    req.body;

  if (!name || typeof name !== "string")
    return { error: "Error: Not a valid Name" };
  if (!description || typeof description !== "string")
    return { error: "Error: Not a valid description" };

  try {
    let genreDb = await Genre.findAll({
      where: { name: genres },
    });

    if (genreDb.length !== genres.length) {
      return res.json("Genero no encontrado");
    }

    let videogameCreated = await Videogame.create({
      name,
      description,
      released: released || "no data provided",
      rating: rating || 0,
      platforms,
      image: image ? image : "https://images.unsplash.com/photo-1631896928983-2c94ea6f97e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", //imagen por defecto
    });

    videogameCreated.addGenre(genreDb);
    res.send("Personaje creado con exito");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
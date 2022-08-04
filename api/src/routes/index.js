const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const { Videogame, Gender } = require("../db");
const { API_KEY } = process.env;
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// informacion de la API
const getApiInfo = async () => {
  let arrayPages = [];
  let pages = 1;
  // Buscar en Todas las 6 Paginas
  while (pages < 6) {
    let gamesURL = `https://api.rawg.io/api/games?key=${API_KEY}&page=${pages}`;
    arrayPages.push(gamesURL);
    pages++;
  }

  const apiPromiseUrl = await Promise.all(
    arrayPages.map((item) => axios(item).then((resp) => resp.data.results))
  );
  const apiGamesUrl = apiPromiseUrl.flat();

  const apiGamesInfo = apiGamesUrl.map((game) => {
    return {
      id: game.id,
      name: game.name,
      released: game.released,
      rating: game.rating,
      gender: game.genres.map((item) => item.name),
      platforms: game.platforms.map((item) => item.platform.name),
      background_image: game.background_image,
      description: game.description,
    };
  });
  return apiGamesInfo;
};

// // Guardar en la DB
// apiGamesInfo.forEach((e) => {
//   Videogame.bulkCreate([
//     {
//       name: e.name,
//       description: e.description,
//       release_date: e.released,
//       rating: e.rating,
//       genres: e.genres,
//       platforms: e.platforms,
//       background_image: e.background_image,
//     },
//   ]);
// });

// informacion de la Base de Datos
const getDBInfo = async () => {
  return await Videogame.findAll({
    include: {
      model: Gender,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

// informacion total de DB y API
const getAllVideogames = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDBInfo();
  const allInfo = [...apiInfo, ...dbInfo];

  return allInfo;
};

//  CREACION DE RUTAS
router.get("/videogames", async (req, res) => {
  // GET /videogames?name="..."
  const { name } = req.query;
  const allVideogames = await getAllVideogames();
  try {
    if (name) {
      const nameGames = allVideogames.filter((game) =>
        game.name.toLowerCase().includes(name.toLowerCase())
      );
      // Respuesta maximo 15 juegos. Tanto de la API como DB
      if (nameGames.length > 15) {
        const slicePage = nameGames.slice(0, 15);
        res.status(200).send(slicePage);
      } else {
        nameGames.length
          ? res.status(200).send(nameGames)
          : res.status(404).send("No se encuentra el Juego");
      }
    } else {
      // GET /videogames
      res.status(200).send(allVideogames);
    }
  } catch (error) {
    res.status(404).send("Not Found " + error);
  }
});

// GET /videogame/{idVideogame}
router.get("/videogame/:idVideogame", async (req, res) => {
  const { idVideogame } = req.params;
  const allVideogames = await getAllVideogames();
  try {
    if (idVideogame) {
      const videoGameId = allVideogames.filter(
        (item) => item.id.toString() === idVideogame
      );

      videoGameId.length
        ? res.status(200).json(videoGameId)
        : res.status(404).send("No found video game");
    }
  } catch (error) {
    res.status(404).send("Not Found");
  }
});

// GET /genders
router.get("/gender", async (req, res) => {
  const genderURL = `https://api.rawg.io/api/genres?key=${API_KEY}`;
  const genderApi = await axios.get(genderURL);
  const genderInfo = await genderApi.data.results.map((gender) => gender.name);
  try {
    genderInfo.forEach((item) => {
      Gender.findOrCreate({
        where: { name: item },
      });
    });
    const allGenders = await Gender.findAll();
    res.status(200).send(allGenders);
  } catch (error) {
    res.status(404).send(error);
  }
});

// POST /videogames
router.post("/videogames", async (req, res) => {
  const allVideogames = await getAllVideogames();
  const {
    name,
    description,
    released,
    rating,
    platforms,
    createdInDb,
    gender,
    background_image,
  } = req.body;
  try {
    if (
      allVideogames.find(
        (item) =>
          item.name.replace(/\s+/g, "").toLowerCase() ===
          name.replace(/\s+/g, "").toLowerCase()
      )
    ) {
      res.status(404).send("the game exists!!");
    } else {
      const createdVideoGames = await Videogame.create({
        name,
        description,
        released,
        rating,
        platforms,
        createdInDb: true,
        background_image,
      });

      let genderDB = await Gender.findAll({
        where: { name: gender },
      });

      createdVideoGames.addGender(genderDB);

      res.status(200).send(createdVideoGames);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;

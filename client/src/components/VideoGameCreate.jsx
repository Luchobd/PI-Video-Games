import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postVideogames, getGenders } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "../stylesheets/VideoGameCreate.css";
import { platformsList } from "../utils/arrayPlatforms";
import NavBar from "./NavBar";

// Validaciones
// function validate(input) {
//   let errors = {};
//   if (!input.name) {
//     errors.name = "Se requiere un Nombre";
//   } else if (!input.description) {
//     errors.description = "Se requiere una descripcion";
//   } else if (!input.released) {
//     errors.released = "Se requiere una fecha de salida";
//   } else if (!input.rating || input.rating < 1 || input.rating > 5) {
//     errors.rating = "rating invalido";
//   } else if (!input.platforms) {
//     errors.platforms = "Se requiere colocar por lo menos una plataforma";
//   } else if (!input.gender.length) {
//     errors.platforms = "Se requiere colocar por lo menos un genero";
//   }
//   return errors;
// }

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Se requiere un Nombre";
  } else if (!input.description) {
    errors.description = "Se requiere una descripcion";
  }
  return errors;
}

function VideoGameCreate() {
  const dispatch = useDispatch();
  const history = useHistory(); // redirige a la ruta que se le indique
  const allGenders = useSelector((state) => state.genders);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    background_image: "",
    description: "",
    released: "",
    rating: "",
    gender: [],
    platforms: [],
  });

  const inputs = {
    name: input.name,
    background_image: input.background_image,
    description: input.description,
    released: input.released,
    rating: input.rating,
    gender: input.gender,
    platforms: input.platforms.join(", "),
  };

  const allPlatforms = platformsList.map((item) => ({ name: item }));

  useEffect(() => {
    dispatch(getGenders());
  }, [dispatch]);

  const handleChange = (e) => {
    console.log(inputs);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  };

  // const handleCheck = (e) => { // Se trabaja con onChange
  //   if (e.target.checked) {
  //     setInput({
  //       ...input,
  //       status: e.target.value, // status es un valor del useState
  //     });
  //   }
  // };

  const handleSelectGenders = (e) => {
    setInput({
      ...input,
      gender: [...input.gender, e.target.value],
    });
  };

  const handleSelectPlatforms = (e) => {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value],
    });
  };

  const handleDeleteGenders = (e) => {
    setInput({
      ...input,
      gender: input.gender.filter((gend) => gend !== e),
    });
  };

  const handleDeletePlatforms = (e) => {
    setInput({
      ...input,
      platforms: input.platforms.filter((plat) => plat !== e),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    dispatch(postVideogames(inputs));
    // Presenta problemas al limpiar el formulario
    alert("Persona Creado");
    setInput({
      name: "",
      background_image: "",
      description: "",
      released: "",
      rating: "",
      gender: [],
      platforms: [],
    });
    history.push("/home");
  };
  return (
    <div>
      <NavBar />
      {/* <Link to="/home">
        <button>Back</button>
      </Link> */}
      <h2>Create Form</h2>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name"> Name of the videogame</label>
          <input
            name="name"
            type="text"
            value={input.name}
            placeholder="Enter Name"
            className="input__name_form"
            id="name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="image">Image of the videogame</label>
          <input
            name="background_image"
            type="text"
            value={input.background_image}
            placeholder="Enter Image"
            className="input__image_form"
            id="image"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="description">Description of the videogame</label>
          <textarea
            name="description"
            placeholder="Enter Description"
            value={input.description}
            className="input__description_form"
            id="description"
            onChange={(e) => handleChange(e)}
          />
          {errors.description && <p className="error">{errors.description}</p>}

          <label htmlFor="date">Videogame release date</label>
          <input
            name="released"
            type="date"
            className="input__date_form"
            min="1900-04-01"
            max="2022-08-30"
            id="date"
            onChange={(e) => handleChange(e)}
          />
          {/* {errors.released && <p className="error">{errors.released}</p>} */}

          <label htmlFor="rating">Rating of de videogame</label>
          <input
            name="rating"
            type="number"
            className="input__rating_form"
            min="1"
            max="5"
            step="0.01"
            id="rating"
            onChange={(e) => handleChange(e)}
          />
          {/* {errors.rating && <p className="error">{errors.rating}</p>} */}

          <label htmlFor="">Genders of the videogame</label>
          <select
            name="gender"
            className="input__gender_form"
            onChange={(e) => handleSelectGenders(e)}
          >
            {allGenders?.map((el) => (
              <option value={el.name} key={el.id}>
                {el.name}
              </option>
            ))}
          </select>
          {/* {errors.gender && <p className="error">{errors.gender}</p>} */}

          <div className="create__select">
            {input.gender.map((e, index) => (
              <div key={index}>
                <span onClick={() => handleDeleteGenders(e)} key={index}>
                  {e + " || "}
                </span>
              </div>
            ))}
          </div>
          <label htmlFor="">Types of platforms of the videogame</label>
          <select
            name="platforms"
            className="input__platform_form"
            onChange={(e) => handleSelectPlatforms(e)}
          >
            {allPlatforms?.map((item, index) => (
              <option value={item.name} key={index}>
                {item.name}
              </option>
            ))}
          </select>
          {/* {errors.platforms && <p className="error">{errors.platforms}</p>} */}

          <div className="create__select">
            {input.platforms.map((e, index) => (
              <div key={index}>
                <span onClick={() => handleDeletePlatforms(e)}>
                  {e + " || "}
                </span>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="btn__form"
            onClick={(e) => handleSubmit(e)}
          >
            Create videogames
          </button>
        </div>
      </form>
      {/* {input.gender.map((e, index) => (
        <div key={index}>
          <p>{e}</p>
          <button onClick={() => handleDeleteGenders(e)}>G</button>
        </div>
      ))}
      {input.platforms.map((e, index) => (
        <div key={index}>
          <p>{e}</p>
          <button onClick={() => handleDeletePlatforms(e)}>P</button>
        </div>
      ))} */}
    </div>
  );
}

export default VideoGameCreate;

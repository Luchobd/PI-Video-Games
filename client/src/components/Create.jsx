import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ErrorInputs from "./ErrorInputs";
import "../stylesheets/Create.css";

function Create() {
  const [input, setInput] = useState({
    name: "",
    description: "",
    release_date: "",
    rating: 1,
    genders: [],
    platform: [],
    background_image: "",
  });

  const [error, setError] = useState({
    name: false,
    description: false,
    release_date: false,
    rating: false,
    genders: false,
    platform: false,
    background_image: false,
  });

  const dispatch = useDispatch();

  //   const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar que no este vacio el campo input
    const {
      name,
      description,
      release_date,
      rating,
      // genders,
      // platform,
      background_image,
    } = input;

    if (!name || !description || !release_date) {
      return setError(true);
    }
    // validacion de los inputs
    if (!name || !description || !release_date) setError(true);
    else if (rating < 1 || rating > 5) return setError(true);
    // else if (!genders.length || !platform.length) return setError(true);
    else if (!background_image) return setError(true);
    else setError(false);

    // vaciar input
    setInput({
      name: "",
      description: "",
      release_date: "",
      rating: "",
    });
  };

  const handleChange = (e) => {
    setInput(() => ({ ...input, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {error && <ErrorInputs />}

      {/* <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder="Enter Name"
            className="input__name_form"
            id="name"
            onChange={handleChange}
          />

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            placeholder="Enter Description"
            value={input.description}
            className="input__description_form"
            id="description"
            onChange={handleChange}
          />

          <label htmlFor="date">Release Date</label>
          <input
            type="date"
            className="input__date_form"
            name="release_date"
            min="1900-04-01"
            max="2022-08-30"
            id="date"
            onChange={handleChange}
          />

          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            className="input__rating_form"
            name="rating"
            min="0"
            max="99999"
            id="rating"
            onChange={handleChange}
          />

          <label htmlFor="">Genders</label>
          <select
            name="genders"
            className="input__gender_form"
            value={input.genders}
            onChange={handleChange}
          >
            <option value="Gender">Genders</option>
          </select>

          <label htmlFor="">Platform</label>
          <select
            name="platforms"
            className="input__platform_form"
            value={input.platform}
            onChange={handleChange}
          >
            <option value="Platform">Platforms</option>
          </select>

          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="background_image"
            value={input.background_image}
            placeholder="Enter Image"
            className="input__image_form"
            id="image"
            onChange={handleChange}
          />

          <button type="submit" className="btn__form">
            Add Video Games
          </button>
        </div>
      </form> */}
    </>
  );
}

export default Create;

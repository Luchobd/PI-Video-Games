import React, { useState } from "react";
import "../stylesheets/VideoGameCreate.css";

function VideoGameCreate() {
  const [input, setInput] = useState({
    name: "",
    description: "",
    release: "",
    rating: 1,
    genders: [],
    platforms: [],
    background_image: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = () => {};
  return (
    <>
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
            onChange={() => handleChange()}
          />
          <label htmlFor="description">Description of the videogame</label>
          <textarea
            name="description"
            placeholder="Enter Description"
            value={input.description}
            className="input__description_form"
            id="description"
            onChange={() => handleChange()}
          />
          <label htmlFor="date">Videogame release date</label>
          <input
            name="release"
            type="date"
            className="input__date_form"
            min="1900-04-01"
            max="2022-08-30"
            id="date"
            onChange={() => handleChange()}
          />
          <label htmlFor="rating">Rating of de videogame</label>
          <input
            name="rating"
            type="number"
            className="input__rating_form"
            min="0"
            max="99999"
            id="rating"
            onChange={() => handleChange()}
          />
          <label htmlFor="">Genders of the videogame</label>
          <select
            name="genders"
            className="input__gender_form"
            onChange={() => handleChange()}
          >
            <option value="Gender">Genders</option>
          </select>

          <label htmlFor="">Types of platforms of the videogame</label>
          <select
            name="platforms"
            className="input__platform_form"
            onChange={() => handleChange()}
          >
            <option value="Platform">platforms</option>
          </select>

          <label htmlFor="image">Image of the videogame</label>
          <input
            name="background_image"
            type="text"
            value={input.background_image}
            placeholder="Enter Image"
            className="input__image_form"
            id="image"
            onChange={handleChange}
          />

          <button type="submit" className="btn__form">
            Create videogames
          </button>
        </div>
      </form>
    </>
  );
}

export default VideoGameCreate;

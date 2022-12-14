import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, cleanFilter } from "../redux/actions/index";
import "../stylesheets/Detail.css";

function Detail() {
  const dispatch = useDispatch();
  const { idVideogame } = useParams();

  useEffect(() => {
    dispatch(getDetail(idVideogame));
    return () => {
      dispatch(cleanFilter());
    };
  }, [dispatch, idVideogame]);

  const gameDetail = useSelector((state) => state.detail);

  // console.log(gameDetail);
  return (
    <>
      <div className="detail__container">
        <div className="detail__content">
          <section className="detail__content_info">
            <picture className="detail__img">
              <img
                src={gameDetail.background_image}
                alt="image_detail"
                width="200px"
                weight="250px"
              />
            </picture>

            <article>
              <h2 className="detail__title">{gameDetail.name}</h2>
              <h3 className="detail__genders">
                {gameDetail.genres
                  ? gameDetail.genres.map((e) => e + " ")
                  : gameDetail.genders}
              </h3>
              <h3 className="detail__date">{gameDetail.released}</h3>
              <h3 className="detail__rating">{`🌟 ${gameDetail.rating}`}</h3>
              <h3 className="detail__platforms">{gameDetail.platforms}</h3>
              <h5 className="detail__texto">
                {gameDetail.description_raw
                  ? gameDetail.description_raw
                  : gameDetail.description}
              </h5>
            </article>
          </section>
        </div>
      </div>

      <div className="detail__btn">
        <NavLink to="/home">
          <button className="btn__back">Home</button>
        </NavLink>
      </div>
    </>
  );
}

export default Detail;

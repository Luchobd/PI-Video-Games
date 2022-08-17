import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../redux/actions/index";
import "../stylesheets/Detail.css";

function Detail() {
  const dispatch = useDispatch();
  const { idVideogame } = useParams();

  useEffect(() => {
    dispatch(getDetail(idVideogame));
  }, [dispatch, idVideogame]);

  const gameDetail = useSelector((state) => state.detail);

  // console.log(dispatch(getDetail(props.match.params.idVideogame)));

  console.log(gameDetail);
  return (
    <div className="detail__container">
      <div className="detail__content">
        <section className="detail__content_info">
          <picture>
            <img
              src={gameDetail.background_image}
              alt="image_detail"
              width="200px"
              weight="250px"
            />
          </picture>
          <article>
            <h2 className="detail__title">{gameDetail.name}</h2>
            <h3>
              {gameDetail.genres ? gameDetail.genres : gameDetail.genders}
            </h3>
            <h3>{gameDetail.released}</h3>
            <h3>{gameDetail.rating}</h3>
            <h3>{gameDetail.platforms}</h3>
          </article>
        </section>
        <h5 className="detail__texto">
          {gameDetail.description_raw
            ? gameDetail.description_raw
            : gameDetail.description}
        </h5>

        <div className="detail__btn">
          <NavLink to="/home">
            <button className="btn__back">Back</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Detail;

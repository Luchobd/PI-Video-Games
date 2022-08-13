import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../redux/actions/index";
import NavBar from "./NavBar";

function Detail() {
  // console.log(props);
  const dispatch = useDispatch();
  const { idVideogame } = useParams();

  useEffect(() => {
    dispatch(getDetail(idVideogame));
  }, [dispatch, idVideogame]);

  const gameDetail = useSelector((state) => state.detail);

  // console.log(dispatch(getDetail(props.match.params.idVideogame)));
  // description_raw
  console.log(gameDetail);
  return (
    <div>
      <NavBar />
      <div>
        <h2>{gameDetail.name}</h2>
        <h2>
          {gameDetail.description_raw
            ? gameDetail.description_raw
            : gameDetail.description}
        </h2>
        <h3>{gameDetail.genres ? gameDetail.genres : gameDetail.genders}</h3>
        <h3>{gameDetail.released}</h3>
        <h4>{gameDetail.rating}</h4>
        <h5>{gameDetail.platforms}</h5>
        <img
          src={gameDetail.background_image}
          alt="img not fouuuuund"
          width="200px"
          weight="250px"
        />
      </div>
    </div>
  );
}

export default Detail;

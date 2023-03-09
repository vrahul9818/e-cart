import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./cont";
import Header from "./header";

const Main = () => {
  const { cartData, addCartData } = useContext(CartContext);
  const handelSubmit = (key) => {};

  const [newgame, setNewgame] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/game-displays?populate=*")
      .then((game) => {
        setNewgame(game.data.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {});
  }, []);
  console.log(newgame);

  return (
    <>
      <Header />
      <div className="container">
        {newgame.map((key, i) => {
          return (
            <div className="card" key={i}>
              <p className="game_name">{key.attributes.game_name}</p>
              <img
                className="game_image"
                src={`http://localhost:1337${key?.attributes?.game_image?.data?.attributes?.formats?.small?.url}`}
                alt={key.attributes.game_name}
              />
              <p className="price">{key?.attributes?.price}</p>
              <p className="Description">{key?.attributes?.Description}</p>
              <button
                className="button"
                onClick={() => {
                  addCartData(key.attributes);
                }}
              >
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;

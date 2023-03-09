import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { transferData } from "./context";

const Game_display = () => {

    const value = useContext(transferData)
    const[newgame ,setNewgame] = useState([]);

    const handelSubmit = (key) =>{
        value.setCart([...value.cart,key?.attributes])
        console.log(value.cart)
    }
    useEffect(()=>{
        axios.get("http://localhost:1337/api/game-displays?populate=*").then((game)=>{setNewgame(game.data.data)}).catch((e)=>{console.log(e)}).finally(()=>{})
    },[])

    console.log(value.cart)

    return(<>
    {
        newgame.map((key,i)=>{
            return (
                <div key={i}>
                    <p>{key.attributes.game_name}</p>
                    <img src={`http://localhost:1337${key?.attributes?.game_image?.data?.attributes?.formats?.small?.url}`} alt={key.attributes.game_name}/> 
                    <button onClick={() => {handelSubmit(key)}}>add to cart</button>
                </div>
            );
        })
    }
    </>)
}
export default Game_display
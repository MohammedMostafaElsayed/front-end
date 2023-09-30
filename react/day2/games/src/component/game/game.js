import { useEffect, useState } from "react";
import Card from "./gameCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInst from "../../api/config.js"
function ShowGame() {
    const [gameList, setgameList] = useState([]);
    useEffect(()=>{
        // axios
        // .get('https://api.noroff.dev/api/v1/gamehub')
        // .then((res)=>{setgameList(res.data)})
        // .catch((err)=>{console.log(err)})

        axiosInst
        .get('/square-eyes')
        .then((res)=>{setgameList(res.data)})
        .catch((err)=>{console.log(err)})

    },[]);
    const navigate = useNavigate();
    const deleteGame = (id) =>{
        const updatedList = gameList.filter(game => game.id !== id);
        setgameList(updatedList)
    }
    const handel = (id) => {
        navigate(`/blog/${id}`)
    }
   
    return (
        <>
            <h1>Game List</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    gameList.map((g, index) => {
                        return (

                            <Card gd={g} btn={'delete'} event={deleteGame} handel={handel}/>
                          );

                    })
                };
            </div>
        </>
    );
}
export default ShowGame;
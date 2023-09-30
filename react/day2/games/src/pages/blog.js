import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Blog(){
    const value = useParams();
    const[gameList, setgameList] = useState({});
    useEffect(()=>{
        axios
        .get(`https://api.noroff.dev/api/v1/square-eyes/${value.id}`)
        .then((res)=>{setgameList(res.data)})
        .catch((err)=>{console.log(err)})
    },[]);
    return(
        <h1>{gameList?.title}</h1>
    );
}
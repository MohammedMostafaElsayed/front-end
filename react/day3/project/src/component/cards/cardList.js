import axiosInst from './api/config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './cards';

export default function CardList(){
    const [product, setProudct] = useState([]);
    useEffect(()=>{
      axios
      .get('https://api.noroff.dev/api/v1/square-eyes')
      .then((res)=>{setProudct(res.data)})
      .catch((err)=>{console.log(err)})
    },[]);
    return(
        <>
            <h1>products</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    product.map((p,i)=>{
                        return(
                            <Card item={p}/>
                        );
                    })
                };
            </div>
        </>
    );
}
import axios from "axios"
import { useState,useEffect } from "react"
import "./showMovies.css"



export const ShowMovies = ()=>{

    const [data,setData] = useState([])

    useEffect(()=>{
        getData()
    },[])

    async function getData(){
        let result = await axios.get("http://localhost:5000/movies")
        setData(result.data)
    }

    console.log(data)

    return<div className="container">
        {data.map((e)=>{
            return<div>
                <img src={e.image}/>
                <h2>{e.title}</h2>
                <h3>{e.year} {e.ratings}</h3>
            </div>
        })}
    </div>
    }
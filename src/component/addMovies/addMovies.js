import { useState } from "react"
import axios from "axios"
import "./addMovies.css"


export const AddMovies = ()=>{

    const [text,setText] = useState({})

function handleChange(e){
const {name,value} = e.target;
setText({...text,[name]:value})
}

async function AddMovies(){
let result = await axios.post("http://localhost:5000/movies",text)
console.log(result.data)
}

return(
<div className="register">
<input className="inputBox"  placeholder="enter image link" onChange={handleChange} name="image" required/>
<input className="inputBox" placeholder="enter Title here" onChange={handleChange} name="title" required />
<input className="inputBox" placeholder="enter year here" onChange={handleChange} name="year" required/>
<input className="inputBox" placeholder="enter ratings here" onChange={handleChange} name="ratings" required/>
<button  className="appButton" onClick={AddMovies}>upload</button>
</div>   
)
}